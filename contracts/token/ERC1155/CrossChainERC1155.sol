// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC1155.sol";
import "./extensions/ICrossChainERC1155MetadataURI.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard multi-token ERC-1155.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC1155 is ERC1155, ICrossChainERC1155, AccessControl, RouterCrossTalk {
    uint256 private _crossChainGas;

    bytes32 public constant CROSSCHAIN_ADMIN_ROLE = keccak256("CROSSCHAIN_ADMIN_ROLE");

    constructor(string memory uri_, address genericHandler_)
        ERC1155(uri_)
        RouterCrossTalk(genericHandler_)
        AccessControl()
    {
        _setupRole(CROSSCHAIN_ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165, AccessControl, ERC1155)
        returns (bool)
    {
        return
            interfaceId == type(ICrossChainERC1155).interfaceId ||
            interfaceId == type(ICrossChainERC1155MetadataURI).interfaceId ||
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
     * @notice transferCrossChain Destroys `_amount` tokens of token type `_id` from `_from` on the current chain
     * and calls an internal function to generate a crosschain communication request to chain `_chainID`
     * @param _chainID Destination ChainID
     * @param _from Address of the Owner
     * @param _id TokenId
     * @param _amount Number of tokens
     * @param _data Additional data used to mint on destination side
     * @return bool returns true when completed
     */
    function transferCrossChain(
        uint8 _chainID,
        address _from,
        uint256 _id,
        uint256 _amount,
        bytes memory _data
    ) external virtual override returns (bool) {
        _burn(_from, _id, _amount);
        uint256[] memory id = new uint256[](1);
        uint256[] memory amount = new uint256[](1);
        id[0] = _id;
        amount[0] = _amount;
        _sendCrossChain(_chainID, _from, id, amount, _data);
        return true;
    }

    /**
     * @notice transferBatchCrossChain Destroys `_amounts` tokens of token type `_ids` from `_from` on the current chain
     * and calls an internal function to generate a crosschain communication request to chain with `_chainID`
     * @param _chainID Destination ChainID
     * @param _from Address of the owner
     * @param _ids TokenId
     * @param _amounts Number of tokens with `_ids`
     * @param _data Data with which tokens are minted on destination side
     * @return bool returns true when completed
     */
    function transferBatchCrossChain(
        uint8 _chainID,
        address _from,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) external virtual override returns (bool) {
        _burnBatch(_from, _ids, _amounts);
        _sendCrossChain(_chainID, _from, _ids, _amounts, _data);
        return true;
    }

    /**
     * @notice _sendCrossChain This is an internal function to generate a cross chain communication request
     */
    function _sendCrossChain(
        uint8 _chainID,
        address _from,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) internal returns (bool) {
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256[],uint256[],bytes)"));
        bytes memory data = abi.encode(_from, _ids, _amounts, _data);
        bool success = routerSend(_chainID, _selector, data, _crossChainGas);
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
     * @notice receiveCrossChain Creates `_amount` tokens of token type `_id` to `_to` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _to Address of the Owner
     * @param _ids TokenIds
     * @param _amounts Number of tokens with `_ids`
     * @param _data Additional data used to mint on destination side
     * @return bool returns true when completed
     */
    function receiveCrossChain(
        address _to,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) external isSelf returns (bool) {
        if (_ids.length == 1 && _amounts.length == 1) {
            _mint(_to, _ids[0], _amounts[0], _data);
        } else {
            _mintBatch(_to, _ids, _amounts, _data);
        }
        return true;
    }
}
