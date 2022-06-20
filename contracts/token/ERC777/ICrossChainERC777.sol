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
     * @notice transferCrossChain Destroys `_amount` tokens from caller's account on the current chain
     * and calls an internal function to generate a crosschain communication request for transfer to destination chain `_chainID`
     * @param chainID Destination ChainID
     * @param recipient Address of the recipient
     * @param amount Number of tokens to be burnt on current chain and minted on destination chain
     *
     * @dev See {IERC777-burn} and {IERC777-_mint}
     * @return bool returns true when completed
     */
    function transferCrossChain(
        uint8 chainID,
        address recipient,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData
    ) external returns (bool);

    /**
     * @notice operatorTransferCrossChain Destroys `_amount` tokens from `account` on the current chain
     * and calls an internal function to generate a crosschain communication request for transfer to destination chain `_chainID`
     *
     * The caller must be an operator of `account`.
     *
     * If a send hook is registered for `account`, the corresponding function
     * will be called with `userData` and `operatorData`. See {IERC777Sender}.
     * @param chainID Destination ChainID
     * @param account Address of the tokenHolder
     * @param amount Number of tokens to be burnt on current chain and minted on destination chain
     *
     * @dev See {IERC777-operatorBurn} and {IERC777-_mint}
     * @return bool returns true when completed
     */
    function operatorTransferCrossChain(
        uint8 chainID,
        address account,
        uint256 amount,
        bytes memory userData,
        bytes memory operatorData
    ) external returns (bool);
}
