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

  // await pineapplePizza.mint(
  //   '0x77937EA7f19D98de9559337782eE99c43F68242D', web3.utils.toWei("10"), // Jessie
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0xA8c7500E37F7DbEEE97165469618ADaa8A49957D', web3.utils.toWei("60"), // Kaitlyn
  //   {from: accounts[0]}
  // );

  await pineapplePizza.mint(
    '0x1B6c16955eE8b742754B1d5F965D19356631712e', web3.utils.toWei("30"), // Nicole
    {from: accounts[0]}
  );

  // await pineapplePizza.mint(
  //   '0x062F1De11A9B614d1C5f18CE51788a11DAC6d6A6', web3.utils.toWei("60"), // Erhan
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0x5AfB6d5D152cf470EA0F30Db9e89E93Ca905734C', web3.utils.toWei("60"), // Eva
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0x5588195F4D60B86A3f0Ee2050785e0003AFC0f4c', web3.utils.toWei("50"), // Sam
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0xe614AfC8F5092D27769Db5eC819AC0EEFd293af0', web3.utils.toWei("60"), // Luke
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0x8c89d5008ed7753483E990f76e9D2795df8C3752', web3.utils.toWei("60"), // Malia
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0x5FCec2b70B84ff729718F14A449354648C803C20', web3.utils.toWei("10"), // Julian
  //   {from: accounts[0]}
  // );

  // await pineapplePizza.mint(
  //   '0x12eB1acfc43a588393980437BC47b0E143E76a63', web3.utils.toWei("10"), // Kitty
  //   {from: accounts[0]}
  // );

  

  console.log('done');
  process.exit();
}

loop();