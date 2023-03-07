import { ethers } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const lock = await Token.deploy();

  await lock.deployed();

  // console.log(`Block explorer URL: https://l2scan.scroll.io/address/${lock.address}`); Uncomment here to use the pre-alpha
  console.log(
    `Block explorer URL: https://blockscout.scroll.io/address/${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
