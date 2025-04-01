import { useAccount } from "wagmi";
const Button = () => {
  const { isConnected } = useAccount();
  return <>{isConnected ? <w3m-acccount-button /> : <w3m-connect-button />}</>;
};

export default Button;
