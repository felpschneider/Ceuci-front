import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
  Grid,
} from "@mui/material";
import "./ListaProduto.css";
import Produto from "../../../models/Produto";
import { busca } from "../../../services/Service";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import makeStyles from "@material-ui/core/styles/makeStyles";

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  async function getProduto() {
    await busca("/produtos", setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getProduto();
  }, [produto.length]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 180,
    },
  });

  const classes = useStyles();

  var produtoComponent;

  if (token !== "") {
    produtoComponent = (
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          gap="30px"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          {produto.map((produto) => (
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  src={produto.foto}
                  title="foto do produto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {produto.nome}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {produto.descricao}
                  </Typography>
                  <Typography variant="h6" color="initial"></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/cadastroProduto/${produto.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1} justifyContent="center">
                      <Button
                        variant="contained"
                        className="marginLeft botao"
                        size="large"
                        color="primary"
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarProduto/${produto.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        className="botao-deletar"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Grid>
    );
  } else {
    produtoComponent = (
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Box
            display="flex"
            gap="30px"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            flexWrap="wrap"
          >
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.media}
                  src="https://i.imgur.com/lOwWsFs.png"
                  title="foto do produto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cesta Gaia
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Cesta pequena com diversos tipos de hortaliças.
                  </Typography>
                  <Typography variant="h6" color="initial"></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Box mx={1} justifyContent="center">
                    <Button
                      variant="contained"
                      className="marginLeft botao-comprar"
                      size="large"
                      color="primary"
                    >
                      Comprar
                    </Button>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Box>
        </Grid>
        <Box
          display="flex"
          gap="30px"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                src="https://i.imgur.com/QMRdWqY.png"
                title="foto do produto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cesta Freya
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cesta média com diversos tipos de hortaliças.
                </Typography>
                <Typography variant="h6" color="initial"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} justifyContent="center">
                  <Button
                    variant="contained"
                    className="marginLeft botao-comprar"
                    size="large"
                    color="primary"
                  >
                    Comprar
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
        <Box
          display="flex"
          gap="30px"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                src="https://i.imgur.com/93JbH4U.png"
                title="foto do produto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cesta Ceuci
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cesta grande com diversos tipos de hortaliças.
                </Typography>
                <Typography variant="h6" color="initial"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} justifyContent="center">
                  <Button
                    variant="contained"
                    className="marginLeft botao-comprar"
                    size="large"
                    color="primary"
                  >
                    Comprar
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    );
  }
  return <>{produtoComponent}</>;
}

export default ListaProduto;
