import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './AtualizaProduto.css';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import Produto from '../../../models/Produto';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from "react-toastify";
import { Grid } from '@mui/material';

interface MyProps{
    productId:any;
}

function AtualizaProduto(props: MyProps) {

    let navigate = useNavigate();
    const id = props.productId;//useParams<{ id: string }>();

    const [idTemp, setIdTemp] = useState('');
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

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

    function back() {
        navigate('/produtos')
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        })

    }


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

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Produto alterado com sucesso!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Produto não encontrado', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <Grid container maxWidth="50vw" maxHeight="100vh" className="bg-cadastrar-produto">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center"
                >
                    Atualizar produto
                </Typography>
                <TextField
                    value={produto.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    name="nome"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={produto.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="descricao"
                    label="Descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={produto.produtora}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="produtora"
                    label="Produtora"
                    variant="outlined"
                    name="produtora"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={produto.preco}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="preco"
                    label="Preço"
                    variant="outlined"
                    name="preco"
                    margin="normal"
                    fullWidth
                />

                <TextField
                    value={produto.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                    id="foto"
                    label="Foto"
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
        </Grid>
    );
}
export default AtualizaProduto;