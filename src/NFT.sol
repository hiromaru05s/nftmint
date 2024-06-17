// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "lib/openzeppelin-contracts/contracts/access/Ownable.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;
    uint256 public constant maxTokens = 14;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) Ownable(msg.sender){
        _tokenIdCounter = 1; // トークンIDの初期値を設定
    }

    /**
     * @dev Public function to mint a new token. Only the owner can call this function.
     * @param to The address that will receive the minted token.
     * @param uri The token URI for the minted token.
     */
    function mint(address to, string memory uri) public {
        require(_tokenIdCounter < maxTokens, "All RPG ethereums have been minted");
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}