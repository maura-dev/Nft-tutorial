// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//extends nft to erc721
contract NFT is ERC721 {

    constructor() ERC721("Maureen's NFT" , "M-NFT") {
        //mint 1 nft to myself
        _mint(msg.sender, 1);
    }
}