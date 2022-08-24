import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarouselProduto from "react-elastic-carousel";
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
import makeStyles from "@material-ui/core/styles/makeStyles";
import ModalAtualizar from "../modalAtualizar/ModalAtualizar";

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
      maxWidth: 450,
    },
    media: {
      height: 250,
    },
  });

  const classes = useStyles();

  var produtoComponent;

  if (token !== "") {
    produtoComponent = (
      <Grid
        className="topo titulo"
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CarouselProduto isRTL={false} itemsToShow={2} pagination={false}>
          {produto.map((produto) => (
            <>
              <Box
                display="flex"
                gap="30px"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                flexWrap="wrap"
              ></Box>
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
                <CardActions className="centralize">
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Box mx={1} justifyContent="center">
                      <ModalAtualizar productId={produto.id} />
                    </Box>

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
                          Deletar
                        </Button>
                      </Box>
                    </Link>
                    <Box
                      display="flex"
                      flexWrap="nowrap"
                      flexDirection="column"
                      justifyContent="center"
                      mx={1}
                    >
                      <Typography variant="h6">R${produto.preco}</Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </>
          ))}
        </CarouselProduto>
      </Grid>
    );
  } else {
    produtoComponent = (
      <Grid
        className="topo titulo"
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CarouselProduto isRTL={false} itemsToShow={2} pagination={false}>
          {produto.map((produto) => (
            <>
              <Box
                display="flex"
                gap="30px"
                justifyContent="center"
                alignItems="center"
              ></Box>
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
                <CardActions className="centralize">
                  <Box display="flex" justifyContent="center" mb={1.5}>
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="medium"
                        className="botao"
                      >
                        Comprar
                      </Button>
                    </Box>

                    <Box
                      display="flex"
                      flexWrap="nowrap"
                      flexDirection="column"
                      justifyContent="center"
                      mx={1}
                    >
                      <Typography variant="h6">R${produto.preco}</Typography>
                      <Typography fontSize="1rem" flexWrap="nowrap">
                        Frete Grátis!
                      </Typography>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </>
          ))}
        </CarouselProduto>
      </Grid>
    );
  }

  return (
    <>
      <h1 className="texto-ods">Produtos</h1>
      {produtoComponent}
    </>
  );
}

export default ListaProduto;
