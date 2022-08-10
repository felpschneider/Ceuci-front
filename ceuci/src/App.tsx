import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import Login from "./pages/login/Login";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import CadastroCategoria from "./components/categoria/cadastroCategoria/CadastroCategoria";

function App() {
  return (
    
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Home />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/deletarCategorias/:id" element={<DeletarCategoria />} />
          <Route path="/formularioCategorias/:id" element={<CadastroCategoria />} />
        </Routes>
      </div>
      <Footer />
    </Router>
     
  );
}

export default App;
