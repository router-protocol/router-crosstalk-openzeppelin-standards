// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@routerprotocol/router-crosstalk/contracts/interfaces/iRouterCrossTalk.sol";

contract GenericHandlerTest {
    event deposit(uint8 chainID, bytes _data, uint256 _gasLimit, uint256 _gasPrice, address _feeToken);

    function fetch_chainID() external pure returns (uint8) {
        return 111;
    }

    function genericDeposit(
        uint8 _destChainID,
        bytes memory _data,
        uint256 _gasLimit,
        uint256 _gasPrice,
        address _feeToken
    ) external returns (uint256) {
        emit deposit(_destChainID, _data, _gasLimit, _gasPrice, _feeToken);
        return 1;
    }

    function execute(
        address _crossTalkAddr,
        uint8 srcChainID,
        address srcAddress,
        bytes memory _data
    ) external {
        iRouterCrossTalk CrossTalk = iRouterCrossTalk(_crossTalkAddr);
        CrossTalk.routerSync(srcChainID, srcAddress, _data);
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
