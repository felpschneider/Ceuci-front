import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";
import Produto from "../../../models/Produto";
import "./DeletarProduto.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarProduto() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [produto, setProduto] = useState<Produto>();

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/produtos");
    deleteId(`/produtos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Produto deletado com sucesso!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  function nao() {
    navigate("/produtos");
  }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
            >
              <Typography color="black" className="titulo">
                Deseja deletar o seguinte produto?
              </Typography>
              <Typography color="#8da026" className="texto-ods">
                {produto?.nome}
              </Typography>
            </Box>
          </CardContent>
          <CardActions className="centralize">
            <Box>
              <Button
                onClick={sim}
                variant="contained"
                size="large"
                color="primary"
                className="corBotao"
              >
                Sim
              </Button>
            </Box>
            <Box>
              <Button
                onClick={nao}
                variant="contained"
                size="large"
                color="secondary"
                className="corBotao01"
              >
                Não
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarProduto;
