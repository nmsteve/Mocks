
const { ethers } = require("hardhat");
const { utils} = require("ethers");

async function main() {

  //get singers
  [owner, user1, user2, user3] = await ethers.getSigners()

  // We get the contract to deploy
    this.Mock = await ethers.getContractFactory("Mock")


  //   //1.deploy Maker
  //   this.Maker = await this.Mock.deploy('Maker','MAKER',utils.parseEther('1000000000'))
  //   await this.Maker.deployed()
  //   console.log("1. Maker deployed at:", this.Maker.address)

  //   //2. deploy Aave
  //   this.Aave= await this.Mock.deploy('Aave','AEVE',utils.parseEther('1000000000'))
  //   await this.Aave.deployed()
  //   console.log("2. Aave deployed at:", this.Aave.address)

  //   //3. deploy TrueUSD
  //   this.TrueUSD= await this.Mock.deploy('TrueUSD','TUSD',utils.parseEther('1000000000'))
  //   await this.TrueUSD.deployed()
  //   console.log("3. TrueUSD deployed at:", this.TrueUSD.address)

  //   //4. deploy OKB
  //   this.OKB= await this.Mock.deploy('OKB','OKB',utils.parseEther('1000000000'))
  //   await this.OKB.deployed()
  //   console.log("4. OKB deployed at:", this.OKB.address)

  //   //5. deploy Chiliz
  //   this.Chiliz= await this.Mock.deploy('Chiliz','CHILIZ',utils.parseEther('1000000000'))
  //   await this.Chiliz.deployed()
  //   console.log("5. Chiliz deployed at:", this.Chiliz.address)

  //  //6. deploy StepN
  //  this.StepN= await this.Mock.deploy('StepN Coin','STEPN',utils.parseEther('1000000000'))
  //  await this.StepN.deployed()
  //  console.log("6. StepN deployed at:", this.StepN.address)

   //7. deploy Neox
   this.Neox= await this.Mock.deploy('Neox Coin','NEOX',utils.parseEther('1000000000'))
   await this.Neox.deployed()
   console.log("7. Neox deployed at:", this.Neox.address)

   //8. deploy Kava 
   this.Kava= await this.Mock.deploy('Kava Coin','KAVA',utils.parseEther('1000000000'))
   await this.Kava.deployed()
   console.log("8. Kava deployed at:", this.Kava.address)

   //9. deploy Bora
   this.Bora= await this.Mock.deploy('Bora Coin','BORA',utils.parseEther('1000000000'))
   await this.Bora.deployed()
   console.log("9. Bora deployed at:", this.Bora.address)

   //10. deploy Golem
   this.Golem= await this.Mock.deploy('Golem Coin','GOLEM',utils.parseEther('1000000000'))
   await this.Golem.deployed()
   console.log("10. Golem deployed at:", this.Golem.address)

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
