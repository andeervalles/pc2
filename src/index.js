import { BigNumber, Contract, providers, ethers, utils, Signer } from "ethers";

import usdcTknAbi from "../artifacts/contracts/USDCoin.sol/USDCoin.json";
import miPrimerTknAbi from "../artifacts/contracts/MiPrimerToken.sol/MyTokenMiPrimerToken.json";
import publicSaleAbi from "../artifacts/contracts/PublicSale.sol/PublicSale.json";
import nftTknAbi from "../artifacts/contracts/NFT.sol/MiPrimerNft.json";

window.ethers = ethers;

var provider, signer, account;
var usdcTkContract, miPrTokenContract, nftTknContract, pubSContract;

var jsonprovider;

var usdcAddress = "0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640";
var miPrTknAdd = "0x021C41C433e840053a60390dEaF59170E6171106";
var pubSContractAdd = "0xDc7C82dcdAAab95f12a259da3066f02D72C0E297";
var nftAddress = "0xb117Ee9e49a662cC9Cad7EFfF050b6305B941807";

// REQUIRED
// Conectar con metamask
function initSCsGoerli() {

  console.log("Setting Provider");
  provider = new providers.Web3Provider(window.ethereum);

  console.log("USDC Contract");
  usdcTkContract = new Contract(usdcAddress, usdcTknAbi.abi, provider);
  console.log(usdcTkContract);

  console.log("MPRTKN Contract");
  miPrTokenContract = new Contract(miPrTknAdd, miPrimerTknAbi.abi, provider);
  console.log(miPrTokenContract);

  console.log("PublicSale Contract");
  pubSContract = new Contract(pubSContractAdd, publicSaleAbi.abi, provider);
  console.log(pubSContract);
  
}

// OPTIONAL
// No require conexion con Metamask
// Usar JSON-RPC
// Se pueden escuchar eventos de los contratos usando el provider con RPC
async function initSCsMumbai() {
  //if (!window.ethereum) throw Error("Metamask no instalado");
  //provider = new providers.Web3Provider(window.ethereum);
  var urlProvider = "https://polygon-mumbai.g.alchemy.com/v2/o0NFlK-GZPEgP2UUGR1bYrUVJmmAAehR";
  jsonprovider = new ethers.providers.JsonRpcProvider(urlProvider);

  console.log("NFT Contract");
  nftTknContract = new Contract(nftAddress, nftTknAbi.abi, jsonprovider);
  console.log(pubSContract);

  //var res = await nftTknContract.connect(nftAddress).balanceOf("0x7B6d351AD70bd3F21701E819804449A538178cE0") ;
  //console.log ("balance:", res);
}

function addListenerConnectToMetamask(){
  console.log("Adding Listener to Connect Button");
  var connectButton = document.getElementById("connect");
  connectButton.addEventListener("click", async function () {
    console.log("Connect to Metamask Clicked");
    if (window.ethereum){
      document.getElementById("connectedAddress").innerHTML="";
      document.getElementById("connectedChain").innerHTML="";
      document.getElementById("connectError").innerHTML="";
      document.getElementById("usdcBalance").innerHTML="";
      document.getElementById("miPrimerTknBalance").innerHTML="";
    account="";
    signer="";
    await ethereum
    .request ({method: "eth_requestAccounts"})
    .then((result) => {
      console.log("Result:",result);
      [account]=result;
      console.log("Cuenta:",account);
      document.getElementById("connectedAddress").innerHTML=account;
      document.getElementById("connectedChain").innerHTML=ethereum.chainId;
      signer = provider.getSigner(account);
      })
    .catch((err) => {
      document.getElementById("connectError").innerHTML="Error: "+err.message;
    });
    }
  });
}

function addListenerUSDCbalance(){
  console.log("Adding Listener for USDC Balance");
  var usdcUpdateButton = document.getElementById("usdcUpdate");
  usdcUpdateButton.addEventListener("click", async function () {
    console.log("USDC Balance Button Clicked");
    var balance = await usdcTkContract.balanceOf(account);
    document.getElementById("usdcBalance").innerHTML=ethers.utils.formatUnits(balance,6);
  })
}

function addListenerMPTKNbalance(){
  console.log("Adding Listener for MPTKN Balance");
  var mptknUpdateButton = document.getElementById("miPrimerTknUpdate");
  mptknUpdateButton.addEventListener("click", async function () {
    console.log("MPTKN Balance Button Clicked");
    var balance = await miPrTokenContract.balanceOf(account);
    document.getElementById("miPrimerTknBalance").innerHTML=ethers.utils.formatUnits(balance,18);
  })
}

function addListenerApprove(){
  console.log("Adding Listener for MPTKN Balance");
  var approveButton = document.getElementById("approveButton");
  approveButton.addEventListener("click", async function () {
    console.log("Approve Button Clicked");
    document.getElementById("approveError").innerHTML="";
    var amount = document.getElementById("approveInput").value;
    console.log("Aprobando:",amount);
    var fullAmount=`${amount}000000000000000000`;
    console.log("BigNumber:",fullAmount);
    var txAmount = await BigNumber.from(fullAmount);
    console.log("Iniciando TX. Espere...");
    var txApproval = await miPrTokenContract
      .connect(signer)
      .approve(pubSContractAdd,txAmount)
      .catch((err) => {
        document.getElementById("approveError").innerHTML="Error: "+err.message;
      });
    var response = await txApproval.wait(1);
    console.log(response.transactionHash);
  })
}

function addListenerPurchaseById(){
  console.log("Adding Listener for Purchase Button");
  var purchaseButton = document.getElementById("purchaseButton");
  purchaseButton.addEventListener("click", async function () {
    console.log("Purchase By Id Button Clicked");
    document.getElementById("purchaseError").innerHTML="";
    var tokenId = document.getElementById("purchaseInput").value;
    console.log("Token:",tokenId);
    console.log("Iniciando TX. Espere...");
    var txPurchase = await pubSContract
      .connect(signer)
      .purchaseNftById(tokenId)
      .catch((err) => {
        document.getElementById("purchaseError").innerHTML="Error: "+err.message;
      });
    var response = await txPurchase.wait(1);
    console.log(response.transactionHash);
  })
}

function setUpListeners() {
  // Connect to Metamask
  addListenerConnectToMetamask();
  addListenerUSDCbalance();
  addListenerMPTKNbalance();
  addListenerApprove();
  addListenerPurchaseById();
}


function setUpEventsContracts() {
  // nftTknContract.on
}

async function setUp() {
  //console.log("init(window.ethereum)");
  //init(window.ethereum);
  console.log("initSCsGoerli()");
  initSCsGoerli();
  console.log("initSCsMumbai()");
  await initSCsMumbai();
  console.log("setUpListeners()");
  await setUpListeners();
  console.log("setUpEventsContracts()");
  setUpEventsContracts();
}

console.log("Setting Up...");
setUp()
  .then()
  .catch((e) => console.log(e));
console.log("setUp Finished...");

