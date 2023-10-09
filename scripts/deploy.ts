import { ethers } from "hardhat";
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  const subscriptionId = process.env.CHAINLINK_SUBSCRIPTIONID;

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
