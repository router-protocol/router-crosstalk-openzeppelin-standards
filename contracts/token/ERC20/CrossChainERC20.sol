// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC20.sol";
import "./extensions/ICrossChainERC20Metadata.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard token ERC-20.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC20 is ERC20, ICrossChainERC20, AccessControl, RouterCrossTalk {
    uint256 private _crossChainGas;
    bytes32 public constant CROSSCHAIN_ADMIN_ROLE = keccak256("CROSSCHAIN_ADMIN_ROLE");

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
    ) ERC20(name_, symbol_) RouterCrossTalk(genericHandler_) AccessControl() {
        _setupRole(CROSSCHAIN_ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165, AccessControl)
        returns (bool)
    {
        return
            interfaceId == type(ICrossChainERC20).interfaceId ||
            interfaceId == type(ICrossChainERC20Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /* CROSSTALK ADMINISTRATIVE FUNCTIONS */

    /**
     * @notice setLinker Used to set linker address, this can only be set by CrossChain Admin or Admins
     * @param _address Address of linker
     */
    function setLinker(address _address) external virtual override onlyRole(CROSSCHAIN_ADMIN_ROLE) {
        setLink(_address);
    }

    /**
     * @notice setFeeAddress Used to set fee token address, this can only be set by CrossChain Admin or Admins
     * @param _feeToken Address of fee token
     */
    function setFeeAddress(address _feeToken) external virtual override onlyRole(CROSSCHAIN_ADMIN_ROLE) {
        setFeeToken(_feeToken);
    }

    /**
     * @notice setCrossChainGas Used to set CrossChainGas, this can only be set by CrossChain Admin or Admins
     * @param _gas Amount of gas that is to be set
     */
    function setCrossChainGas(uint256 _gas) external virtual override onlyRole(CROSSCHAIN_ADMIN_ROLE) {
        _crossChainGas = _gas;
    }

    /**
     * @notice fetchCrossChainGas Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGas() public view override returns (uint256) {
        return _crossChainGas;
    }

    /**
     * @notice transferCrossChain Destroys `_amount` tokens from `_from` on the current chain
     * and calls an internal function to generate a crosschain communication request to chain `_chainID`
     * @param _chainID Destination ChainID
     * @param _from Address of the Owner
     * @param _amount Number of tokens
     * @return bool returns true when completed
     */
    function transferCrossChain(
        uint8 _chainID,
        address _from,
        uint256 _amount
    ) external returns (bool) {
        _burn(_from, _amount);
        _sendCrossChain(_chainID, _from, _amount);
        return true;
    }

    /**
     * @notice _sendCrossChain This is an internal function to generate a cross chain communication request
     */
    function _sendCrossChain(
        uint8 _chainID,
        address _from,
        uint256 _amount
    ) internal returns (bool) {
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256)"));
        bytes memory _data = abi.encode(_from, _amount);
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
        (bool success, bytes memory returnData) = address(this).call(abi.encodeWithSelector(_selector, _data));
        return (success, returnData);
    }

    /**
     * @notice receiveCrossChain Creates `_amount` tokens to `_to` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _to Address of the Owner
     * @param _amount Number of tokens
     * @return bool returns true when completed
     */
    function receiveCrossChain(address _to, uint256 _amount) external isSelf returns (bool) {
        _mint(_to, _amount);
        return true;
    }
}
