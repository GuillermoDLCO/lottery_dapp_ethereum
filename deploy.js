const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'flavor video exist wild ivory finger system motion call rich depth mutual',
  'https://rinkeby.infura.io/v3/bc1ad63f5dde4bd8b192ce14c62eedfa'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);
  
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: '0x'+bytecode })
    .send({from: accounts[0]});

  console.log('Contract deployed to', result.options.address);
};

deploy();
