pragma solidity ^0.8.0;

contract MilkCollectionCenter {
    int256 private totalMilk;
    // int private farmerId;
    int256 public centerId;
    int256 private quality;
    mapping(int256 => int256[]) private data;

    constructor(int256 _centerId) {
        centerId = _centerId;
    }

    function checkQuality() public pure returns (int256) {
        return 5;
    }

    function addMilk(int256 _farmerId, int256 _quantity) public {
        quality = checkQuality();
        require(quality == 5);
        totalMilk += _quantity;
        data[_farmerId].push(_quantity);
    }

    function getDataByID(int256 _farmerId) public view returns (int256[] memory){
        return data[_farmerId];
    }

    function getTotalQuantity() public view returns (int256) {
        return totalMilk;
    }
}
