// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../token/ERC1155/CrossChainERC1155.sol";

contract MyCrossChainERC1155 is CrossChainERC1155 {
    address public owner;

    constructor(string memory uri_, address genericHandler_) CrossChainERC1155(uri_, genericHandler_) {
        owner = msg.sender;
        uint256[] memory ids = new uint256[](3);
        ids[0] = 1;
        ids[1] = 2;
        ids[2] = 3;
        uint256[] memory amounts = new uint256[](3);
        amounts[0] = 5;
        amounts[1] = 5;
        amounts[2] = 5;
        _mintBatch(msg.sender, ids, amounts, "");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(
        address _to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public {
        _mintBatch(_to, ids, amounts, "");
    }

    /* ADMINISTRATIVE FUNCTIONS */

    function setLinker(address _linker) public onlyOwner {
        setLink(_linker);
    }

    function setFeeAddress(address _feeAddress) public onlyOwner {
        setFeeToken(_feeAddress);
    }

    function setCrossChainGas(uint256 _gas) public onlyOwner {
        _setCrossChainGasLimit(_gas);
    }

    function approveFee(address _feeToken, uint256 _value) external onlyOwner {
        approveFees(_feeToken, _value);
    }

    /* ADMINISTRATIVE FUNCTIONS END */

    function transferCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data,
        uint256 _crossChainGasPrice
    ) external {
        _sendCrossChain(_chainID, _recipient, _ids, _amounts, _data, _crossChainGasPrice);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(CrossChainERC1155) returns (bool) {
        return
            interfaceId == type(ICrossChainERC1155).interfaceId ||
            interfaceId == type(ICrossChainERC1155MetadataURI).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
