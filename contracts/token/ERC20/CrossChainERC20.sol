// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC20.sol";
import "./extensions/ICrossChainERC20Metadata.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard token ERC-20.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC20 is ERC20, ICrossChainERC20, RouterCrossTalk {
    uint256 private _crossChainGas;

    /**
     * @dev Sets the values for {name}, {symbol} and {genericHandler}
     *
     * All three of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(
        string memory name_,
        string memory symbol_,
        address genericHandler_
    ) ERC20(name_, symbol_) RouterCrossTalk(genericHandler_) {}

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return
            interfaceId == type(ICrossChainERC20).interfaceId ||
            interfaceId == type(ICrossChainERC20Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /**
     * @notice setCrossChainGas Used to set CrossChainGas, this can only be set by CrossChain Admin or Admins
     * @param _gas Amount of gas that is to be set
     */
    function _setCrossChainGas(uint256 _gas) internal {
        _crossChainGas = _gas;
    }

    /**
     * @notice fetchCrossChainGas Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGas() external view override returns (uint256) {
        return _crossChainGas;
    }

    function transferCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256 _amount
    ) public virtual override returns (bool) {
        _burn(msg.sender, _amount);
        _sendCrossChain(_chainID, _recipient, _amount);
        return true;
    }

    /**
     * @notice _sendCrossChain This is an internal function to generate a cross chain communication request
     */
    function _sendCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256 _amount
    ) internal returns (bool) {
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256)"));
        bytes memory _data = abi.encode(_recipient, _amount);
        bool success = routerSend(_chainID, _selector, _data, _crossChainGas);
        return success;
    }

    /**
     * @notice _routerSyncHandler This is an internal function to control the handling of various selectors and its corresponding
     * @param _selector Selector to interface.
     * @param _data Data to be handled.
     */
    function _routerSyncHandler(bytes4 _selector, bytes memory _data)
        internal
        virtual
        override
        returns (bool, bytes memory)
    {
        (address _r, uint256 _v) = abi.decode(_data, (address, uint256));
        (bool success, bytes memory returnData) = address(this).call(abi.encodeWithSelector(_selector, _r, _v));
        return (success, returnData);
    }

    /**
     * @notice receiveCrossChain Creates `_amount` tokens to `_to` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _recipient Address of the recipient on the destination chain
     * @param _amount Number of tokens
     * @return bool returns true when completed
     */
    function receiveCrossChain(address _recipient, uint256 _amount) external isSelf returns (bool) {
        _mint(_recipient, _amount);
        return true;
    }
}
