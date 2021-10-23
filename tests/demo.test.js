//change test values in package.json package.json 

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');

const web3 = new Web3(ganache.provider());

let accounts;
let contrct;
beforeEach(async ()=>{
    //To get a list of accounts
    //always returns promise

    //web3.(any cryptocurrency).(function)
    /* web3.eth.getAccounts().then(fetchedAccounts => {
        console.log(fetchedAccounts);
    }); */

    accounts = await web3.eth.getAccounts();
    contrct=await new web3.eth.Contract(interface).deploy({data:bytecode, arguments:[5]}).send({from : accounts[0], gas:'1000000'});
});

describe('Testing', ()=>{
    // To test whether the contract is deployed or not
    it('Deployed a contract', ()=>{
        // console.log(contrct);
        assert.ok(contrct.options.address);
    });

    //To test the default value (constructor)
    it('Value assigned', async ()=>{
        const value = await contrct.methods.data().call();
        assert.equal(value, 5);
    });

    //To test setData function
    it('setData Fuction', async () =>{
        await contrct.methods.setData(8).send({from : accounts[0]});
        const value = await contrct.methods.data().call();
        assert.equal(value, 8);
    });
});