import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './ProdutoPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ProdutoPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            tipo: '',
        })
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        foto: '',
        produtora: '',
        preco: 0,
        categoria: null,
    })

    useEffect(() => { 
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categorias", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProduto(id: string) {
        await buscaId(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto alterado com sucesso !');
        } else {
            post(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrada com sucesso !');
        }
        back()

    }

    function back() {
        navigate('/produtos')
    }

    return (
        <Container maxWidth="sm">
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              color="textSecondary"
              component="h1"
              align="center"
            >
              Formulário de cadastro de produtos
            </Typography>
            <TextField
                value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />

            <TextField
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
              id="descricao"
              label="descricao"
              variant="outlined"
              name="descricao"
              margin="normal"
              fullWidth
            />

            <TextField
              value={produto.produtora}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
              id="produtora"
              label="produtora"
              variant="outlined"
              name="produtora"
              margin="normal"
              fullWidth
            />

            <TextField
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
              id="preco"
              label="preco"
              variant="outlined"
              name="preco"
              margin="normal"
              fullWidth
            />

            <TextField
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
              id="foto"
              label="foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
    
            <FormControl>
              <InputLabel id="demo-simple-select-helper-label"> Categoria </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                onChange={(e) =>
                  buscaId(`/categorias/${e.target.value}`, setCategoria, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
              >
                {categorias.map((categoria) => (
                  <MenuItem value={categoria.id}>{categoria.tipo}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Escolha a categoria do produto</FormHelperText>
              <Button type="submit" variant="contained" color="primary">
                Finalizar
              </Button>
            </FormControl>
          </form>
        </Container>
      );
    }
export default ProdutoPost;