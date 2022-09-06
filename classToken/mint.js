require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const truffleContract = require('@truffle/contract');
const tokenArtifacts = require('./build/contracts/ClassToken.json');
const Web3 = require('web3');

const web3 = new Web3(new HDWalletProvider(
        process.env.MNEMONIC,
        `https://rinkeby.infura.io/v3/0a9d453d25754d52973ee1a69ea37937`
      ));

const ClassToken = truffleContract(tokenArtifacts);

ClassToken.setProvider(web3.currentProvider);

const tokenAddress = '0xcf5A664c91F2224164733894FbA76859E169D194';

const loop = async () => {
  const accounts = await web3.eth.getAccounts();

  const pineapplePizza = await ClassToken.at(tokenAddress);

  await pineapplePizza.mint(
    '0x77937EA7f19D98de9559337782eE99c43F68242D', 10, // Jessie
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0x09fA5558A7Ed7494731F81701382c685EE1cF913', 10, // Mathieu
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0xA8c7500E37F7DbEEE97165469618ADaa8A49957D', 10, // Kaitlyn
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0x12eB1acfc43a588393980437BC47b0E143E76a63', 10, // Nicole
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0x062F1De11A9B614d1C5f18CE51788a11DAC6d6A6', 10, // Erhan
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0x5AfB6d5D152cf470EA0F30Db9e89E93Ca905734C', 10, // Eva
    {from: accounts[0]}
  );

  await pineapplePizza.mint(
    '0x5588195F4D60B86A3f0Ee2050785e0003AFC0f4c', 10, // Sam
    {from: accounts[0]}
  );

  console.log('done');
  process.exit();
}

loop();