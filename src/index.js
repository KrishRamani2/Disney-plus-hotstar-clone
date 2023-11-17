import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
 
  </React.StrictMode>
);












// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom"
// import App from "./App";
// import './index.css'
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <>
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   </>,
//   rootElement
// );