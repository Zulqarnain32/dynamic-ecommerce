import React from "react";
import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import("./App.css");

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/add-product"
            element={
              window.localStorage.length > 0 ? <AddProduct /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
