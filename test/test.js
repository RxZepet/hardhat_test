
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

  describe("Testing Calculator", function(){
    async function Reusable(){
        const calculator = await ethers.getContractFactory('Calculator');
        const deployedCalculator = await calculator.deploy()
        return {deployedCalculator};
    }

    describe("Testing addition", function(){
      it("Should add two numbers", async function(){
        const {deployedCalculator} = await loadFixture(Reusable);
        expect(await deployedCalculator.addNumbers(10, 5)).to.equal(15);
      });
    })

    describe("Testing subtraction", function(){
      it("Should subtract a number from another number", async function(){
        const {deployedCalculator} = await loadFixture(Reusable);
        expect(await deployedCalculator.subNums(10, 5)).to.equal(5);
      });
    })

    describe("Testing multiplication", function(){
      it("Should multiply two number", async function(){
        const {deployedCalculator} = await loadFixture(Reusable);
        expect(await deployedCalculator.multiplyNums(10, 5)).to.equal(50);
      });
    })

    describe("Testing division", function(){
      describe("Divisor error", function(){
        it("Should ensure that divisor is not equal to zero", async function(){
          const {deployedCalculator} = await loadFixture(Reusable);
          await expect(deployedCalculator.divNums(5, 0)).to.be.revertedWith("Divisor cannot be zero")
        })
      })
      it("Should divide a number by another number", async function(){
        const {deployedCalculator} = await loadFixture(Reusable);
        expect(await deployedCalculator.divNums(10, 5)).to.equal(2);
      });
    })

  })









// describe("Lock", function(){ // describe is used to test the contract. takes in 2 paras, the contract and the a syncronous function

// })

// it("takes in a sub function in the contract e.g should revert if the caller is not owner", async function(){
//     // for testing a subpart or an instruction in the contract
//     // takes 2 params: the sub part of ur code, and an async function
// })