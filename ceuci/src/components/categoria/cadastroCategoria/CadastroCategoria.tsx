import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function CadastroCategoria() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
  });

  useEffect(() => {
    if (token == "") {
      toast.info('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
      navigate("/login");
    }
  }, [token]);

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
    // async function findByTipo(tipo: string) {
    //     buscaId(`/categorias/tipo/${tipo}`, setCategoria, {
    //       headers: {
    //         Authorization: token,
    //       },
    //     });
    //   }

  function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("categoria " + JSON.stringify(categoria));

    if (id !== undefined) {
      console.log(categoria);
      put(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Categoria atualizado com sucesso', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } else {
      post(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      toast.success('Categoria cadastrado com sucesso', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    back();
  }

  function back() {
    navigate("/categorias");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro categoria
        </Typography>
        <TextField
          value={categoria.tipo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
          id="tipo"
          label="tipo"
          variant="outlined"
          name="tipo"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroCategoria;
