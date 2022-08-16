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

  var homeComponent;

  if (token != "") {
    homeComponent = (
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

          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            marginTop={1}
          >
            <Box marginRight={1}>
              <ModalProduto />
            </Box>

            <Box marginRight={1} justifyContent="center" marginTop={1}>
              <Link to={"/produtos"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Ver Produtos
                </Button>
              </Link>
            </Box>
            <Box marginTop={1}>
              <Link to={"/cadastroCategoria"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Nova categoria
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Carrossel />
        </Grid>
        <Grid xs={12} className="produtos"></Grid>
      </Grid>
    );
  } else {
    homeComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className="bg-img" height="100vh"></Box>
        </Grid>

        <Grid item xs={6}>
          <Box paddingX={20} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box>
              <img
                src="https://i.imgur.com/hSrWDog.png"
                alt="Logo Ceuci"
                className="margens-ceuci"
              />
            </Box>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              O projeto Ceuci foi feito baseado na ODS 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum sunt illo possimus neque voluptatibus laborum dignissimos saepe nam quos odit inventore? Quaerat suscipit iure sapiente earum esse incidunt dolor.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            marginTop="20px"
          >
            <Box justifyContent="center">
              <Link to={"/produtos"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Comprar
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={"/login"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Sou produtora
                </Button>
              </Link>
            </Box>
          </Box>
          
        </Grid>
        {/* section 2: */}
        

        <Grid item xs={6}>
          <Box paddingX={20} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box>
              ODS 5
              <img
                src="https://i.imgur.com/hSrWDog.png"
                alt="Logo Ceuci"
                className="margens-ceuci"
              />
            </Box>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              O projeto Ceuci foi feito baseado na ODS 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorum sunt illo possimus neque voluptatibus laborum dignissimos saepe nam quos odit inventore? Quaerat suscipit iure sapiente earum esse incidunt dolor.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            marginTop="20px"
          >
            <Box justifyContent="center">
              <Link to={"/produtos"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Comprar
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={"/login"} className="text-decorator-none">
                <Button variant="outlined" className="botao">
                  Sou produtora
                </Button>
              </Link>
            </Box>
          </Box>
          
        </Grid>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className="ods-img" height="100vh"></Box>
        </Grid>
      </Grid>
    );
  }

  return <>{homeComponent}</>;
}

export default Home;
