import React from 'react';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import './Login.css';
import {Link} from 'react-router-dom'
import {Box} from '@mui/material';

function Login(){
    return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className="bg-color">
        <Grid alignItems='center' xs={6} >
            <Box paddingX={20} >
                <form>
                    <Typography className='textos1' variant= 'h3' gutterBottom color = 'textPrimary' align = 'center'  > Entrar </Typography>
                    <TextField id = 'usuario' label= 'Usuário' variant='outlined' name = 'usuario' margin= 'normal' fullWidth></TextField>
                     <TextField id = 'senha' label= 'Senha' variant='outlined' name = 'senha' margin= 'normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign = 'center'>
                        <Link to='/home'className='text-decorator-none'>
                            <Button type='submit' variant='contained' color='primary' className="bg-btn">
                                Logar
                            </Button>
                        </Link>
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