// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// import "../../token/ERC1155/CrossChainERC1155.sol";
// import "@openzeppelin/contracts/access/AccessControl.sol";

// contract MyCrossChainERC1155 is CrossChainERC1155, AccessControl {
//     constructor(string memory uri_, address genericHandler_) CrossChainERC1155(uri_, genericHandler_) AccessControl() {
//         _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
//     }

//     /* ADMINISTRATIVE FUNCTIONS */

//     function setLinker(address _linker) external onlyRole(DEFAULT_ADMIN_ROLE) {
//         setLink(_linker);
//     }

//     function setFeeAddress(address _feeAddress) external onlyRole(DEFAULT_ADMIN_ROLE) {
//         setFeeToken(_feeAddress);
//     }

//     function setCrossChainGas(uint256 _gas) external onlyRole(DEFAULT_ADMIN_ROLE) {
//         _setCrossChainGas(_gas);
//     }

//     /* ADMINISTRATIVE FUNCTIONS END */

//     function sendCrossChain(
//         uint8 _chainID,
//         address _recipient,
//         uint256[] memory _ids,
//         uint256[] memory _amounts,
//         bytes memory _data
//     ) external {
//         _sendCrossChain(_chainID, _recipient, _ids, _amounts, _data);
//     }
// }
