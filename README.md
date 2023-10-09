## SuperDynamicNFT Chainlink example

Reference link: https://blog.chain.link/dynamic-nft-tutorial-using-chainlink/ 

The link above demonstrates a dynamic NFT to simulate watching the price of ETH. The NFT will change depending on if the value is higher or lower. The smart contract uses a subscription to the Chainlink Verifiable Randomness Function where it receives a random value to simulate the price of ETH. Chainlink Automation is then used to update the NFT to reflect a different image (background colour and emoticon) based on the value.

The steps below describe how to deploy the NFT using this code base. To integrate with the Chainlink VRF function follow the reference link above (Steps 5-7).

### Prerequisites

A metamask account with exportable private key
Matic for blockchain transactions - https://mumbaifaucet.com/
LINK for automation - https://faucets.chain.link/mumbai

### Initial setup and deployment

Install dependencies:
```
yarn install
```

Create .env file and add the following values:
```
MUMBAI_RPC="<<Your Mumbai RPC link - Available in Metamask>>"
PRIVATE_KEY="<<The private key of the account to use for deployment>>"
```

Compile the contracts:
```
yarn compile
```

**Important: You need a Chainlink subscription (see reference link for instructions). The subscriptionId is required during deployment. Update the subscriptionId variable value in the `scripts/deploy.ts` file before deployment.**

### Deploy to local

Run local node first:
```
yarn hardhat node
```

Deploy:
```
yarn hardhat run scripts/deploy.ts --network localhost
```

### Deploy to mumbai
```
yarn hardhat run scripts/deploy.ts --network mumbai
```

