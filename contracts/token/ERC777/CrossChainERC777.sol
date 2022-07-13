// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC777.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard token ERC-777.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC777 is ERC777, ICrossChainERC777, RouterCrossTalk {
    uint256 private _crossChainGas;

    /**
     * @dev `defaultOperators` may be an empty array.
     */
    constructor(
        string memory name_,
        string memory symbol_,
        address[] memory defaultOperators_,
        address genericHandler_
    ) ERC777(name_, symbol_, defaultOperators_) RouterCrossTalk(genericHandler_) {}

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(ICrossChainERC777).interfaceId || super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {ICrossChainERC777-totalSupply}.
     */
    function totalSupply() public view virtual override(ERC777, ICrossChainERC777) returns (uint256) {
        uint256 supply = super.totalSupply();
        return supply;
    }

    /**
     * @dev Returns the amount of tokens owned by an account (`tokenHolder`).
     */
    function balanceOf(address tokenHolder) public view virtual override(ERC777, ICrossChainERC777) returns (uint256) {
        uint256 balance = super.balanceOf(tokenHolder);
        return balance;
    }

    /**
     * @notice _setCrossChainGas Used to set CrossChainGas, this can only be set by CrossChain Admin or Admins
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

    /**
     * @notice transferCrossChain Destroys `_amount` tokens from caller's account on the current chain
     * and calls an internal function to generate a crosschain communication request for transfer to destination chain `_chainID`
     * @param chainID Destination ChainID
     * @param recipient Address of the recipient
     * @param amount Number of tokens to be burnt on current chain and minted on destination chain
     *
     * @dev See {IERC777-burn} and {IERC777-_mint}
     * @return bool returns true when completed
     */
    function _transferCrossChain(
        uint8 chainID,
        address recipient,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData
    ) internal returns (bool) {
        burn(amount, userData);
        _sendCrossChain(chainID, recipient, amount, userData, operatorData);
        return true;
    }

    /**
     * @notice operatorTransferCrossChain Destroys `_amount` tokens from `account` on the current chain
     * and calls an internal function to generate a crosschain communication request for transfer to destination chain `_chainID`
     *
     * The caller must be an operator of `account`.
     *
     * If a send hook is registered for `account`, the corresponding function
     * will be called with `userData` and `operatorData`. See {IERC777Sender}.
     * @param chainID Destination ChainID
     * @param owner Address of the tokenHolder
     * @param recipient Address of the recipient on destination chainid
     * @param amount Number of tokens to be burnt on current chain and minted on destination chain
     *
     * @dev See {IERC777-operatorBurn} and {IERC777-_mint}
     * @return bool returns true when completed
     */
    function _operatorTransferCrossChain(
        uint8 chainID,
        address owner,
        address recipient,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData
    ) internal returns (bool) {
        operatorBurn(owner, amount, userData, operatorData);
        _sendCrossChain(chainID, recipient, amount, userData, operatorData);
        return true;
    }

    /**
     * @notice _sendCrossChain This is an internal function to generate a cross chain communication request
     */
    function _sendCrossChain(
        uint8 _chainID,
        address recipient,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData
    ) internal returns (bool) {
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256,bytes,bytes)"));
        bytes memory _data = abi.encode(recipient, amount, userData, operatorData);
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
        (address _r, uint256 _a, bytes memory _ud, bytes memory _od) = abi.decode(
            _data,
            (address, uint256, bytes, bytes)
        );
        (bool success, bytes memory returnData) = address(this).call(
            abi.encodeWithSelector(_selector, _r, _a, _ud, _od)
        );
        return (success, returnData);
    }

    /**
     * @notice receiveCrossChain Creates `_amount` tokens to `_recipient` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _recipient recipient of tokens on destination chain
     * @param _amount Number of tokens

     * @dev See {IERC777-_mint}
     * @return bool returns true when completed
     */
    function receiveCrossChain(
        address _recipient,
        uint256 _amount,
        bytes memory _userData,
        bytes memory _operatorData
    ) external isSelf returns (bool) {
        _mint(_recipient, _amount, _userData, _operatorData);
        return true;
    }
}
