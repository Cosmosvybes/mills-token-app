import "./App.css";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Landing from "./Components/Home/Landing";
function App() {
  return (
    <>
      <ToastContainer />
      <Landing />
    </>
  );
}

export default App;
