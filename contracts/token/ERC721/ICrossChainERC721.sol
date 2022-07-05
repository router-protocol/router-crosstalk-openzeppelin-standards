// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/**
 * @dev Required interface of an ERC721 compliant contract.
 */
interface ICrossChainERC721 is IERC721 {
    /**
     * @notice fetchCrossChainGas Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGas() external view returns (uint256);
}
