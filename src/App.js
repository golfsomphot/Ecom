import React from "react";
import "./App.css";

import Profile from "./Components/layout/Profile";
import Product from "./Components/layout/Product";
import Coupons from "./Components/layout/Coupons";
import Cartpage from "./Components/layout/Cartpage";
import Checkoutpage from "./Components/layout/Checkoutpage";
import Help from "./Components/layout/Help"
import Homepage from "./Components/layout/Homepage";
import Newsletter from "./Components/layout/Newsletter";
import Orderconfirm from "./Components/layout/Orderconfirm";
import Tracking from "./Components/layout/Tracking";
import Favorites from "./Components/layout/Favorites";

import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/layout/Login";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Coupons" element={<Coupons />} />
        <Route path="Cartpage" element={<Cartpage />} />
        <Route path="Checkoutpage" element={<Checkoutpage />} />
        <Route path="Help" element={<Help />} />
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Newsletter" element={<Newsletter />} />
        <Route path="Orderconfirm" element={<Orderconfirm />} />
        <Route path="Tracking" element={<Tracking />} />
        <Route path="Favorites" element={<Favorites />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
