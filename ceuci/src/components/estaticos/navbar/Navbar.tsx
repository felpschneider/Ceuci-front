import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { addToken } from "../../../store/tokens/actions";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
      toast.info('Usuário deslogado', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="menu-color">
          <Grid container justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Link to={"/home"}>
                <Typography variant="h4" color="inherit">
                  <img
                    src="https://i.imgur.com/3dWhdta.png"
                    alt=""
                    className="logoNav cursor"
                  />
                </Typography>
              </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Home
                  </Typography>
                </Box>
              </Link>
              <Link to="/sobre" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Sobre
                  </Typography>
                </Box>
              </Link>
              <Link to="/produtos" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Produtos
                  </Typography>
                </Box>
              </Link>
              <Link to="/categorias" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Categoria
                  </Typography>
                </Box>
              </Link>
              <Link to="/cadastroCategoria" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Cadastrar Categoria
                  </Typography>
                </Box>
              </Link>
              <Box mx={1} className="cursor">
                <Typography variant="h5" color="inherit">
                  Contato
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mx={1} className="cursor mg-left" onClick={goLogout}>
                <Typography variant="h5" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default Navbar;
