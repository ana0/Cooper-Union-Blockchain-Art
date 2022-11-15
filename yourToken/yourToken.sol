// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable {
    mapping(address => string) public imageUrls;
    mapping(address => string) public colors;
    uint256 public cost = 0;
    address[3] public posts;

    constructor() ERC20("MyToken", "MTK") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function setUrl(string memory url) public {
        require(this.balanceOf(msg.sender) > 0);
        imageUrls[msg.sender] = url;
    }

    function setColor(string memory hexCode) public {
        require(this.balanceOf(msg.sender) > 0);
        colors[msg.sender] = hexCode;
    }

    function makePost() public {
        require(this.balanceOf(msg.sender) > cost);
        _burn(msg.sender, cost);
    
        posts[0] = posts[1];
        posts[1] = posts[2];
        posts[2] = msg.sender;

        cost = cost + 1;
    }
}