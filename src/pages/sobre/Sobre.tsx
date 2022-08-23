import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";
import { Box, Grid, Typography } from "@mui/material";
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
              Mulheres na Agricultura
            </Typography>
            <Box className="sobre">
              <Box>
                <Typography
                  variant="h4"
                  color="inherit"
                  className="sobre-texto"
                >
                 Segundo o IBGE, no Brasil, 19% dos estabelecimentos rurais têm mulheres como proprietárias e produtoras formais. 
                 E de acordo com uma pesquisa da ONU, aproximadamente 14% dos  alimentos produzidos para consumo global é perdido 
                 entre a colheita e o varejo a cada ano, responsável pela emissão de até 10% das emissões de gases com efeito estufa. 
                </Typography>
              </Box>
              <Box>
                <img
                  className="sobre-imagem1"
                  src="https://i.imgur.com/OXj9oqa.jpg"
                  alt="Foto"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid alignItems="center" item xs={12}>
          <Grid>
            <Typography variant="h4" color="primary" className="sobre-titulo">
              Igualdade de Gênero
            </Typography>
            <Box className="sobre">
              <Box>
                <img
                  className="sobre-imagem2"
                  src="https://i.imgur.com/atpUhc9.png"
                  alt="Foto"
                />
              </Box>

              <Box>
                <a className="sobre-texto">
                O Objetivo de Desenvolvimento Sustentavel da ONU,
                 5.b se trata da Igualdade de Genero e sugere "um aumento de uso de tecnologias de base, 
                 em particular as tecnologias de informação e comunicação, 
                 para promover o empoderamento das mulheres".
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="sobre-caixa"
      >
        <Grid alignItems="center" item xs={12}>
          <Grid>
            <Typography variant="h4" color="primary" className="sobre-titulo">
              Ceuci
            </Typography>
            <Box className="sobre">
              <Box>
                <Typography
                  variant="h4"
                  color="inherit"
                  className="sobre-texto"
                >
                 Pensando nisso
                 sete desenvolvedores da ONG Generation criaram uma plataforma exclusiva para mulheres produtoras 
                 comercializarem produtos de hortifruti e mercearia, cultivados por elas, afim de gerar renda e visbilidade 
                 para um grupo que contribui e movimenta ativamente a agricultura. Com nome inspirado na deusa indígena protetora das moradias e da lavoura, nasce o projeto CEUCI.{" "}
                </Typography>
              </Box>
              <Box>
                <img
                  className="sobre-imagem3"
                  src="https://imgur.com/Gul7AoN.jpg"
                  alt="Foto"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
                </Grid>
    </Grid>
    </>
  );
}

export default Sobre;