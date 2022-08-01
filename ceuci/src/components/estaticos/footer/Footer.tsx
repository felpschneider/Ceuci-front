import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub"
import { Grid, Box, Typography } from "@mui/material";
import './Footer.css'
    
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
          <Box className="box1"
            
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                justifyContent="flex-start"
                gutterBottom
                className='textos'
              >
                Siga-nos nas redes sociais!
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
              <a
                href="https://www.instagram.com/generationbrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className='redes' />
              </a>
              <a
                href="https://github.com/felpschneider/Ceuci-front"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className='git' />
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className='redes' />
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
                © 2020 Copyright:
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