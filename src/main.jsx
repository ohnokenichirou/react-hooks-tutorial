import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const shincodeinfo = {
  name: "shincode",
  age: 24,
};

const ShinCodeContext = createContext(shincodeinfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShinCodeContext.Provider value={shincodeinfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShinCodeContext.Provider>
);

export default ShinCodeContext;
