pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is Ownable, ERC721 {
    mapping(uint256 => string) public tokenURIs;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId));
        return tokenURIs[tokenId];
    }

    function mint(uint256 tokenId_, string memory tokenURI_) public payable {
        tokenURIs[tokenId_] = tokenURI_;
        _safeMint(msg.sender, tokenId_);
    }
}