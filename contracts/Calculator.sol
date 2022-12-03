// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

contract Calculator{
    function addNumbers(uint a, uint b) public pure returns (uint c) {
        c = a + b;
    }

    function subNums(uint a, uint b) public pure returns (uint c) {
        c = a - b;
    }

    function multiplyNums(uint a, uint b) public pure returns (uint c) {
        c = a * b;
    }

    function divNums(uint a, uint b) public pure returns (uint c) {
        require(b != 0, "Divisor cannot be zero");
        c = a / b;
    }
}