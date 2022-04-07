import React from "react";
import ReactDOM from "react-dom";
import Catalogue from "./pages/Catalogue";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Catalogue />
  </React.StrictMode>,
  document.getElementById("root")
);
