import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CadastroCategoria from "./components/categoria/cadastroCategoria/CadastroCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import DeletarProduto from "./components/produto/deletarProduto/DeletarProduto";
import ListaProduto from "./components/produto/listaProduto/ListaProduto";
import ProdutoPost from "./components/produto/produtoPost/ProdutoPost";
import CadastroUsuario from "./pages/cadastroUsuario/CadastroUsuario";
import Contato from "./pages/contato/Contato";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sobre from "./pages/sobre/Sobre";
import store from "./store/store";
import theme from "./Theme/Theme";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
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
              <Route
                path="/cadastroCategoria"
                element={<CadastroCategoria />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
