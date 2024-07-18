import { ethers, Contract } from "ethers";
import useContractCredentials from "./credentials";


// import { JsonRpcSigner } from "ethers";
const { abi, rpcUrl, contractAddress } = useContractCredentials();

const provider = new ethers.JsonRpcProvider(rpcUrl);
const contract = new Contract(contractAddress, abi, provider);

export const getTokenName = async () => {
  const _name = await contract.getName();
  return _name;
};

// import Web3 from "web3";

// import { ethers } from "ethers";

// const provider = new ethers.JsonRpcProvider(evmClient, "sepolia");
// const signer = await provider.getSigner();

// const contract = new ethers.Contract(contractAddress, abi, signer);

// const web3Instance = new Web3(new Web3.providers.HttpProvider(evmClient));
// const contract = new web3Instance.eth.Contract(abi, contractAddress);

// export async function handleTokenBalance(walletAddress: string) {
//   const balance = await contract.balanceOf(walletAddress);
//   const result = balance.wait();
//   return result;
// const token_balance = await contract.methods.balanceOf(walletAddress).call(); // check  token balance
// return String(token_balance);
// }

// export async function handleTokenRequest(walletAddress: string) {
//   const tx = await contract.methods
//     .recieveTokenDrop(walletAddress)
//     .send({ from: "0xb2Dc9f4b66c5C3EFE479e2585d199442C8066ab3" });
//   return tx;
// }
// export async function tokenTotalSupply() {
//   const _totalSupply = await contract.methods.totalSupply().call();
//   return _totalSupply;
// }
