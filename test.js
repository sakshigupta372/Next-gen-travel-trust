// app.js
const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:8545'); // Connect to local Ethereum node

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const abi = [ /* ABI array here */ ]; // Replace with your contract's ABI

const contract = new web3.eth.Contract(abi, contractAddress);

document.getElementById('loadDataButton').addEventListener('click', async () => {
    try {
        const value = await contract.methods.getValue().call(); // Call a read function
        document.getElementById('dataDisplay').innerText = `Current Value: ${value}`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});

document.getElementById('setValueButton').addEventListener('click', async () => {
    const inputValue = document.getElementById('inputValue').value;
    const accounts = await web3.eth.getAccounts(); // Get user accounts

    try {
        const receipt = await contract.methods.setValue(inputValue).send({ from: accounts[0] }); // Send a transaction
        document.getElementById('result').innerText = `Transaction successful: ${receipt.transactionHash}`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});