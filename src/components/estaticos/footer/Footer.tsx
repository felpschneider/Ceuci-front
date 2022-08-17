import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { Grid, Box, Typography } from "@mui/material";
import "./Footer.css";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent =
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box
          className="box1"
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="instagram" />
            </a>
            <a
              href="https://github.com/felpschneider/Ceuci-front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="github" />
            </a>
            <a
              href="https://www.linkedin.com/school/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="linkedin" />
            </a>
            <a
              href="brasil.generation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/CR6ivB0.png"
                alt=""
                className="generation"
              />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Ceuci© 2022 | Todos os direitos reservados
            </Typography>
            </Box>
            </Box>
      </Grid>
    </Grid>;
  } else {
    footerComponent =
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={12}>
        <Box
          className="box1"
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" alignItems="center" justifyContent="flex-end">
            <a
              href="https://www.instagram.com/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="instagram" />
            </a>
            <a
              href="https://github.com/felpschneider/Ceuci-front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="github" />
            </a>
            <a
              href="https://www.linkedin.com/school/generationbrasil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="linkedin" />
            </a>
            <a
              href="brasil.generation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.imgur.com/CR6ivB0.png"
                alt=""
                className="generation"
              />
            </a>
          </Box>
        </Box>
        <Box className="box2">
          <Box paddingTop={1}>
            <Typography
              variant="subtitle2"
              align="center"
              gutterBottom
              style={{ color: "white" }}
            >
              Ceuci© 2022 | Todos os direitos reservados
            </Typography>
            </Box>
            </Box>
      </Grid>
    </Grid>;
  }
  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
