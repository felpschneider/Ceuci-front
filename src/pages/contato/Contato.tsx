import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import { GitHub } from "@material-ui/icons";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Beatriz"
                        height="200"
                        src="https://i.imgur.com/uYv4NkW.jpg"
                        title="Beatriz"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Beatriz
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedora web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/beatrizramoss/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a
                        href="https://github.com/beatrizramoss"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>

                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Felipe"
                        height="200"
                        src="https://i.imgur.com/ayvT8JB.jpg"
                        title="Felipe"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Felipe
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedor web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/felpschneider/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a
                        href="https://github.com/felpschneider"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>

                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Kamilla"
                        height="200"
                        src="https://i.imgur.com/oUi4xHv.jpg"
                        title="Kamilla"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Kamilla
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedora web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/kamilla-rocha/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a
                        href="https://github.com/Kamilla-Rocha"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>

                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Ryan"
                        height="200"
                        src="https://i.imgur.com/fITYyWt.jpg"
                        title="Ryan"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Ryan
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedor web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/leaoquara/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a href="https://github.com/leaoquara" target="_blank">
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>
              </Box>

              <Box className="social">
                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Tamires"
                        height="200"
                        src="https://i.imgur.com/TQiXa69.jpg"
                        title="Tamires"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Tamires
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedora web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/tamires-dos-santos-2ba871231/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a href="https://github.com/TamiresSss" target="_blank">
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>

                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Thabata"
                        height="200"
                        src="https://i.imgur.com/gOv4IIK.jpg"
                        title="Thabata"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Thabata
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedora web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/thabatadepaula/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a
                        href="https://github.com/thabatadepaula"
                        target="_blank"
                      >
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
                </Box>

                <Box>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Victor"
                        height="200"
                        src="https://i.imgur.com/PAnlel6.jpg"
                        title="Victor"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Victor
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Desenvolvedor web junior
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.linkedin.com/in/milhoratti/"
                        target="_blank"
                      >
                        <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                      <a href="https://github.com/milhoratti" target="_blank">
                        <GitHub style={{ fontSize: 50, color: "#000000" }} />
                      </a>
                    </CardActions>
                  </Card>
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
