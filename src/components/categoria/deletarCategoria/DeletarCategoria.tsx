import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/material";
import "./DeletarCategoria.css";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";
import Categoria from "../../../models/Categoria";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function DeletarCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>();

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }
  function sim() {
    navigate("/categorias");
    deleteId(`/categorias/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Categoria deletada com sucesso!", {
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
    navigate("/categorias");
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
              <Typography style={{ color: "black" }} className="titulo">
                Deseja deletar a seguinte categoria?
              </Typography>
              <Typography style={{ color: "#8da026" }} className="texto-ods">
                {categoria?.tipo}
              </Typography>
            </Box>
          </CardContent>
          <CardActions className="centralize">
            <Box>
              <Button
                onClick={sim}
                variant="contained"
                className="marginLeft corBotao"
                size="large"
                color="primary"
              >
                Sim
              </Button>
            </Box>
            <Box mx={2}>
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
export default DeletarCategoria;
