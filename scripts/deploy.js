// import ethers from hardhat
const  hre = require("hardhat");

async function main(){
    // somehow tell the script we want to deploy e.g nft.sol contract
    const contract = await hre.ethers.getContractFactory("NFT");

    // deploy it
    const deployedContract = await contract.deploy();

    // wait for deployment to finish
    await deployedContract.deployed;

    // print the address of the deployed contract
    console.log("NFT contract deployed to: ", deployedContract.address)
}

main()
.then(()=> process.exit(0))
.catch((e) => {
    console.error(e);
    process.exit(1)
});