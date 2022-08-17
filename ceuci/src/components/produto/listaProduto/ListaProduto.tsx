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
                  image={produto.foto}
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
                        size="small"
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
                        size="small"
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
      >
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
                // image={produto.foto}
                title="foto do produto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {produto.nome} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {produto.descricao} */}
                </Typography>
                <Typography variant="h6" color="initial"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} justifyContent="center">
                  <Button
                    variant="contained"
                    className="marginLeft botao"
                    size="small"
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Box>

                <Box mx={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className="botao-deletar"
                  >
                    deletar
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
                // image={produto.foto}
                title="foto do produto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {produto.nome} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {produto.descricao} */}
                </Typography>
                <Typography variant="h6" color="initial"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} justifyContent="center">
                  <Button
                    variant="contained"
                    className="marginLeft botao"
                    size="small"
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Box>

                <Box mx={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className="botao-deletar"
                  >
                    deletar
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
                // image={produto.foto}
                title="foto do produto"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {produto.nome} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {produto.descricao} */}
                </Typography>
                <Typography variant="h6" color="initial"></Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Box mx={1} justifyContent="center">
                  <Button
                    variant="contained"
                    className="marginLeft botao"
                    size="small"
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Box>

                <Box mx={1}>
                  <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className="botao-deletar"
                  >
                    deletar
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
