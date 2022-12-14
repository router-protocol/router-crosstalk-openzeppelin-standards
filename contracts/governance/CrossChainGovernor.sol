// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ICrossChainGovernor.sol";
import "@openzeppelin/contracts/governance/Governor.sol";
import "@routerprotocol/router-crosstalk/contracts/RouterCrossTalk.sol";

/**
 * @dev Implementation of Router CrossTalk in the core of governance system
 *
 * TIP: For a detailed overview see our guide
 * https://dev.routerprotocol.com/crosstalk-library/overview
 */
abstract contract CrossChainGovernor is Governor, ICrossChainGovernor, RouterCrossTalk {
    uint256 private _crossChainGasLimit;

    constructor(string memory name_, address genericHandler_) Governor(name_) RouterCrossTalk(genericHandler_) {}

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(IERC165, ERC165, Governor)
        returns (bool)
    {
        return interfaceId == type(ICrossChainGovernor).interfaceId || super.supportsInterface(interfaceId);
    }

    /**
     * @notice setCrossChainGasLimit Used to set CrossChainGasLimit, this can only be set by CrossChain Admin or Admins
     * @param _gasLimit Amount of gasLimit that is to be set
     */
    function _setCrossChainGasLimit(uint256 _gasLimit) internal {
        _crossChainGasLimit = _gasLimit;
    }

    /**
     * @notice fetchCrossChainGasLimit Used to fetch CrossChainGas
     * @return crossChainGasLimit that is set
     */
    function fetchCrossChainGasLimit() external view override returns (uint256) {
        return _crossChainGasLimit;
    }

    /**
     * @dev Cast a vote with a reason
     * @notice This is an internal function to generate a cross chain communication request
     */
    function _sendVoteWithReasonCrossChain(
        uint8 _chainID,
        uint256 proposalId,
        uint8 support,
        string calldata reason,
        uint256 _crossChainGasPrice
    ) internal returns (bool, bytes32) {
        bytes4 _selector = bytes4(keccak256("receiveVoteWithReasonCrossChain(uint256,address,uint8,string)"));
        bytes memory _data = abi.encode(proposalId, msg.sender, support, reason);
        (bool success, bytes32 hash) = routerSend(_chainID, _selector, _data, _crossChainGasLimit, _crossChainGasPrice);
        return (success, hash);
    }

    /**
     * @dev Cast a vote with a reason and additional encoded parameters
     * @notice This is an internal function to generate a cross chain communication request
     */
    function _sendVoteWithReasonAndParamsCrossChain(
        uint8 _chainID,
        uint256 proposalId,
        uint8 support,
        string calldata reason,
        bytes memory params,
        uint256 _crossChainGasPrice
    ) internal returns (bool, bytes32) {
        bytes4 _selector = bytes4(
            keccak256("receiveVoteWithReasonAndParamsCrossChain(uint256,address,uint8,string,bytes)")
        );
        bytes memory _data = abi.encode(proposalId, msg.sender, support, reason, params);
        (bool success, bytes32 hash) = routerSend(_chainID, _selector, _data, _crossChainGasLimit, _crossChainGasPrice);
        return (success, hash);
    }

    /**
     * @dev Cast a vote using the user's cryptographic signature.
     * @notice This is an internal function to generate a cross chain communication request
     *
     */
    function _sendVoteBySigCrossChain(
        uint8 _chainID,
        uint256 proposalId,
        uint8 support,
        uint8 v,
        bytes32 r,
        bytes32 s,
        uint256 _crossChainGasPrice
    ) internal returns (bool, bytes32) {
        address voter = ECDSA.recover(
            _hashTypedDataV4(keccak256(abi.encode(BALLOT_TYPEHASH, proposalId, support))),
            v,
            r,
            s
        );
        bytes4 _selector = bytes4(keccak256("receiveVoteWithReasonCrossChain(uint256,address,uint8,string)"));
        bytes memory _data = abi.encode(proposalId, voter, support, "");
        (bool success, bytes32 hash) = routerSend(_chainID, _selector, _data, _crossChainGasLimit, _crossChainGasPrice);
        return (success, hash);
    }

    /**
     * @dev Cast a vote with a reason and additional encoded parameters using the user's cryptographic signature.
     * @notice This is an internal function to generate a cross chain communication request
     *
     */
    function _sendVoteWithReasonAndParamsBySigCrossChain(
        uint8 _chainID,
        uint256 proposalId,
        uint8 support,
        string calldata reason,
        bytes memory params,
        uint8 v,
        bytes32 r,
        bytes32 s,
        uint256 _crossChainGasPrice
    ) internal returns (bool, bytes32) {
        address voter = ECDSA.recover(
            _hashTypedDataV4(
                keccak256(
                    abi.encode(
                        EXTENDED_BALLOT_TYPEHASH,
                        proposalId,
                        support,
                        keccak256(bytes(reason)),
                        keccak256(params)
                    )
                )
            ),
            v,
            r,
            s
        );
        bytes4 _selector = bytes4(
            keccak256("receiveVoteWithReasonAndParamsCrossChain(uint256,address,uint8,string,bytes)")
        );
        bytes memory _data = abi.encode(proposalId, voter, support, reason, params);
        (bool success, bytes32 hash) = routerSend(_chainID, _selector, _data, _crossChainGasLimit, _crossChainGasPrice);
        return (success, hash);
    }

    // The hash returned from RouterSend function should be used to replay a tx
    // These gas limit and gas price should be higher than one entered in the original tx.
    function replayTx(
        bytes32 hash,
        uint256 gasLimit,
        uint256 gasPrice
    ) internal {
        routerReplay(hash, gasLimit, gasPrice);
    }

    /**
     * @notice _routerSyncHandler This is an internal function to control the handling of various selectors and its corresponding
     * @param _selector Selector to interface.
     * @param _data Data to be handled.
     */
    function _routerSyncHandler(bytes4 _selector, bytes memory _data)
        internal
        virtual
        override
        returns (bool, bytes memory)
    {
        if (bytes4(keccak256("receiveVoteWithReasonCrossChain(uint256,address,uint8,string)")) == _selector) {
            (uint256 _proposalId, address _voter, uint8 _support, string memory _reason) = abi.decode(
                _data,
                (uint256, address, uint8, string)
            );
            (bool success, bytes memory returnData) = address(this).call(
                abi.encodeWithSelector(_selector, _proposalId, _voter, _support, _reason)
            );
            return (success, returnData);
        } else if (
            bytes4(keccak256("receiveVoteWithReasonAndParamsCrossChain(uint256,address,uint8,string,bytes)")) ==
            _selector
        ) {
            (uint256 _proposalId, address _voter, uint8 _support, string memory _reason, bytes memory _params) = abi
                .decode(_data, (uint256, address, uint8, string, bytes));
            (bool success, bytes memory returnData) = address(this).call(
                abi.encodeWithSelector(_selector, _proposalId, _voter, _support, _reason, _params)
            );
            return (success, returnData);
        }
    }

    /**
     * @notice CrossChain VoteCasting Mechanism
     *
     * NOTE: It can only be called by current contract.
     *
     * @param proposalId Id of vote proposal on destination chain
     * @param voter address of the voter
     * @param support support towards the proposal
     * @param reason for votes casted with reason
     * @return bool returns true when completed
     */
    function receiveVoteWithReasonCrossChain(
        uint256 proposalId,
        address voter,
        uint8 support,
        string calldata reason
    ) external isSelf returns (bool) {
        _castVote(proposalId, voter, support, reason);
        return true;
    }

    /**
     * @notice CrossChain VoteCasting Mechanism
     *
     * NOTE: It can only be called by current contract.
     *
     * @param proposalId Id of vote proposal on destination chain
     * @param voter address of the voter
     * @param support support towards the proposal
     * @param reason for votes casted with reason
     * @param params additional encoded parameters
     * @return bool returns true when completed
     */
    function receiveVoteWithReasonAndParamsCrossChain(
        uint256 proposalId,
        address voter,
        uint8 support,
        string calldata reason,
        bytes memory params
    ) external isSelf returns (bool) {
        _castVote(proposalId, voter, support, reason, params);
        return true;
    }
}
