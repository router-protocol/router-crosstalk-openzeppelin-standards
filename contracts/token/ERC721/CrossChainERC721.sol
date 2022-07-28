// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the basic standard token ERC-721.
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
contract CrossChainERC721 is ERC721, ICrossChainERC721, RouterCrossTalk {
    uint256 private _crossChainGas;

    constructor(
        string memory name_,
        string memory symbol_,
        address genericHandler_
    ) ERC721(name_, symbol_) RouterCrossTalk(genericHandler_) {}

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165, ERC721)
        returns (bool)
    {
        return
            interfaceId == type(ICrossChainERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
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
        uint256 _tokenId
    ) internal returns (bool) {
        _burn(_tokenId);
        bytes4 _selector = bytes4(keccak256("receiveCrossChain(address,uint256)"));
        bytes memory _data = abi.encode(_recipient, _tokenId);
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
        (address _recipient, uint256 _tokenId) = abi.decode(_data, (address, uint256));
        (bool success, bytes memory returnData) = address(this).call(
            abi.encodeWithSelector(_selector, _recipient, _tokenId)
        );
        return (success, returnData);
    }

    /**
     * @notice receiveCrossChain Mints token `_tokenId` to `_recipient` on the destination chain
     *
     * NOTE: It can only be called by current contract.
     *
     * @param _recipient Address of the recipient on destination chain
     * @param _tokenId TokenId to be minted on destination chain
     * @return bool returns true when completed
     */
    function receiveCrossChain(address _recipient, uint256 _tokenId) external isSelf returns (bool) {
        _mint(_recipient, _tokenId);
        return true;
    }
}
