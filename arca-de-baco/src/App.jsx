import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login.jsx";
import Home from "./pages/home.jsx";
import Vinhos from "./pages/vinhos.jsx";
import "./App.css";
import Compra from "./pages/compra.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vinhos" element={<Vinhos />} />
        <Route path="/compra" element={<Compra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
