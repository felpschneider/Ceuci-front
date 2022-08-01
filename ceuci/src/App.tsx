import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
     
  );
}

export default App;
