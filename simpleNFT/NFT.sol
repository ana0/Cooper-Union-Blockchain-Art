// SPDX-License-Identifier: MIT

// this is a comment, not part of the code
// the pragma line tells us what version of solidity to use
pragma solidity ^0.8.7;

// libraries or dependencies that we are using
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// the container for everything else
// has a name, "NFT" and is using our libraries
contract NFT is Ownable, ERC721 {

    // uint256 public totalNFTsEver = 0; 
    // address private myFriend = "0x2343875209853285";
    // stores the url of the NFT at a number id
    mapping(uint256 => string) public tokenURIs;

    // function that gets called when the smart contract is created and only once
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
    }

    // normal function
    //       name    arguments         keywords             what we get back
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        // a condition that has to be true or false
        // _exists comes from the ERC721 library
        require(_exists(tokenId));
        // we only end up here if the token exists
        // returns the url we have stored there
        return tokenURIs[tokenId];
    }

    // most important function! 
    // anyone can use this to mint, and it's "payable" so they can also send ether to it
    function mint(uint256 tokenId_, string memory tokenURI_) public onlyOwner {
        // store the url we were given in our mapping
        tokenURIs[tokenId_] = tokenURI_;
        // call a function in our ERC721 library
        //        msg.sender the person who called this function, could be anyone
        _safeMint(msg.sender, tokenId_);
    }
}