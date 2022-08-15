import React, { useEffect } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import "./Home.css";
import ModalProduto from "../../components/produto/modalProduto/ModalProduto";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import Carrossel from "../../components/carrossel/Carrossel";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem-vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              ODS/PROJETO
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalProduto />
            </Box>

            <Box>
              <Link to={"/produtos"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Ver Produtos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Carrossel/>
        </Grid>
        <Grid xs={12} className="produtos"></Grid>
      </Grid>
    </>
  );
}

export default Home;
