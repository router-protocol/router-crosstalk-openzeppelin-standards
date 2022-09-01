// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../../token/ERC20/CrossChainERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyCrossChainERC20 is CrossChainERC20, AccessControl {
    constructor(
        string memory name_,
        string memory symbol_,
        address genericHandler_
    ) CrossChainERC20(name_, symbol_, genericHandler_) AccessControl() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControl, CrossChainERC20)
        returns (bool)
    {
        return
            interfaceId == type(ICrossChainERC20).interfaceId ||
            interfaceId == type(ICrossChainERC20Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /* ADMINISTRATIVE FUNCTIONS */

    function setLinker(address _linker) external onlyRole(DEFAULT_ADMIN_ROLE) {
        setLink(_linker);
    }

    function setFeeAddress(address _feeAddress) external onlyRole(DEFAULT_ADMIN_ROLE) {
        setFeeToken(_feeAddress);
    }

    function setCrossChainGasLimit(uint256 _gasLimit) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _setCrossChainGasLimit(_gasLimit);
    }

    function approveFee(address _feeToken, uint256 _value) external onlyRole(DEFAULT_ADMIN_ROLE) {
        approveFees(_feeToken, _value);
    }

    /* ADMINISTRATIVE FUNCTIONS END */

    //testing purpose
    function faucet(address recepient, uint256 amount) external {
        _mint(recepient, amount);
    }
}
