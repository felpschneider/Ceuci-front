import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import { Box, Grid } from "@mui/material";
import './Sobre.css';

function Sobre() {
    return (
        <>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          className="sobre-caixa"
        >
                <Grid alignItems="center" item xs={12}>
                    <Grid>
                    <h6 className='sobre-titulo'>ODS</h6>
                    <Box className='sobre'>
                      <Box className='sobre-texto'>   
                      <a>A ODS foi essencial para conseguirmos construir a ideia base do nosso projeto, com base nela nós conseguimos construir o nosso projeto, que ira ajudar diversar produtoras a vender seus produtos.</a>
                      </Box>
                      <Box>
                        <img className='sobre-imagem1' src="https://i.imgur.com/atpUhc9.png" alt="Foto"/>
                      </Box>    
                    </Box>
                </Grid>
            </Grid>

            <Grid alignItems="center" item xs={12}>
                    <Grid>
                    <h6 className='sobre-titulo'>Sobre nós</h6>
                    <Box className='sobre'>
                      <Box>
                        <img className='sobre-imagem2' src="https://i.imgur.com/OXj9oqa.jpg" alt="Foto"/>
                      </Box> 

                      <Box>   
                      <a className='sobre-texto'>Ceuci é um projeto que busca ajudar as pequenas produtoras familiares que não tem a divulgação que merecem pelo seu trabalho, fazendo com que possam ter uma renda maior de forma eficaz. </a>
                      </Box>
       
                    </Box>
                </Grid>
            </Grid>

        </Grid>

      </>
    );
}

export default Sobre;