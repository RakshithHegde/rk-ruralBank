import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
