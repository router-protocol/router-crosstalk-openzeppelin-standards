// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@routerprotocol/router-crosstalk/contracts/interfaces/iRouterCrossTalk.sol";

contract GenericHandlerTest {
    event deposit(uint8 chainID, bytes4 _interface, bytes _data, bytes32 _hash, uint256 _gas, address _feeToken);

    function fetch_chainID() external pure returns (uint8) {
        return 111;
    }

    function genericDeposit(
        uint8 _destChainID,
        bytes4 _selector,
        bytes memory _data,
        bytes32 _hash,
        uint256 _gas,
        address _feeToken
    ) external {
        emit deposit(_destChainID, _selector, _data, _hash, _gas, _feeToken);
    }

    function execute(
        address _crossTalkAddr,
        uint8 srcChainID,
        address srcAddress,
        bytes4 _interface,
        bytes memory _data,
        bytes32 hash
    ) external {
        iRouterCrossTalk CrossTalk = iRouterCrossTalk(_crossTalkAddr);
        CrossTalk.routerSync(srcChainID, srcAddress, _interface, _data, hash);
    }

    function linkContract(
        address _interface,
        uint8 _chainID,
        address _contract
    ) external {
        iRouterCrossTalk CrossTalk = iRouterCrossTalk(_interface);
        CrossTalk.Link(_chainID, _contract);
    }

    function unlinkContract(address _interface, uint8 _chainID) external {
        iRouterCrossTalk CrossTalk = iRouterCrossTalk(_interface);
        CrossTalk.Unlink(_chainID);
    }
}
