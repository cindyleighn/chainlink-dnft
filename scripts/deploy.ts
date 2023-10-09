import { ethers } from "hardhat";

async function main() {
  const subscriptionId = '6124';

  const contract = await ethers.deployContract("SuperDynamicNFT", [subscriptionId]);

  await contract.waitForDeployment();

  console.log(
    `SuperDynamicNFT created for subscriptionId ${subscriptionId} deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
