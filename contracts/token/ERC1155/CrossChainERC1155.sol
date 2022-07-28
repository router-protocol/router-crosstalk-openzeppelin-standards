// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC1155.sol";
import "./extensions/ICrossChainERC1155MetadataURI.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard multi-token ERC-1155.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC1155 is ERC1155, ICrossChainERC1155, RouterCrossTalk {
    uint256 private _crossChainGas;

    constructor(string memory uri_, address genericHandler_) ERC1155(uri_) RouterCrossTalk(genericHandler_) {}

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165, ERC1155)
        returns (bool)
    {
        return
            interfaceId == type(ICrossChainERC1155).interfaceId ||
            interfaceId == type(ICrossChainERC1155MetadataURI).interfaceId ||
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

    /**
     * @notice _sendCrossChain This is an internal function to generate a cross chain communication request
     */
    function _sendCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) internal returns (bool) {
        _burnBatch(msg.sender, _ids, _amounts);
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256[],uint256[],bytes)"));
        bytes memory data = abi.encode(_recipient, _ids, _amounts, _data);
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
        (address _recipient, uint256[] memory _ids, uint256[] memory _amounts, bytes memory data) = abi.decode(
            _data,
            (address, uint256[], uint256[], bytes)
        );
        (bool success, bytes memory returnData) = address(this).call(
            abi.encodeWithSelector(_selector, _recipient, _ids, _amounts, data)
        );
        return (success, returnData);
    }

    /**
     * @notice receiveCrossChain Creates `_amounts` tokens of token type `_ids` to `_recipient` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _recipient Address of the recipient on destination chain
     * @param _ids TokenIds
     * @param _amounts Number of tokens with `_ids`
     * @param _data Additional data used to mint on destination side
     * @return bool returns true when completed
     */
    function receiveCrossChain(
        address _recipient,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) external isSelf returns (bool) {
        _mintBatch(_recipient, _ids, _amounts, _data);
        return true;
    }
}
