// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

/**
 * @dev Required interface of an CrossChainERC1155 compliant contract.
 */
interface ICrossChainERC1155 is IERC1155 {
    /**
     * @notice fetchCrossChainGasLimit Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGasLimit() external view returns (uint256);
}
