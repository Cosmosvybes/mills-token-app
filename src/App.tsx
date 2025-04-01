import "./App.css";

import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Web3ModalProvider } from "./Components/Home/web3/Provider";
import Landing from "./Components/Home/Landing";
function App() {
  return (
    <>
      <ToastContainer />
      <Web3ModalProvider children={<Landing />} />
    </>
  );
}

export default App;
