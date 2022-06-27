# Contracts
1. Maker deployed at: 0x82964e9e7F31966B602Abc7B12e456a87203c26A
2. Meja deployed at: 0xE765240958a91DF0cF878b8a4ED23D5FF8effFFe
3. TrueUSD deployed at: 0x6A93366b725Cae9073556f34ac74Ba2cd3aE2C1c
4. ButPia deployed at: 0xBB4c263309F79f4ec43cF3Bb0351deEc7fe3dF61
5. LykaLuna deployed at: 0xcDBfB6DEc4BB37A7D989FD36Bf06f42Ab50792Dc
6. StepN deployed at: 0x28df749CB1878EaF39d40D2acA2677EF4632e7Dc
7. GoodHuman deployed at: 0x9f35CAB0BDeD2B756Ae7de82A9cc228155fe6430
8. Kava deployed at: 0x14f341D6109493787c14E4f1a54818a7238bcaca
9. ApeCoin deployed at: 0x3E53FE7024BcB4cA83c79b68929Aac375d7f4B48
10. Golem deployed at: 0xc6E9e235087B434089c6Af46251A368c803B1b42
11. Dai deployed at: 0x86F5Dd995c51cf902a67B723c09c25c03B191e89
12. Shiba deployed at: 0xc6B1C66A482e5D4B0eBd22f32B01500898D2D23A
13. sedLeo deployed at: 0x12EE4CB9C76d933738b85DB00052C3b85C40DEBb
14. FTX deployed at: 0xca6327C2E592aF8Bf29ee2A4132637E29ccFdfA8
15. ChainLink deployed at: 0x5aDA2836d1aCc727a5d94883607009A2Ae8e3552
16. Cronos deployed at: 0x7E0289D45641e4826E86f4387D58533715CA9bd5
17. sandBox deployed at: 0xDE9FD15d56D096Ee61773E3951217422051F3b22
18. finity deployed at: 0xF82f9E223DfEbF3857832f7b71596164F5a79483
19. KuCoin deployed at: 0xE97aca232F264148B550B0DC7244F7f660101536
20. PaxCoin deployed at: 0x8984BD8b44f8E44c226b2Ac7f6D9FFE6c63862e7



```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.js
node scripts/deploy.js
npx eslint '**/*.js'
npx eslint '**/*.js' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.js
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```
