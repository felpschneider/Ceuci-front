import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import { busca } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./ListaProduto.css";

async function getProduto(
  setProduto: React.Dispatch<React.SetStateAction<Produto[]>>,
  token: string
) {
  await busca("/produtos", setProduto, {
    headers: {
      Authorization: token,
    },
  });
}

function ListaProduto() {
  const [produto, setProduto] = useState<Produto[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    getProduto(setProduto, token);
  }, [produto.length]);

  // if (token !== "") {
  //   produtoComponent = (
  //     <Grid
  //       container
  //       display="flex"
  //       justifyContent="center"
  //       alignItems="center"
  //     >
  //       <Box
  //         display="flex"
  //         gap="30px"
  //         justifyContent="center"
  //         alignItems="center"
  //         flexWrap="wrap"
  //       >
  //         {produto.map((produto) => (
  //           // <Card className={classes.root}>
  //           <Card>
  //             <CardActionArea>
  //               {/* <CardMedia
  //                 component="img"
  //                 // className={classes.media}
  //                 src={produto.foto}
  //                 title="foto do produto"
  //               /> */}
  //               <CardContent>
  //                 <Typography gutterBottom variant="h5" component="h2">
  //                   {produto.nome}
  //                 </Typography>
  //                 <Typography
  //                   variant="body2"
  //                   color="textSecondary"
  //                   component="p"
  //                 >
  //                   {produto.descricao}
  //                 </Typography>
  //                 <Typography variant="h6" color="initial"></Typography>
  //               </CardContent>
  //             </CardActionArea>
  //             <CardActions>
  //               <Box display="flex" justifyContent="center" mb={1.5}>
  //                 <Link
  //                   to={`/cadastroProduto/${produto.id}`}
  //                   className="text-decorator-none"
  //                 >
  //                   <Box mx={1} justifyContent="center">
  //                     <Button
  //                       variant="contained"
  //                       className="marginLeft botao"
  //                       size="large"
  //                       color="primary"
  //                     >
  //                       atualizar
  //                     </Button>
  //                   </Box>
  //                 </Link>
  //                 <Link
  //                   to={`/deletarProduto/${produto.id}`}
  //                   className="text-decorator-none"
  //                 >
  //                   <Box mx={1}>
  //                     <Button
  //                       variant="contained"
  //                       size="large"
  //                       color="secondary"
  //                       className="botao-deletar"
  //                     >
  //                       deletar
  //                     </Button>
  //                   </Box>
  //                 </Link>
  //               </Box>
  //             </CardActions>
  //           </Card>
  //         ))}
  //       </Box>
  //     </Grid>
  //   );
  // }

  return (
    <Grid
      container
      spacing={{ sm: 1, md: 2 }}
      alignItems="center"
      marginY="auto"
      sx={{ maxWidth: "100%", height: "90vh" }}
    >
      <Grid item xs={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://i.imgur.com/lOwWsFs.png"
            alt="foto do produto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cesta Gaia
            </Typography>
            <Typography variant="body2" component="p">
              Cesta pequena com diversos tipos de hortaliças.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="large" color="primary" variant="contained">
              Comprar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://i.imgur.com/QMRdWqY.png"
            alt="foto do produto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cesta Freya
            </Typography>
            <Typography variant="body2" component="p">
              Cesta média com diversos tipos de hortaliças.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="large" color="primary" variant="contained">
              Comprar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="180"
            image="https://i.imgur.com/93JbH4U.png"
            alt="foto do produto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cesta Ceuci
              {/* {produto.nome} */}
            </Typography>
            <Typography variant="body2" component="p">
              Cesta grande com diversos tipos de hortaliças.
              {/* {produto.descricao} */}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button size="large" color="primary" variant="contained">
              Comprar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ListaProduto;
