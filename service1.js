import Web3 from 'web3';
import UserDataABI from './User DataABI.json'; // Import your contract's ABI

const web3 = new Web3(window.ethereum); // Connect to MetaMask
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your contract address
const userDataContract = new web3.eth.Contract(UserDataABI, contractAddress);

// Function to add user data
async function addUser (name, email, aadharNumber, phoneNumber) {
    const accounts = await web3.eth.getAccounts();
    await userDataContract.methods.addUser (name, email, aadharNumber, phoneNumber).send({ from: accounts[0] });
}

// Function to get user data
async function getUser () {
    const accounts = await web3.eth.getAccounts();
    const userData = await userDataContract.methods.getUser ().call({ from: accounts[0] });
    console.log(userData);
}