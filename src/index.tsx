import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
// o ! serve para afirmar que isso não vai retornar null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
