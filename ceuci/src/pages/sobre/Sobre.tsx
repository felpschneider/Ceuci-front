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
                    <h1 className='sobre-titulo'>Sobre nós</h1>
                    <Box className='sobre'>
                      <Box>   
                      <a className='sobre-texto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta aperiam asperiores quae in ipsam animi nihil eius blanditiis nam quibusdam dolore soluta, rerum placeat atque recusandae a quidem eveniet.</a>
                      <a className='sobre-texto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta aperiam asperiores quae in ipsam animi nihil eius blanditiis nam quibusdam dolore soluta, rerum placeat atque recusandae a quidem eveniet.</a>
                      </Box>
                      <Box>
                        <img className='sobre-imagem' src="" alt="Foto"/>
                      </Box>    
                    </Box>
                    </Grid>

                    <Grid alignItems="center" item xs={12}>
                    <Box>
                        <h1 className='sobre-titulo'>Se conecte com a gente !</h1>
                    </Box>
                    </Grid>

                    <Grid direction="row" alignItems="center" >

                        <Grid item xs={12}>

                        <Box className='social'>

                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/uYv4NkW.jpg" alt=""/>
                            <h6 className='sobre-nome'>Beatriz</h6>
                            <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/beatrizramoss/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/beatrizramoss" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                          </Box>

                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/ayvT8JB.jpg" alt=""/>
                            <h6 className='sobre-nome'>Felipe</h6>
                            <div className='social-icon'>  
                            <a href="https://www.linkedin.com/in/felpschneider/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/felpschneider" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>  
                          </Box>

                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/oUi4xHv.jpg" alt=""/>
                            <h6 className='sobre-nome'>Kamilla</h6>
                            <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/kamilla-rocha/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/Kamilla-Rocha" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                          </Box>

                          <Box >
                            <img className='sobre-fotos' src="https://i.imgur.com/fITYyWt.jpg" alt=""/>
                            <h6 className='sobre-nome'>Ryan</h6> 
                            <div className='social-icon'>
                            <a  href="https://www.linkedin.com/in/leaoquara/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/leaoquara" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                          </Box>                            

                        </Box>

                        <Box className='social'>

                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/TQiXa69.jpg" alt=""/>
                            <h6 className='sobre-nome'>Tamires</h6>
                            <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/tamires-dos-santos-2ba871231/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/TamiresSss" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                          </Box>

                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/gOv4IIK.jpg" alt=""/>
                            <h6 className='sobre-nome'>Thabata</h6>
                            <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/thabatadepaula/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/thabatadepaula" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                          </Box>
                            
                          <Box>
                            <img className='sobre-fotos' src="https://i.imgur.com/PAnlel6.jpg" alt=""/>
                            <h6 className='sobre-nome'>Victor</h6>
                            <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/milhoratti/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/milhoratti" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            </div>
                            </Box>

                          </Box>

                    </Grid>

                </Grid>
            </Grid>
        </Grid>

      </>
    );
}

export default Sobre;