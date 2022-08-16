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
      height: 140,
    },
  });

  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        gap="16px"
        m="16px"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
      >
      {produto.map((produto) => (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={classes.media}
                image="https://cdn.shopify.com/s/files/1/2133/1999/products/veggiee-basket.jpg?v=1545729020"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
      ))}
      </Box>
    </>
  );
}
//   return (
//     <>
//       {produto.map((produto) => (
//         <Box m={2}>
//           <Card variant="outlined">
//             <CardContent>
//               <Typography color="textSecondary" gutterBottom>
//                 produtos
//               </Typography>
//               <Typography variant="h5" component="h2">
//                 {produto.nome}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {produto.descricao}
//               </Typography>
//               <Typography variant="body2" component="p">
//                 {produto.categoria?.tipo}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Box display="flex" justifyContent="center" mb={1.5}>
//                 <Link
//                   to={`/cadastroProduto/${produto.id}`}
//                   className="text-decorator-none"
//                 >
//                   <Box mx={1}>
//                     <Button
//                       variant="contained"
//                       className="marginLeft"
//                       size="small"
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
//                     <Button variant="contained" size="small" color="secondary">
//                       deletar
//                     </Button>
//                   </Box>
//                 </Link>
//               </Box>
//             </CardActions>
//           </Card>
//         </Box>
//       ))}
//     </>
//   );
// }

export default ListaProduto;
