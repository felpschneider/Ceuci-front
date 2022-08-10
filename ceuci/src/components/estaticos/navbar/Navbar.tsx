import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    alert("Usuário deslogado");
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent=
    <AppBar position="static">
      <Toolbar variant="dense" className="menu-color">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            <Link to={"/home"}>
              <img
                src="https://i.imgur.com/3dWhdta.png"
                alt=""
                className="logoNav"
              />
            </Link>
          </Typography>
        </Box>

        <Box display="flex">
          <Link to="/home" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Link>
          <Link to="/sobre" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Sobre
              </Typography>
            </Box>
          </Link>
          <Link to="/produtos" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Produtos
              </Typography>
            </Box>
          </Link>
          <Link to="/categorias" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Categoria
              </Typography>
            </Box>
          </Link>

          <Link to="/cadastroCategoria" className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Categoria
              </Typography>
            </Box>
          </Link>
          <Box mx={1} className="cursor">
            <Typography variant="h6" color="inherit">
              Contato
            </Typography>
          </Box>
          <Box mx={1} className="cursor" onClick={goLogout}>
            <Typography variant="h6" color="inherit">
              logout
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>;
  }
  return (
    <>
    {navbarComponent}
    </>
  );
}

export default Navbar;
