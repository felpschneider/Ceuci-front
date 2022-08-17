import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";
import Home from "./pages/home/Home";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import Login from "./pages/login/Login";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import CadastroCategoria from "./components/categoria/cadastroCategoria/CadastroCategoria";
import ProdutoPost from "./components/produto/produtoPost/ProdutoPost";
import DeletarProduto from "./components/produto/deletarProduto/DeletarProduto";
import ListaProduto from "./components/produto/listaProduto/ListaProduto";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contato from "./pages/contato/Contato";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/produtos" element={<ListaProduto />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastroProduto" element={<ProdutoPost />} />
            <Route path="/cadastroProduto/:id" element={<ProdutoPost />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route
              path="/deletarCategorias/:id"
              element={<DeletarCategoria />}
            />
            <Route
              path="/cadastroCategoria/:id"
              element={<CadastroCategoria />}
            />
            <Route path="/cadastroCategoria" element={<CadastroCategoria />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
