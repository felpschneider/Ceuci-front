import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { Grid, Box, Typography } from "@mui/material";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
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
              <a href="brasil.generation.org" target="_blank" rel="noopener noreferrer">
                <img src="https://i.imgur.com/CR6ivB0.png" alt="" className="generation"/>
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
              Ceuci© 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a
                target="_blank"
                href="https://brasil.generation.org"
                rel="noopener noreferrer"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  style={{ color: "white" }}
                  align="center"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
