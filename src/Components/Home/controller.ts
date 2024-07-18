// import { useLayoutEffect, useState } from "react";
import { getTokenName } from "./web3";
// import { toast } from "react-toastify";
// import { useAccount } from "wagmi";

export default function tokenController() {
  // const [totalSupply, setTotalSupply] = useState<string>("");
  // const { address } = useAccount();
  // const [wallet_adds] = useState<any>(address);

  // const requestToken = async () => {
  //   if (!address) {
  //     toast.warn("connect your wallet address", { theme: "colored" });
  //     return;
  //   }
  //   try {
  //     const tx = await handleTokenRequest(address);
  //     console.log(tx);
  //     if (tx.transactionHash) {
  //       toast.success("1000 Mills token sent", {
  //         theme: "colored",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.warning("Request in every 10 minutes", {
  //       theme: "dark",
  //     });
  //   }
  // };

  //retrieve token balance
  // const getTokenBalance = async () => {
  //   try {
  //     const balance = await handleTokenBalance(wallet_adds);
  //     toast.success(`You have ${balance} Mills token available `);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useLayoutEffect(() => {
  //   (async () => {
  //     const _total = await tokenTotalSupply();
  //     setTotalSupply(String(_total));
  //   })();
  // }, []);

  return {
    getTokenName,
  };
}
