//  ====================================================================================================================================

import { ethers } from "ethers";
import { abi, contractAddress } from "./abi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// ============================================================================================================================
// WRITE TO CONTRACT
// ============================================================================================================================

// ============================================================================================================================

// ============================================================================================================================

const ethereum = (window as any).ethereum;

export default function useContractMethods() {
  const [currentWallet, setCurrentWallet] = useState<string>("");
  const [tokenBalance, setTokenBalance] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(false);

  async function connectWallet() {
    if (!ethereum) return alert("Kindly install metamask");
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setCurrentWallet(accounts[0]);
  }

  async function getEthereumContract() {
    try {
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const smartContractTransaction = new ethers.Contract(
        contractAddress,
        abi,
        signer
      );

      return smartContractTransaction;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async function receiveTokenFaucet() {
    const smartContractTransaction = await getEthereumContract();
    try {
      const tx = await smartContractTransaction!.recieveTokenDrop(
        currentWallet
      );

      await tx.wait();
    } catch (error: any) {
      toast.error("Try again in the next 10 mins");
    }
  }

  async function getBalance() {
    try {
      const smartContractTransaction = await getEthereumContract();
      const balance = await smartContractTransaction!.balanceOf(currentWallet);
      setTokenBalance(ethers.toNumber(balance));
      toast.success(`Your token balance is ${balance}`);
    } catch (error) {
      console.log(error);
    }
  }

  const transferToken = async (
    recepientAddress: string,
    tokenAmount: string
  ) => {
    try {
      const smartContractTransaction = await getEthereumContract();
      setIsLoading(true);
      const tx = await smartContractTransaction!.transfer(
        recepientAddress,
        Number(tokenAmount)
      );
      await tx.wait();
      setIsLoading(false);
    } catch (error) {
      toast.error("something went wrong");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  const disConnectWallet = async () => {
    await ethereum.request({
      method: "wallet_revokePermissions",
      params: [{ eth_accounts: {} }],
    });
    setCurrentWallet("");
  };

  return {
    connectWallet,
    tokenBalance,
    currentWallet,
    receiveTokenFaucet,
    getBalance,
    disConnectWallet,
    transferToken,
    isLoading,
  };
}
