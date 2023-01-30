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
  await console.log("🙏 Deploying Mumbai oriented Contracts");
  var relayerAddress = ethers.utils.getAddress("0x70f26499b849168744f4fb8fd8cce7b08c458e42");
  var ipfsCID = "QmZ7j7GnMeRG81cTfRfFvrv5yafFxFkD5zyXCgMN2LiLCH";
  var nftContractName = "MiPrimerNft";
  var nftContractTitle = "Mi Primer NFT";
  var nftSymbol = "MPRNFT";

  console.log(`🥚 Deploying ${nftContractName}`);
  console.log(`👉 Variable nftContractName: ${nftContractName}`);
  console.log(`👉 Variable nftContractTitle: ${nftContractTitle}`);
  console.log(`👉 Variable nftSymbol: ${nftSymbol}`);
  console.log(`👉 Variable ipfsCID: ${ipfsCID}`);
  var nftContract = await deploySC(nftContractName, [nftContractTitle, nftSymbol, ipfsCID]);
  await (console.log(`📝 ${nftContractName} Contract Addr: ${nftContract.address} 🟢 Configure in AutoTask`));
  var nftImplementation = await printAddress(`📣 ${nftContractName}`, nftContract.address);
  // set up
  var exResult = await ex(nftContract, "grantRole", [MINTER_ROLE, relayerAddress], "🤬 Error Granting Role");
  if (exResult.events[0].args["role"] == MINTER_ROLE && exResult.events[0].args["account"] == relayerAddress) {
    console.log(`✅ Address ${relayerAddress} has MINTER_ROLE granted`);
  }
  else {
    console.log(`❌ Address ${relayerAddress} has NOT MINTER_ROLE granted`);
  }
  await verify(nftImplementation, `🔎 ${nftContractName}`, []);
  console.log("😀 Finished Mumbai Deployment");
}

async function deployGoerli() {
  console.log("🙏 Deploying Göerli oriented Contracts");
  // gnosis safe
  // Crear un gnosis safe en https://gnosis-safe.io/app/
  // Extraer el address del gnosis safe y pasarlo al contrato con un setter*/
  var gnosis = { address: ethers.utils.getAddress("0xe592609c24e8dc84c82edf7a1281a9e15d259bcb") };
  var usdcContractName = "USDCoin";
  var usdcToken = "USDCoin";
  var usdcSymbol = "USDC";

  console.log(`🥚 Deploying ${usdcContractName}`);
  console.log(`👉 Variable usdcContractName: ${usdcContractName}`);
  console.log(`👉 Variable usdcToken: ${usdcToken}`);
  console.log(`👉 Variable usdcSymbol: ${usdcSymbol}`);
  var usdcContract = await deploySCNoUp(usdcContractName, [usdcToken, usdcSymbol]);
  console.log(`📝 ${usdcContractName} Contract Addr: ${usdcContract.address}`);
  await verify(usdcContract.address, `🔎 ${usdcContractName}`, [usdcToken, usdcSymbol]);

  var mprtknContractName = "MyTokenMiPrimerToken";
  console.log(`👉 Variable mprtknContractName: ${mprtknContractName}`);
  console.log(`🥚 Deploying ${mprtknContractName}`);
  var miPrimerTokenContract = await deploySC(mprtknContractName, []);
  console.log(`📝 ${mprtknContractName} Contract Addr: ${miPrimerTokenContract.address}`);
  var miPrimerTokenImplementation = await printAddress(`📣 ${mprtknContractName}`, miPrimerTokenContract.address);
  await verify(miPrimerTokenImplementation, `🔎 ${mprtknContractName}`, []);

  var publicSaleContractName = "PublicSale";
  console.log(`🥚 Deploying ${publicSaleContractName}`);
  var publicSaleContract = await deploySC(publicSaleContractName, []);
  await (console.log(`📝 ${publicSaleContractName} Contract Addr: ${publicSaleContract.address} 🟢 Configure in Sentinel`));
  var publicSaleImplementation = await printAddress(`📣 ${publicSaleContractName}`, publicSaleContract.address);
  var txSetMPRTKN = await publicSaleContract.setMPRTKN(miPrimerTokenContract.address);
  await txSetMPRTKN.wait();
  var assignedMRKTKNAddress = await publicSaleContract.getMPRTKN();
  if (assignedMRKTKNAddress == miPrimerTokenContract.address) {
    console.log(`✅ ${publicSaleContractName} MPRTKN Address is: ${assignedMRKTKNAddress}`);
  } else {
    console.log(`❌ ${publicSaleContractName} MPRTKN Address has not properly been assigned`);
  }
  var txSetGnosis = await publicSaleContract.setGnosisWalletAddress(gnosis.address);
  await txSetGnosis.wait();
  var assignedGnosisAddress = await publicSaleContract.getGnosisWalletAddress();
  if (assignedGnosisAddress == gnosis.address) {
    console.log(`✅ ${publicSaleContractName} Gnosis Address is: ${assignedGnosisAddress}`);
  }
  else {
    console.log(`❌ ${publicSaleContractName} Gnosis Address has not properly been assigned`);
  }
  await verify(publicSaleImplementation, `🔎 ${publicSaleContractName}`, []);
  console.log("😀 Finished Göerli Deployment");
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
  console.log("🤡 Deploying to Local Hardhat");
  deployBoth();
}
else {
  console.log(`💪 Deploying to: ${networkName}`);
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
