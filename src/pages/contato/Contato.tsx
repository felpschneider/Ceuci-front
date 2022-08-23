import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";
import { Box, Grid } from "@mui/material";
import "./Contato.css";

function Contato() {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="contato-caixa"
      >
        <Grid alignItems="center" item xs={12}>
          <Grid alignItems="center" item xs={12}>
            <Box>
              <h1 className="contato-titulo">Se conecte com a gente !</h1>
            </Box>
          </Grid>

          <Grid direction="row" alignItems="center">
            <Grid item xs={12}>
              <Box className="social">
              <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/uYv4NkW.jpg" alt="Beatriz" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Beatriz</h1>
                      <h3 className = "card-texto">Desenvolvedora web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/beatrizramoss/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/beatrizramoss"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>
                
                <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/UdO9hCz.jpg" alt="Felipe" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Felipe</h1>
                      <h3 className = "card-texto">Desenvolvedor web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/felpschneider/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/felpschneider"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>

                <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/oUi4xHv.jpg" alt="Kamilla" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Kamilla</h1>
                      <h3 className = "card-texto">Desenvolvedora web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/kamilla-rocha/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/Kamilla-Rocha"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>

                <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/rthOYt4.jpg" alt="Ryan" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Ryan</h1>
                      <h3 className = "card-texto">Desenvolvedor web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/leaoquara/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/leaoquara"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>
              </Box>

              <Box className="social">
              <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/TQiXa69.jpg" alt="Tamires" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Tamires</h1>
                      <h3 className = "card-texto">Desenvolvedora web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/tamires-dos-santos-2ba871231/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/TamiresSss"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>

                <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/gOv4IIK.jpg" alt="Thabata" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Thabata</h1>
                      <h3 className = "card-texto">Desenvolvedora web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/thabatadepaula/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://github.com/thabatadepaula"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>

                <Box>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src="https://i.imgur.com/PAnlel6.jpg" alt="Victor" className="card-foto"/>
                    </div>
                      <div className="flip-card-back">
                      <h1 className = "card-texto">Victor</h1>
                      <h3 className = "card-texto">Desenvolvedor web junior</h3>
                    <div className = "social-icon">
                      <a
                        href="https://www.linkedin.com/in/milhoratti/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 55, color: "#000000" }} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/milhoratti/"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 45, color: "#000000" }} />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Contato;
