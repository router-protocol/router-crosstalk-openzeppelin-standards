// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/IGovernor.sol";

/**
 * @dev Interface of the {CrossChainGovernor} core.
 *
 */
abstract contract ICrossChainGovernor is IGovernor {
    /**
     * @notice fetchCrossChainGasLimit Used to fetch CrossChainGasLimit
     * @return crossChainGasLimit that is set
     */
    function fetchCrossChainGasLimit() external view virtual returns (uint256);
}
