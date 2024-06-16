// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/NFT.sol";

contract DeployNFT is Script {
    function run() external {
        vm.startBroadcast();
        // passing name and symbol to the NFT constructor
        new NFT("My NFT", "MNFT");
        vm.stopBroadcast();
    }
}