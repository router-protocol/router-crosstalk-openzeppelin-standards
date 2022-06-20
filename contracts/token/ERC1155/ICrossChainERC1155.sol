// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

/**
 * @dev Required interface of an CrossChainERC1155 compliant contract.
 */
interface ICrossChainERC1155 is IERC1155 {
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
     * @notice transferCrossChain Destroys `_amount` tokens of token type `_id` from caller's account on the current chain
     * and calls an internal function to generate a crosschain communication request to chain `_chainID`
     * @param _chainID Destination ChainID
     * @param _recipient Address of the recipient on destination chain
     * @param _id TokenId
     * @param _amount Number of tokens
     * @param _data Additional data used to mint on destination side
     * @return bool returns true when completed
     */
    function transferCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256 _id,
        uint256 _amount,
        bytes memory _data
    ) external returns (bool);

    /**
     * @notice transferBatchCrossChain Destroys `_amounts` tokens of token type `_ids` from caller's account on the current chain
     * and calls an internal function to generate a crosschain communication request to chain with `_chainID`
     * @param _chainID Destination ChainID
     * @param _recipient Address of the recipient on destination chain
     * @param _ids TokenId
     * @param _amounts Number of tokens with `_ids`
     * @param _data Data with which tokens are minted on destination side
     * @return bool returns true when completed
     */
    function transferBatchCrossChain(
        uint8 _chainID,
        address _recipient,
        uint256[] memory _ids,
        uint256[] memory _amounts,
        bytes memory _data
    ) external returns (bool);
}
