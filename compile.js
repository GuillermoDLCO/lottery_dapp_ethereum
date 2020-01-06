const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

var input = {
language: 'Solidity',
          sources: {
            'Lottery.sol': {
content: source
            }
          },
settings: {
outputSelection: {
                   '*': {
                     '*': [ '*' ]
                   }
                 }
          }
}

//to compile 1 smart contract
//module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox.evm;

var contract = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol'].Lottery;

//console.log({ abi: contract.abi, bytecode: contract.evm.bytecode.object});

module.exports = { abi: contract.abi, bytecode: contract.evm.bytecode.object };

