import React from "react";
import "./App.css";
import Harder from "./Components/layout/Harder";
import Profile from "./Components/layout/Profile";
import Product from "./Components/layout/Product";
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/layout/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Profile />} />
        <Route path="Harder" element={<Harder />} />
        <Route path="Profile" element={<Profile />} />

        <Route path="Login" element={<Login />} />
        <Route path="Product" element={<Product />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
