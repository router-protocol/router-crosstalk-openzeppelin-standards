// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../CrossChainERC1155.sol";

/**
 * @dev Extension of {CrossChainERC1155} that allows token holders to destroy both their
 * own tokens and those that they have been approved to use.
 *
 */
abstract contract CrossChainERC1155Burnable is CrossChainERC1155 {
    function burn(
        address account,
        uint256 id,
        uint256 value
    ) public virtual {
        require(
            account == _msgSender() || isApprovedForAll(account, _msgSender()),
            "ERC1155: caller is not owner nor approved"
        );

        _burn(account, id, value);
    }

    function burnBatch(
        address account,
        uint256[] memory ids,
        uint256[] memory values
    ) public virtual {
        require(
            account == _msgSender() || isApprovedForAll(account, _msgSender()),
            "ERC1155: caller is not owner nor approved"
        );

        _burnBatch(account, ids, values);
    }
}
