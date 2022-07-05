// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/governance/IGovernor.sol";

/**
 * @dev Interface of the {CrossChainGovernor} core.
 *
 */
abstract contract ICrossChainGovernor is IGovernor {
    /**
     * @notice fetchCrossChainGas Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGas() external view virtual returns (uint256);
}
