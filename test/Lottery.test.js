const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { abi, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async function () {
  this.timeout(3000);

  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(abi)
    .deploy({ data: '0x' + bytecode })
    .send({ from: accounts[0],
        gas: 1500000,
        gasPrice: '30000000000000' });
});

describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(lottery.options.address);
  });
});
