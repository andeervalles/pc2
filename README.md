# DATOS PRINCIPALES:

<ul>
  <li>OZD Relayer: 0x70f26499B849168744F4FB8Fd8cce7b08c458e42</li>
  <li>Gnosis Safe: 0xe592609C24e8dc84C82eDF7A1281a9e15d259BCb</li>
  <li>IPFS
    <ul>
      <li>Metadata: QmZ7j7GnMeRG81cTfRfFvrv5yafFxFkD5zyXCgMN2LiLCH</li>
      <li>Images: QmUgrq82ET5y6odKUB1Q5HxzGTNdbkkqWNpf3kbsnTVR1z</li>
    </ul>
  </li>
  <li>MUMBAI
    <ul>
      <li>π MiPrimerNft Contract Addr: 0xb117Ee9e49a662cC9Cad7EFfF050b6305B941807</li>
    </ul>
  </li>
  <li>GΓERLI
    <ul>
      <li>π USDCoin Contract Addr: 0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640</li>
      <li>π MyTokenMiPrimerToken Contract Addr: 0x021C41C433e840053a60390dEaF59170E6171106</li>
      <li>π PublicSale Contract Addr: 0xDc7C82dcdAAab95f12a259da3066f02D72C0E297</li>
    </ul>
  </li>
</ul>

# Resultados deployer mode Local HardHat (No publicado en blockchains)
<pre>
jrobles@MacBook-Pro-M1 pc-2 % npx hardhat run scripts/deploy.js                 
π€‘ Deploying to Local Hardhat
π Deploying Mumbai oriented Contracts
π₯ Deploying MiPrimerNft
π Variable nftContractName: MiPrimerNft
π Variable nftContractTitle: Mi Primer NFT
π Variable nftSymbol: MPRNFT
π Variable ipfsCID: QmZ7j7GnMeRG81cTfRfFvrv5yafFxFkD5zyXCgMN2LiLCH
π MiPrimerNft Contract Addr: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 π’ Configure in AutoTask
π£ MiPrimerNft Proxy Address: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
π£ MiPrimerNft Impl. Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
β Address 0x70f26499B849168744F4FB8Fd8cce7b08c458e42 has MINTER_ROLE granted
π MiPrimerNft can't be verified in Local Hardhat Mode
π Finished Mumbai Deployment
π Deploying GΓΆerli oriented Contracts
π₯ Deploying USDCoin
π Variable usdcContractName: USDCoin
π Variable usdcToken: USDCoin
π Variable usdcSymbol: USDC
π USDCoin Contract Addr: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
π USDCoin can't be verified in Local Hardhat Mode
π Variable mprtknContractName: MyTokenMiPrimerToken
π₯ Deploying MyTokenMiPrimerToken
π MyTokenMiPrimerToken Contract Addr: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
π£ MyTokenMiPrimerToken Proxy Address: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
π£ MyTokenMiPrimerToken Impl. Address: 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
π MyTokenMiPrimerToken can't be verified in Local Hardhat Mode
π₯ Deploying PublicSale
π PublicSale Contract Addr: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853 π’ Configure in Sentinel
π£ PublicSale Proxy Address: 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
π£ PublicSale Impl. Address: 0x0165878A594ca255338adfa4d48449f69242Eb8F
β PublicSale MPRTKN Address is: 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
β PublicSale Gnosis Address is: 0xe592609C24e8dc84C82eDF7A1281a9e15d259BCb
π PublicSale can't be verified in Local Hardhat Mode
π Finished GΓΆerli Deployment
</pre>
# Resultados deployer en Network Mumbai
<pre>
jrobles@MacBook-Pro-M1 pc-2 % npx hardhat run scripts/deploy.js --network mumbai
πͺ Deploying to: mumbai
π Deploying Mumbai oriented Contracts
π₯ Deploying MiPrimerNft
π Variable nftContractName: MiPrimerNft
π Variable nftContractTitle: Mi Primer NFT
π Variable nftSymbol: MPRNFT
π Variable ipfsCID: QmZ7j7GnMeRG81cTfRfFvrv5yafFxFkD5zyXCgMN2LiLCH
π MiPrimerNft Contract Addr: 0xb117Ee9e49a662cC9Cad7EFfF050b6305B941807 π’ Configure in AutoTask
π£ MiPrimerNft Proxy Address: 0xb117Ee9e49a662cC9Cad7EFfF050b6305B941807
π£ MiPrimerNft Impl. Address: 0x1a1c2Ac41322685747B6A16E1137c42a9f709374
β Address 0x70f26499B849168744F4FB8Fd8cce7b08c458e42 has MINTER_ROLE granted
Nothing to compile
Successfully submitted source code for contract
contracts/NFT.sol:MiPrimerNft at 0x1a1c2Ac41322685747B6A16E1137c42a9f709374
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MiPrimerNft on Etherscan.
https://mumbai.polygonscan.com/address/0x1a1c2Ac41322685747B6A16E1137c42a9f709374#code
π Finished Mumbai Deployment
</pre>
# Resultados deployer en Network GΓΆerli
<pre>
jrobles@MacBook-Pro-M1 pc-2 % npx hardhat run scripts/deploy.js --network goerli
πͺ Deploying to: goerli
π Deploying GΓΆerli oriented Contracts
π₯ Deploying USDCoin
π Variable usdcContractName: USDCoin
π Variable usdcToken: USDCoin
π Variable usdcSymbol: USDC
USDCoin - Imp: 0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640
π USDCoin Contract Addr: 0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640
Nothing to compile
Successfully submitted source code for contract
contracts/USDCoin.sol:USDCoin at 0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640
for verification on the block explorer. Waiting for verification result...

Successfully verified contract USDCoin on Etherscan.
https://goerli.etherscan.io/address/0xE508E7a7d48b71540e5f93BD8f5FaC272Ec3d640#code
π Variable mprtknContractName: MyTokenMiPrimerToken
π₯ Deploying MyTokenMiPrimerToken
π MyTokenMiPrimerToken Contract Addr: 0x021C41C433e840053a60390dEaF59170E6171106
π£ MyTokenMiPrimerToken Proxy Address: 0x021C41C433e840053a60390dEaF59170E6171106
π£ MyTokenMiPrimerToken Impl. Address: 0x86d4CF8b1217eE4FfbF04c35820bfF9DD9E2252f
Compiled 37 Solidity files successfully
Successfully submitted source code for contract
contracts/MiPrimerToken.sol:MyTokenMiPrimerToken at 0x86d4CF8b1217eE4FfbF04c35820bfF9DD9E2252f
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MyTokenMiPrimerToken on Etherscan.
https://goerli.etherscan.io/address/0x86d4CF8b1217eE4FfbF04c35820bfF9DD9E2252f#code
π₯ Deploying PublicSale
π PublicSale Contract Addr: 0xDc7C82dcdAAab95f12a259da3066f02D72C0E297 π’ Configure in Sentinel
π£ PublicSale Proxy Address: 0xDc7C82dcdAAab95f12a259da3066f02D72C0E297
π£ PublicSale Impl. Address: 0x1B69618d6B339658def8Ccc3dC97DE71Bd9FaccE
β PublicSale MPRTKN Address is: 0x021C41C433e840053a60390dEaF59170E6171106
β PublicSale Gnosis Address is: 0xe592609C24e8dc84C82eDF7A1281a9e15d259BCb
Nothing to compile
Successfully submitted source code for contract
contracts/PublicSale.sol:PublicSale at 0x1B69618d6B339658def8Ccc3dC97DE71Bd9FaccE
for verification on the block explorer. Waiting for verification result...

Successfully verified contract PublicSale on Etherscan.
https://goerli.etherscan.io/address/0x1B69618d6B339658def8Ccc3dC97DE71Bd9FaccE#code
π Finished GΓΆerli Deployment
</pre>
# PrΓ‘ctica Calificada 2 (UTEC) - Blockchain

EstΓ‘s a punto de lanzar una colecciΓ³n de NFTs para tu comunidad. Escoges la red Polygon (Mumbai) dado que es la red mΓ‘s popular para este tipo de proyectos. Tus usuarios poseen los fondos en la red Ethereum (Goerli) y prefieres que se realice la compra en esta red y luego, cross-chain, acuΓ±ar los NFTs en Polygon.

En principio, tus usuarios poseen el token USDC, que es una moneda estable. Sin embargo, el contrato de compra y venta de NFTs solamente acepta el token de tu proyecto (MiPrimerToken) para proceder con la compra. Ello implica que antes de realizar la compra, un usuario cambiarΓ‘ sus USDC por MiPrimerToken en un casa de cambios descentralizada (DEX - UNISWAP).

Realizar el swap de tokens en un DEX require que en primer lugar se cree un pool de liquidez de un par de tokens. Es decir, que en dicho pool se depositen una cierta cantidad de cada token. La cantidad a depositar de cada token determinarΓ‘ el tipo de cambio a usar en los swaps mientras exista el pool de liquidez. Ello permitirΓ‘ que un usuario utilice UNISWAP para intercambiar USDC por MiPrimerToken usando el pool de liquidez creado. Este intercambio se puede realizar tanto de manera manual en la app de UNISWAP o de manera programΓ‘tica en un contrato inteligente

Para asegurar la conveniencia del usuario y Γ©xito de tu proyecto, has creado una arquitectura de contratos y middleware (Open Zeppelin Defender) que consta de las siguientes partes:

1. Token ERC20 (llamado MiPrimerToken)
2. NFT ERC721 (usar coleccion de cuyes)
3. Compra y Venta de NFTs (Public Sale)
4. USDC (stable coin)
5. Open Zeppelin Defender (Middleware)
6. IPFS
7. Pool de liquidez (Par: USDC y MiPrimerToken - UNISWAP)
8. Front-end

Las redes a usar son las siguientes:

1. <u>Red Ethereum (Goerli):</u> Token ERC20, USDC y contrato de Compra y Venta

2. <u>Red Polygon (Mumbai):</u> Contrato de NFT

Contratos actualizables:

1. <u>Contratos actualizables:</u> Token ERC20, NFT smart contract y Compra y Venta

2. <u>Contrato no actualizable:</u> USDC. Tiene seis (6) decimales.

**Token ERC20 MiPrimerToken (Goerli)**

Este contrato sigue el estΓ‘ndar ERC20 y tiene el mΓ©todo `mint` protegido. Este token serΓ‘ el otro par usado en la creaciΓ³n del pool de liquidez. Su publicaciΓ³n se darΓ‘ en la red Goerli. Es el ΓΊnico token usado para comprar NFTs. Tiene dieciocho (18) decimales.

**Contrato NFT (Mumbai)**

Este contrato permite la acuΓ±aciΓ³n de los NFTs en la red Mumbai. La compra se realiza en el contrato de Compra y Venta en Goerli y a travΓ©s de eventos se dispara la acuΓ±aciΓ³n de NFTs en Mumbai. Funciona como un contrato satΓ©lite y el usuario final nunca interactΓΊa con este contrato.

Las caracterΓ­sticas de este contrato son las siguientes:

1. Todos los mΓ©todos de este contrato son protegidos. La ΓΊnica address con el privilegio de poder llamar mΓ©todos del contrato NFT es el Relayer de Open Zeppelin.
2. Los treinta elementos de la colecciΓ³n, se dividen en tres grupos: comunes, raros y legendarios. Cada grupo tiene diez elementos ordenados de manera secuencial. Comunes: 1 - 10; raros: 11 - 20 y legendarios: 21 - 30.
3. No se realiza la compra en este mismo contrato. Este contrato solo realiza acuΓ±aciones de NFT instruidos por el Relayer de OZ.

**Contrato de Compra y Venta de NFTs (Goerli)**

Este contrato de publica en la red Goerli. Sirve de interface para realizar la compra de NFTs. El usuario deposita MiPrimerToken en el contrato de Compra y Venta para poder adquirir un NFT en la red Mumbai. La comunicaciΓ³n entre el contrato de Compra y Venta y el contrato de NFTs se darΓ‘ a travΓ©s de Open Zeppelin Defender. El contrato de Compra y Venta emite eventos que serΓ‘n escuchados por Open Zeppelin Defender, que a su vez ordenarΓ‘ al contrato de NFT en Mumbai de acuΓ±ar un determinado NFT.

Las caracterΓ­sticas de este contrato son las siguientes:

1. Primera modalidad de compra: el contrato de Compra y Venta se transfiere una cantidad de MiPrimerToken del usuario para pagar uno de los tipos de NFT. A cambio, el contrato de Compra y Venta emite un evento con la informaciΓ³n apropiada que serΓ‘ escuchado por Open Zeppelin Defender.
2. Segunda modalidad de compra (BONUS): el contrato de Compra y Venta recibe USDC del usuario. Al hacerlo, utiliza UNISWAP para hacer la conversiΓ³n de USDC a MiPrimerToken en una cantidad que es suficiente para poder pagar uno de los tipos de NFT disponibles. A cambio, el contrato de Compra y Venta emite un evento con la informaciΓ³n apropiada que serΓ‘ escuchado por Open Zeppelin Defender.
3. Hay tres grupos de NFTs (comΓΊn, raro y legendario). Cada grupo tiene un diferente precio para poder ser adquirido. Los comunes tienen un precio flat de quinientos (500) MiPrimerToken. Los raros poseen un precio que es el resultado de multiplicar su id por mil. Es decir, el raro con id #11 costarΓ‘ 11,000 MiPrimerToken, mientras que el raro con id #20 costarΓ‘ 20,000 MiPrimerToken. Los legendarios tienen un precio que cambia en funciΓ³n de la cantidad de horas pasadas desde las 00 horas del 21 de diciembre del 2022 GMT (obtener el timestamp en [epoch converter](https://www.epochconverter.com/)). El precio base empieza en 10,000 MiPrimerToken. Por cada hora pasada, el precio se incrementa en 1,000 MiPrimerToken. El precio mΓ‘ximo para un NFT legendario es de 50,000 MiPrimerToken.
4. Un usuario puede depositar 0.01 Ether para poder obtener un NFT aleatorio. Este NFT serΓ‘ escogido de uno de los que se encuentren disponibles en el contrato de NFT en Mumbai. AdemΓ‘s, en este mΓ©todo, en caso se envΓ­e por equivocaciΓ³n un monto mayor a 0.01, el smart contract deberΓ­a "dar vuelto". Solo ejecutar este mΓ©todo si aΓΊn quedan algΓΊn NFT de la colecciΓ³n de treinta disponibles. Para realizar el depΓ³sito un usario puede llamar un mΓ©todo del smart contract o simplemente enviar Ether al smart contract.
5. Se usarΓ‘ una billetera de un baΓΊl (safe) creado en Gnosis Safe. Dicha billeterΓ‘ recibirΓ‘ la totalidad de transferencias en Ether y el 10% de las transferencias en MiPrimerToken. Ello quiere decir que en ningΓΊn momento el contrato guardarΓ‘ Ether pero sΓ­ tendrΓ‘ un balance de MiPrimerToken.
6. Crear un mΓ©todo que permite recuperar lo tokens de MiPrimerToken almacenados en este contrato. Dicho mΓ©todo debe estar protegido y solo el admin/owner del contrato lo puede llamar. Todos los MiPrimerToken del contrato Compra y Venta son transferidos al llamante del mΓ©todo.
7. No se pueden acuΓ±ar mΓ‘s de treinta (30) NFTs. Definir la validaciΓ³n apropiada en el contrato.

**Contrato USDC (Goerli)**

Este contrato sigue el estΓ‘ndar ERC20 y tiene el mΓ©todo `mint` protegido. Este token simula la poseciΓ³n de dΓ³lares digitales. Su publicaciΓ³n se darΓ‘ en la red Goerli. Su funciΓ³n es la de proveer fondos para iniciar las operaciones de compra. Tiene seis (6) decimales.

**Open Zeppelin**

- Relayer: crea un signer para firmar las transacciones en la red Mumbai. Este signer se utiliza en el script definido en el autotask. Recordar que el address del Relayer debe poseer un privilegio para que pueda llamar al mΓ©todo de acuΓ±aciΓ³n del smart contract de NFTs.
- Autotask: script que se ejecuta a raΓ­z de la escucha de eventos que vienen del smart contract de venta pΓΊblica (public sale) de NFTs en Goerli. Este script se encarga de llamar al contrato de NFTs para acuΓ±ar un NFT usando la informaciΓ³n proveniente en el evento del Sentinel
- Sentinel: escucha los eventos que se emiten a raΓ­z de la compra de NFTs en el contrato de venta pΓΊblica (Goerli). A su vez, el sentinel se encarga de llamar el autotask que permite la acuΓ±aciΓ³n de NFTs en Mumbai.

**IPFS**

1. Dentro de la carpeta `ipfs` tenemos a `images_30` y `metadata_30`. Estas dos carpetas representan a los activos digitales y la metadata, respectivamente.
2. Guardar la carpeta de activos digitales (`images_30`) en la aplicaciΓ³n de escritorio IPFS. Obtener el CID luego de guardar la carpeta.
3. Dentro de la carpeta de metadata (`metadata_30`), se encontrarΓ‘n los archivos `json` enumerados de manera secuencial. Cada archivo `json`, representa la metada de un activo digital en particular. Por ejemplo, el archivo `0.json`, representa la metadata del activo digital `0.png`, guardada en la otra carpeta (`images_30`).
4. Se van a modificar los archivos de metadata. Buscar la propiedad `image` dentro del archivo `json`. Notar que esta propiedad tambiΓ©n estΓ‘ enumerada. Esta propiedad tiene por valor `ipfs://[enter the CID here]/0.png`. Reemplazar por el valor del CID obtenido en el punto 2
5. No modificar los atributos de los archivo `json`. Dado que hay tres grupos diferentes de NFTs, modificar el atributo `name` de cada archivo `json` para que represente mΓ‘s apropiada el grupo de NFT al que pertenece (comΓΊn, raro o legendario).
6. Escoger una descripciΓ³n apropiada para que represente la colecciΓ³n de NFTs que estΓ‘s creando. Para lograr ello cambiar el atributo `description` del archivo `json`.
7. De manera opcional se pueden agregar mΓ‘s atributos en la propiedad `attributes`. Seguir la guΓ­a/estΓ‘ndar definido en la pΓ‘gina de Open Sea que lo puedes encontrar [aquΓ­](https://docs.opensea.io/docs/metadata-standards). Estos atributos serΓ‘n vistos en la galerΓ­a de Opean Sea.
8. Luego de terminar de editar los archivos de metadata, guardar la carpeta `metadata_30` en `ipfs` para poder obtener el CID. Finalmente, este CID es el que se guardarΓ‘ en el smart contract en el mΓ©todo `tokenURI`. Gracias a este mΓ©todo, el smart contract puede encontrar la metadata y el activo digital en el IPFS.

**Front-End**

Crear un front minimalista para poder interactuar con el contrato de Venta PΓΊblica. En este front, se podrΓ‘n realizar las siguientes operaciones:

1. Dar approve de MiPrimerToken al contrato de venta pΓΊblica
2. Comprar un NFT usando un ID
3. Llamar al mΓ©todo de comprar un NFT random enviando ether
4. Enviar ether directamenete al contrato inteligente
5. Visualizar la acuΓ±aciΓ³n y delivery de NFTs en Mumbai

**Sources**
[Todos los videos](https://drive.google.com/drive/folders/19-Bl4YdkChTKdYBHe5zUG1SNG6cL0sn6?usp=share_link)

1. [Empieza aquΓ­](https://drive.google.com/file/d/1hMwLreEmAu1y8nfGDEvBvjMBOIYNgxO2/view?usp=share_link)
2. [Repositorio parte 1](https://drive.google.com/file/d/11axRps6WBAAaXFRN3k7730F9eBTEIpAn/view?usp=share_link)
3. [Repositorio parte 2](https://drive.google.com/file/d/1etqz5SFuE-IGZxMvdV4R92-JnjMTBsQs/view?usp=share_link)
4. [Front-end final](https://drive.google.com/file/d/13QBkBr1XsdiE7h9F7MtkCq00TErA_mAA/view?usp=share_link)
5. [Open Zeppelin Defender](https://drive.google.com/file/d/1zy_fyBFYwEX8KKeIi_cJqtoYFYPGHfCs/view?usp=share_link)
6. [Envio de Ether al SC](https://drive.google.com/file/d/1eY1JowcTq7WbpJfHNF0Iiq5JFCGs63t9/view?usp=share_link)
7. [Swap USDC=>MiPrimerToken](https://drive.google.com/file/d/1VEa_ExK_oxvHc8Q34YRv_y6LobWRoJ1M/view?usp=share_link)
