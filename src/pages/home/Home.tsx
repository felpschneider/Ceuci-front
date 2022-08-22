import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import "./Home.css";
import ModalProduto from "../../components/produto/modalProduto/ModalProduto";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import ModalCategoria from "../../components/categoria/modalCategoria/ModalCategoria";
import TextField from "@material-ui/core/TextField/TextField";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var homeComponent;

  if (token != "") {
    homeComponent = (
      <Grid container className="bg-img-produtora">
        <Grid
          item
          xs={6}
          height="100vh"
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Box
            paddingY={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h3"
              color="textPrimary"
              component="h3"
              className="titulo"
            >
              Seja bem-vinda, produtora!
            </Typography>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h5"
              className="subtitulo"
            >
              Esse espaço foi criado para você.
            </Typography>

            <Box marginTop={1}>
              <ModalCategoria />
            </Box>

            <Box marginTop={1}>
              <ModalProduto />
            </Box>

            <Box marginTop={1} marginBottom={13}>
              <Link to={"/produtos"} className="text-decorator-none">
                <Button variant="contained" className="botao" size="large">
                  Ver Produtos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
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
          <Box
            paddingX={14}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
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
              O e-<span className="titulo-diferente">c</span>omm
              <span className="titulo-diferente">e</span>rce das m
              <span className="titulo-diferente">u</span>lhe
              <span className="titulo-diferente">r</span>es pr
              <span className="titulo-diferente">o</span>dutora
              <span className="titulo-diferente">s</span>.
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
                <Button variant="outlined" className="botao" size="large">
                  Comprar
                </Button>
              </Link>
            </Box>
            <Box>
              <Link to={"/login"} className="text-decorator-none">
                <Button variant="outlined" className="botao" size="large">
                  Sou produtora
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        {/* section 2: */}

        <Grid item xs={6}>
          <Box
            paddingX={14}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box className="ods-logo">
              <span className="ods-logo font-color-ods-alt">O</span>
              <span className="ods-logo">DS</span>
              <span className="ods-logo font-color-ods-alt"> 5</span>
            </Box>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h5"
              align="center"
              className="texto-ods"
            >
              A <span className="font-color-ods-alt">igualdade</span> de gênero
              faz parte dos objetivos de desenvolvimento{" "}
              <span className="font-color-ods-alt">sustentável</span> promovidos
              pela ONU que devem ser{" "}
              <span className="font-color-ods-alt">alcançados</span> até 2030.
              Nesse sentido, <span className="font-color-ods">C</span>euci é uma
              iniciativa para{" "}
              <span className="font-color-ods-alt">conquistar</span>{" "}
              visibilidade para{" "}
              <span className="font-color-ods-alt">mulheres</span> produtoras
              brasileiras.
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            marginTop="20px"
          >
            <Box>
              <Link to={"/sobre"} className="text-decorator-none">
                <Button
                  variant="outlined"
                  className="botao-variant1"
                  size="large"
                >
                  Sobre
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} className="ods-img" height="100vh"></Box>
        </Grid>

        {/* section 3: */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="caixa"
        >
          <Grid
            item
            xs={12}
            height="50vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box >
              <Typography
                variant="h5"
                color="textPrimary"
                component="h5"
                align="center"
                className="titulo mg-bot"
              >
                Quer receber novidades? Inscreva-se!
              </Typography>

              <TextField
                id="inscrever"
                label="Digite seu e-mail"
                variant="outlined"
                fullWidth
                size="medium"
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              marginTop="20px"
            >
              <Box>
                <Link to={"/contato"} className="text-decorator-none">
                  <Button variant="outlined" className="botao" size="large">
                    Enviar
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  return <>{homeComponent}</>;
}

export default Home;