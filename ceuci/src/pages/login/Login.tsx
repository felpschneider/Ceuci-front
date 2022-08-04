import React, { useState, useEffect, ChangeEvent } from 'react';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import {Link, useNavigate} from 'react-router-dom'
import {Box} from '@mui/material';
import {login} from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';

function Login(){

    let navigate = useNavigate();
        
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            token: ''
        })

        useEffect(() => {
            if(token !== "")
            { navigate('/home') }
            }, [token])

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }


        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            try{
                await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!');
            }catch(error){
                alert('Dados do usuário inconsistentes. Erro ao logar!'); 
        }
    }

    return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className="bg-color">
        <Grid alignItems='center' xs={6} >
            <Box paddingX={20} >
                <form onSubmit={onSubmit}>
                    <Typography className='textos1' variant= 'h3' gutterBottom color = 'textPrimary' align = 'center'  > Entrar </Typography>
                    <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id = 'usuario' label= 'Usuário' variant='outlined' name = 'usuario' margin= 'normal' fullWidth></TextField>
                     <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id = 'senha' label= 'Senha' variant='outlined' name = 'senha' margin= 'normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign = 'center'>
                            <Button type='submit' variant='contained' color='primary' className="bg-btn">
                                Logar
                            </Button>
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                    </Box>
                        <Typography className='textos1' variant='subtitle1' gutterBottom align='center'  >Cadastre-se</Typography>
                </Box>
                
            </Box>
        </Grid>
        <Grid xs={6} className='imag'>
        </Grid>
    </Grid>
    );

}

export default Login;