// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @dev Required interface of an CrossChainERC20 compliant contract.
 */
interface ICrossChainERC20 is IERC20 {
    /**
     * @notice setLinker Used to set linker address, this can only be set by CrossChain Admin or Admins
     * @param _address Address of linker
     */
    function setLinker(address _address) external;

    /**
     * @notice setFeeAddress Used to set fee token address, this can only be set by CrossChain Admin or Admins
     * @param _feeToken Address of fee token
     */
    function setFeeAddress(address _feeToken) external;

    /**
     * @notice setCrossChainGas Used to set CrossChainGas, this can only be set by CrossChain Admin or Admins
     * @param _gas Amount of gas that is to be set
     */
    function setCrossChainGas(uint256 _gas) external;

    /**
     * @notice fetchCrossChainGas Used to fetch CrossChainGas
     * @return crossChainGas that is set
     */
    function fetchCrossChainGas() external view returns (uint256);

    /**
     * @notice transferCrossChain Destroys `_amount` tokens from `_from` on the current chain
     * and calls an internal function to generate a crosschain communication request to chain `_chainID`
     * @param _chainID Destination ChainID
     * @param _from Address of the Owner
     * @param _amount Number of tokens
     * @return bool returns true when completed
     */
    function transferCrossChain(
        uint8 _chainID,
        address _from,
        uint256 _amount
    ) external returns (bool);
}
