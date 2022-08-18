import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
// import GitHub from "@mui/icons-material/Github";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="sobre-caixa"
      >
        <Grid alignItems="center" item xs={12}>
          <Grid>
            <Typography variant="h4" color="primary" className="sobre-titulo">
              ODS
            </Typography>
            <Box className="sobre">
              <Box>
                <Typography
                  variant="h4"
                  color="inherit"
                  className="sobre-texto"
                >
                  A ODS foi essencial para conseguirmos construir a ideia base
                  do nosso projeto, com base nela nós conseguimos construir o
                  nosso projeto, que ira ajudar diversar produtoras a vender
                  seus produtos.
                </Typography>
              </Box>
              <Box>
                <img
                  className="sobre-imagem1"
                  src="https://i.imgur.com/atpUhc9.png"
                  alt="Foto"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid alignItems="center" item xs={12}>
          <Grid>
            <Typography variant="h4" color="primary" className="sobre-titulo">
              Sobre nós
            </Typography>
            <Box className="sobre">
              <Box>
                <img
                  className="sobre-imagem2"
                  src="https://i.imgur.com/OXj9oqa.jpg"
                  alt="Foto"
                />
              </Box>

              <Box>
                <a className="sobre-texto">
                  Ceuci é um projeto que busca ajudar as pequenas produtoras
                  familiares que não tem a divulgação que merecem pelo seu
                  trabalho, fazendo com que possam ter uma renda maior de forma
                  eficaz.{" "}
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Sobre;
