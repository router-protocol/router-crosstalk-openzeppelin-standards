// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";

/**
 * @dev Interface of the CrossChainERC777Token standard.
 */
interface ICrossChainERC777 is IERC777 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by an account (`owner`).
     */
    function balanceOf(address owner) external view returns (uint256);

    /**
     * @notice fetchCrossChainGasLimit Used to fetch CrossChainGas
     * @return crossChainGasLimit that is set
     */
    function fetchCrossChainGasLimit() external view returns (uint256);
}
