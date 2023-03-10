require("dotenv").config();

const {
  getRole,
  verify,
  ex,
  printAddress,
  deploySC,
  deploySCNoUp,
} = require("../utils");

var MINTER_ROLE = getRole("MINTER_ROLE");
//var BURNER_ROLE = getRole("BURNER_ROLE");

async function deployMumbai() {
  await console.log("π Deploying Mumbai oriented Contracts");
  var relayerAddress = ethers.utils.getAddress("0x70f26499b849168744f4fb8fd8cce7b08c458e42");
  var ipfsCID = "QmZ7j7GnMeRG81cTfRfFvrv5yafFxFkD5zyXCgMN2LiLCH";
  var nftContractName = "MiPrimerNft";
  var nftContractTitle = "Mi Primer NFT";
  var nftSymbol = "MPRNFT";

  console.log(`π₯ Deploying ${nftContractName}`);
  console.log(`π Variable nftContractName: ${nftContractName}`);
  console.log(`π Variable nftContractTitle: ${nftContractTitle}`);
  console.log(`π Variable nftSymbol: ${nftSymbol}`);
  console.log(`π Variable ipfsCID: ${ipfsCID}`);
  var nftContract = await deploySC(nftContractName, [nftContractTitle, nftSymbol, ipfsCID]);
  await (console.log(`π ${nftContractName} Contract Addr: ${nftContract.address} π’ Configure in AutoTask`));
  var nftImplementation = await printAddress(`π£ ${nftContractName}`, nftContract.address);
  // set up
  var exResult = await ex(nftContract, "grantRole", [MINTER_ROLE, relayerAddress], "π€¬ Error Granting Role");
  if (exResult.events[0].args["role"] == MINTER_ROLE && exResult.events[0].args["account"] == relayerAddress) {
    console.log(`β Address ${relayerAddress} has MINTER_ROLE granted`);
  }
  else {
    console.log(`β Address ${relayerAddress} has NOT MINTER_ROLE granted`);
  }
  await verify(nftImplementation, `π ${nftContractName}`, []);
  console.log("π Finished Mumbai Deployment");
}

async function deployGoerli() {
  console.log("π Deploying GΓΆerli oriented Contracts");
  // gnosis safe
  // Crear un gnosis safe en https://gnosis-safe.io/app/
  // Extraer el address del gnosis safe y pasarlo al contrato con un setter*/
  var gnosis = { address: ethers.utils.getAddress("0xe592609c24e8dc84c82edf7a1281a9e15d259bcb") };
  var usdcContractName = "USDCoin";
  var usdcToken = "USDCoin";
  var usdcSymbol = "USDC";

  console.log(`π₯ Deploying ${usdcContractName}`);
  console.log(`π Variable usdcContractName: ${usdcContractName}`);
  console.log(`π Variable usdcToken: ${usdcToken}`);
  console.log(`π Variable usdcSymbol: ${usdcSymbol}`);
  var usdcContract = await deploySCNoUp(usdcContractName, [usdcToken, usdcSymbol]);
  console.log(`π ${usdcContractName} Contract Addr: ${usdcContract.address}`);
  await verify(usdcContract.address, `π ${usdcContractName}`, [usdcToken, usdcSymbol]);

  var mprtknContractName = "MyTokenMiPrimerToken";
  console.log(`π Variable mprtknContractName: ${mprtknContractName}`);
  console.log(`π₯ Deploying ${mprtknContractName}`);
  var miPrimerTokenContract = await deploySC(mprtknContractName, []);
  console.log(`π ${mprtknContractName} Contract Addr: ${miPrimerTokenContract.address}`);
  var miPrimerTokenImplementation = await printAddress(`π£ ${mprtknContractName}`, miPrimerTokenContract.address);
  await verify(miPrimerTokenImplementation, `π ${mprtknContractName}`, []);

  var publicSaleContractName = "PublicSale";
  console.log(`π₯ Deploying ${publicSaleContractName}`);
  var publicSaleContract = await deploySC(publicSaleContractName, []);
  await (console.log(`π ${publicSaleContractName} Contract Addr: ${publicSaleContract.address} π’ Configure in Sentinel`));
  var publicSaleImplementation = await printAddress(`π£ ${publicSaleContractName}`, publicSaleContract.address);
  var txSetMPRTKN = await publicSaleContract.setMPRTKN(miPrimerTokenContract.address);
  await txSetMPRTKN.wait();
  var assignedMRKTKNAddress = await publicSaleContract.getMPRTKN();
  if (assignedMRKTKNAddress == miPrimerTokenContract.address) {
    console.log(`β ${publicSaleContractName} MPRTKN Address is: ${assignedMRKTKNAddress}`);
  } else {
    console.log(`β ${publicSaleContractName} MPRTKN Address has not properly been assigned`);
  }
  var txSetGnosis = await publicSaleContract.setGnosisWalletAddress(gnosis.address);
  await txSetGnosis.wait();
  var assignedGnosisAddress = await publicSaleContract.getGnosisWalletAddress();
  if (assignedGnosisAddress == gnosis.address) {
    console.log(`β ${publicSaleContractName} Gnosis Address is: ${assignedGnosisAddress}`);
  }
  else {
    console.log(`β ${publicSaleContractName} Gnosis Address has not properly been assigned`);
  }
  await verify(publicSaleImplementation, `π ${publicSaleContractName}`, []);
  console.log("π Finished GΓΆerli Deployment");
}

async function deployBoth() {
  await deployMumbai()
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
  await deployGoerli()
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}

var networkName = process.env.HARDHAT_NETWORK;
if (!networkName) {
  console.log("π€‘ Deploying to Local Hardhat");
  deployBoth();
}
else {
  console.log(`πͺ Deploying to: ${networkName}`);
  if (networkName == "mumbai") {
    deployMumbai()
      .catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
  }
  else if (networkName == "goerli") {
    deployGoerli()
      .catch((error) => {
        console.error(error);
        process.exitCode = 1;
      });
  }
  else {
    console.log("Not deployable contract for this network.");
  }
}
