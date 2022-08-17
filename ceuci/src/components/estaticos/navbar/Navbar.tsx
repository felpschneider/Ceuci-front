import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Button } from "@mui/material";
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
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    navigate("/home");
  }

  var navbarComponent;

  if (token !== "") {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="menu-color">
          <Grid container justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Link to={"/home"}>
                <Typography variant="h4" color="inherit">
                  <div className="pointer">
                    <img
                      src="https://i.imgur.com/hSrWDog.png"
                      alt="Logo escrita Ceuci"
                      className="ceuci"
                    />
                    <img
                      src="https://i.imgur.com/3dWhdta.png"
                      alt="Logo Ceuci"
                      className="logoNav"
                    />
                  </div>
                </Typography>
              </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Início
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
              <Link to="/contato" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h5" color="inherit">
                  Contato
                  </Typography>
                </Box>
                </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box mx={1} className="cursor flex-display" onClick={goLogout}>
                <Typography variant="h5" color="inherit">
                  Sair
                </Typography>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1286/1286853.png"
                  alt=""
                  className="icone-sair"
                />
              </Box>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  } else {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="menu-color">
          <Grid container justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Link to={"/home"}>
                <Typography variant="h4" color="inherit">
                  <div className="pointer">
                    <img
                      src="https://i.imgur.com/hSrWDog.png"
                      alt=""
                      className="ceuci"
                    />
                    <img
                      src="https://i.imgur.com/3dWhdta.png"
                      alt=""
                      className="logoNav"
                    />
                  </div>
                </Typography>
              </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link to="/home" className="text-decorator-none">
                <Box mx={1} className="cursor mg-between">
                  <Typography variant="h5" color="inherit">
                    Início
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
              <Link to="/contato" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h5" color="inherit">
                  Contato
                  </Typography>
                </Box>
                </Link>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link to="/login" className="text-decorator-none">
                <Box mx={1} className="cursor flex-display">
                  <Typography variant="h5" color="inherit">
                    Entrar
                  </Typography>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/4929/premium/4929629.png?token=exp=1660683734~hmac=3c01980673a03c3c382457a528286ae3"
                    alt=""
                    className="icone-sair"
                  />
                </Box>
              </Link>
              <Box className="">
                <Button variant="contained" className="cursor flex-display text-decorator-none carrinho-cor">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2543/premium/2543378.png?token=exp=1660741737~hmac=d0e2ae800bb22ae5304b54cb06427416"
                    alt="Carrinho logo"
                    className="carrinho"
                  />
                </Button>
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
