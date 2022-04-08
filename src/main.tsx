import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./pages/Catalogue";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Cart from "./pages/Cart";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalogue />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/panier" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
