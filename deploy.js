const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'barrel wise home outdoor amused enrich lunch then envelope round attract core',
    'https://rinkeby.infura.io/v3/cdd1fe4044e44c9a8fb2fc181c5d17b0'
);  //mnemonic, api

const web3 = new Web3(provider);
const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log("deploying contract from account : ",accounts[0]);

    const result = await new web3.eth.Contract(interface).deploy({data: bytecode, arguments:[456]}).send({gas:'1000000', from: accounts[0]});
    console.log(interface); 
    console.log("Contract deployed to : ", result.options.address);
};
deploy();