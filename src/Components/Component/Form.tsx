import { Button, Col, FormGroup, Input } from "reactstrap";
import tokenController from "../Home/controller";
import { MoneyBagCoins, RotateLock } from "react-huge-icons/bulk";
import { useAccount } from "wagmi";

const Form = () => {
  const { isConnected, address } = useAccount();
  const { getTokenName } = tokenController();
  return (
    <FormGroup className=" w-full px-3">
      <Col className="flex justify-between flex-col gap-2 max-sm:gap-1">
        <p className="text-gray-50 font-semibold text-sm max-sm:text-xs text-center  max-sm:text-gray-100">
          Wallet address here
        </p>
        <Input
          value={isConnected ? address : ""}
          disabled
          placeholder={
            isConnected ? address : "connect your wallet 0x00000...."
          }
          className="w-full px-3 py-5 text-center rounded-sm max-sm:py-3 max-sm:w-full "
        />
        {isConnected && (
          <div className="relative flex justify-between gap-2">
            <Button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="w-full px-3 py-3 flex justify-center gap-1 items-center hover:bg-black  transition duration-300 rounded-sm   font-semibold text-3xl max-sm:text-xl bg-black max-sm:bg-yellow-500 hover:text-yellow-500 text-white "
            >
              GET TOKEN{" "}
              <RotateLock className="inline transition duration-500" />
            </Button>
            <Button
              onClick={async (e) => {
                e.preventDefault();
                const _name = await getTokenName();
                console.log(_name);
              }}
              className="w-full px-3 py-3 flex justify-center gap-1 items-center hover:bg-black  transition duration-300 rounded-sm   font-semibold text-3xl max-sm:text-xl bg-black max-sm:bg-yellow-500 hover:text-yellow-500 text-white "
            >
              BALANCE{" "}
              <MoneyBagCoins className="inline transition duration-500" />
            </Button>
          </div>
        )}
      </Col>
    </FormGroup>
  );
};

export default Form;
