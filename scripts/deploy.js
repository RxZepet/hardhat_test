// This deploys the simple calculator contract

const hre = require("hardhat");


async function main() {
    const calculator = await hre.ethers.getContractFactory("Calculator");
    const deployedCalculator = await calculator.deploy();
    await deployedCalculator.deploy();

    console.log(`This simple calculator app is deployed to: ${deployedCalculator.address}`);


    // error handling
    main().catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
      
}


