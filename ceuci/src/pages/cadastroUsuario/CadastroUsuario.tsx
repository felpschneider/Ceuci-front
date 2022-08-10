import React, {useState, useEffect, ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css'

function CadastroUsuario() {

  let history = useNavigate()

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  const [user, setUser] = useState<User>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: ""
  })

  const [userResult, setUserResult] = useState<User>({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: ""
  })

  useEffect(() => {
      if (userResult.id !== 0) {
          history('/login')
      }
  }, [userResult])


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
      setConfirmarSenha(e.target.value)
  }

  async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()

      
      if (confirmarSenha === user.senha && user.senha.length >= 8) {

        
        try {
          await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
          alert("Usuário cadastrado com sucesso")

         
          } catch (error) {
              console.log(`Error: ${error}`)
              
              
              alert("Usuário já existente")
          }

      } else {
          alert("Insira no miníno 8 caracteres na senha.")    

          setUser({ ...user, senha: "" })
          setConfirmarSenha("")           
      }
  }

  return (
   <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='img2'> </Grid>
        <Grid item xs={6} alignItems='center'> 
        <Box paddingX={20}>
                 <form onSubmit={cadastrar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className="cor" id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className="cor" id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} className="cor" id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />   
                        <TextField value={confirmarSenha} onChange={(e:ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} className="cor" id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center' >
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className="bg-botao2">
                                    Cancelar
                                </Button>
                            </Link>
                           
                                <Button type='submit' variant='contained' color='primary' className="bg-botao3">
                                    Cadastrar
                                </Button>
                          
                        </Box>
                    </form>
        </Box>
        </Grid>

   </Grid>
  )
}



export default CadastroUsuario