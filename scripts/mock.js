
const { ethers } = require("hardhat");
const { utils} = require("ethers");
require('dotenv')

async function main() {

  //get singers
  [owner, user1, user2, user3] = await ethers.getSigners()

  // We get the contract to deploy
    this.Dai = await ethers.getContractFactory("Dai")
    this.Shiba = await ethers.getContractFactory("Shiba")
    this.sedLeo = await ethers.getContractFactory("sedLeo")
    this.FTX = await ethers.getContractFactory("FTX")
    this.ChainLink = await ethers.getContractFactory("ChainLink")
    this.Cronos = await ethers.getContractFactory("Cronos")
    this.sandBox = await ethers.getContractFactory("SandBox")
    this.finity = await ethers.getContractFactory("Finity")
    this.KuCoin = await ethers.getContractFactory("KuCoin")
    this.PaxCoin = await ethers.getContractFactory("PaxCoin")
    
    


    //1.deploy Dai
    this.Dai = await this.Dai.deploy(process.env.ROUTER02RSC, user1.address, user2.address,user3.address,'Dai','DAI')
    await this.Dai.deployed()
    console.log("1. Dai deployed at:", this.Dai.address)

    //2. deploy Shiba
    this.Shiba= await this.Shiba.deploy(process.env.ROUTER02RSC, user1.address, user2.address,user3.address,'Shiba','SHI')
    await this.Shiba.deployed()
    console.log("2. Shiba deployed at:", this.Shiba.address)

    //3. deploy sedLeo
    this.sedLeo= await this.sedLeo.deploy(process.env.ROUTER02RSC, user1.address, user2.address,user3.address,'sed Leo','SED-L')
    await this.sedLeo.deployed()
    console.log("3. sedLeo deployed at:", this.sedLeo.address)

    //4. deploy FTX
    this.FTX= await this.FTX.deploy(process.env.ROUTER02RSC, user1.address, user2.address,user3.address,'FTX coin','FTX')
    await this.FTX.deployed()
    console.log("4. FTX deployed at:", this.FTX.address)

    //5. deploy  ChainLink
    this.ChainLink= await this.ChainLink.deploy(process.env.ROUTER02RSC, user1.address, user2.address,user3.address,'ChainLink','Chain-L')
    await this.ChainLink.deployed()
    console.log("5. ChainLink deployed at:", this.ChainLink.address)

   //6. deploy Cronos
   this.Cronos= await this.Cronos.deploy('Cronos Coin','CRONOS')
   await this.Cronos.deployed()
   console.log("6. Cronos deployed at:", this.Cronos.address)

   //7. deploy sandBox
   this.sandBox= await this.sandBox.deploy('Sand BoX Coin','SBC')
   await this.sandBox.deployed()
   console.log("7. sandBox deployed at:", this.sandBox.address)

   //8. deploy finity 
   this.finity= await this.finity.deploy('finity Coin','INFIN')
   await this.finity.deployed()
   console.log("8. finity deployed at:", this.finity.address)

   //9. deploy KuCoin
   this.KuCoin= await this.KuCoin.deploy('KuCoin Coin','KUC')
   await this.KuCoin.deployed()
   console.log("9. KuCoin deployed at:", this.KuCoin.address)

   //10. deploy PaxCoin
   this.PaxCoin= await this.PaxCoin.deploy('PaxCoin Coin','PAX')
   await this.PaxCoin.deployed()
   console.log("10. PaxCoin deployed at:", this.PaxCoin.address)
   
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
