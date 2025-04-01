import { Button, Col, FormGroup, Input } from "reactstrap";
import { MoneyBagCoins, RotateLock } from "react-huge-icons/bulk";

import useContractMethods from "../Home/controller";
import { useState } from "react";

const Form = () => {
  const {
    receiveTokenFaucet,
    currentWallet,
    getBalance,
    transferToken,
    isLoading,
  } = useContractMethods();
  const [tokenAmount, setTokenAmount] = useState("");
  const [recepientAddress, setRecepientAddress] = useState("");

  const handleTokenAmountChange = (e: any) => {
    setTokenAmount(e.target.value);
  };
  const handleRecepientAddressChange = (e: any) => {
    setRecepientAddress(e.target.value);
  };

  const handleTransferToken = async () => {
    // console.log(recepientAddress, tokenAmount);
    await transferToken(recepientAddress, tokenAmount);
  };

  return (
    <FormGroup className=" w-full px-3">
      <Col className="flex justify-between flex-col gap-2 max-sm:gap-1">
        <p className="text-gray-50 font-semibold text-sm max-sm:text-xs text-center  max-sm:text-gray-100">
          Wallet address here
        </p>
        <Input
          value={currentWallet ? currentWallet : ""}
          disabled
          placeholder={
            currentWallet ? currentWallet : "connect your wallet 0x00000...."
          }
          className="w-full px-3 py-5 text-center rounded-sm max-sm:py-3 max-sm:w-full "
        />
        {currentWallet && (
          <div className="relative justify-between h-auto grid grid-cols-1 gap-2 max-sm:gap-1">
            <input
              placeholder="Token Amount"
              className="w-full px-3 py-5 text-center rounded-sm max-sm:py-3 max-sm:w-full "
              type="text"
              value={tokenAmount}
              onChange={handleTokenAmountChange}
            />
            <input
              placeholder="Recepient Address"
              className="w-full px-3 py-5 text-center rounded-sm max-sm:py-3 max-sm:w-full "
              type="text"
              value={recepientAddress}
              onChange={handleRecepientAddressChange}
            />
            {isLoading ? (
              <p className="text-white text-[12px] font-semibold">loading</p>
            ) : (
              <Button
                className="max-sm:w-full px-3 py-3 flex justify-center gap-1 items-center hover:bg-black  transition duration-300 rounded-sm   font-semibold text-3xl max-sm:text-xl bg-black max-sm:bg-yellow-500 hover:text-yellow-500 text-white  "
                onClick={handleTransferToken}
              >
                SEND
              </Button>
            )}
            <Button
              onClick={receiveTokenFaucet}
              className="w-full px-3 py-3 flex justify-center gap-1 items-center hover:bg-black  transition duration-300 rounded-sm   font-semibold text-3xl max-sm:text-xl bg-black max-sm:bg-yellow-500 hover:text-yellow-500 text-white "
            >
              MINT <RotateLock className="inline transition duration-500" />
            </Button>
            <Button
              onClick={() => getBalance()}
              className="w-full px-3 py-3 flex justify-center gap-1 items-center hover:bg-black  transition duration-300 rounded-sm   font-semibold text-3xl max-sm:text-xl bg-black max-sm:bg-yellow-500 hover:text-yellow-500 text-white "
            >
              BALANCE{""}
              <MoneyBagCoins className="inline transition duration-500" />
            </Button>
          </div>
        )}
      </Col>
    </FormGroup>
  );
};

export default Form;
