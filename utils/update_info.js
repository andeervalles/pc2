const basePath = process.cwd();
const fs = require("fs");

const namePrefix = "Cuy Moche NFT";
const description = "NFT MOCHE collection by Pachacuy.io inspired by the fertility huacos of the Peruvian Moche culture";
const baseUri = "ipfs://QmUgrq82ET5y6odKUB1Q5HxzGTNdbkkqWNpf3kbsnTVR1z";

// read json data
let rawdata = fs.readFileSync(`${basePath}/ipfs/metadata_30/_metadata.json`);
let data = JSON.parse(rawdata);
var group = "";

data.forEach((item) => {

  if (item.edition > 20) {
    group = "LEGENDARIO";
  }
  else {
    if (item.edition > 10) {
      group = "RARO"
    }
    else {
      group = "COMUN"
    }
  }

  item.name = `${namePrefix} ${group} #${item.edition}`;
  item.description = description;
  item.image = `${baseUri}/${item.edition}.png`;

  att=item.attributes.find(att => att.trait_type === "GRUPO");
  if (!att){
    item.attributes.push({
      "trait_type": "GRUPO",
      "value": `${group}`
    })
  }
  else{
    att.value=`${group}`;
  }

  fs.writeFileSync(
    `${basePath}/ipfs/metadata_30/${item.edition}.json`,
    JSON.stringify(item, null, 2)
  );
});
/*
fs.writeFileSync(
  `${basePath}/ipfs/metadata_30/_metadata.json`,
  JSON.stringify(data, null, 2)
);*/


console.log(`Updated baseUri for images to ===> ${baseUri}`);
console.log(`Updated description for images to ===> ${description}`);
console.log(`Updated name prefix for images to ===> ${namePrefix}`);

