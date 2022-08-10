import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className="menu-color">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Ceuci
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-end">
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
            <Link to = "/categorias" className="text-decorator-none">
              <Box mx={1} className='cursor' >
                  <Typography variant="h6" color="inherit">
                  Categoria
                  </Typography>
              </Box> 
              </Link>
      
              <Link to = "/formularioCategoria" className="text-decorator-none">
              <Box mx={1} className='cursor' >
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
            <Link to="/login" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Entrar
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
