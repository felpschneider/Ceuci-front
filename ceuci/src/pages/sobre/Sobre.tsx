import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import { Box } from "@mui/material";
import './Sobre.css';

function Sobre() {
    return (
        <>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
                <Grid alignItems="center" item xs={12}>
                    <Grid>
                    <Box>
                        <h1 className='titulo'>Sobre nós</h1>
                        <a className='texto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dicta aperiam asperiores quae in ipsam animi nihil eius blanditiis nam quibusdam dolore soluta, rerum placeat atque recusandae a quidem eveniet.</a>
                    </Box>
                    </Grid>

                    <Grid alignItems="center" item xs={12}>
                    <Box>
                        <h1 className='texto'>Se conecte com a gente !</h1>
                    </Box>
                    </Grid>

                    <Grid direction="row" alignItems="center" >

                        <Grid item xs={12}>
                        <Box className='social'>
                            <a href="https://www.linkedin.com/in/leaoquara/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/leaoquara" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            <h6 className='texto'>Ryan dos Santos da Paixão</h6>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>
                            <h6 className='texto'>Thabata</h6>
                            <a href="https://www.linkedin.com/in/thabatadepaula/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/thabatadepaula" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>

                            <a href="https://www.linkedin.com/in/felpschneider/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/felpschneider" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            <h6 className='texto'>Felipe</h6>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>
                            <h6 className='texto'>Victor</h6>
                            <a href="https://www.linkedin.com/in/milhoratti/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/milhoratti" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>
                            <a href="https://www.linkedin.com/in/tamires-dos-santos-2ba871231/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/TamiresSss" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            <h6 className='texto'>Thamires</h6>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>
                            <h6 className='texto'>Beatriz</h6>
                            <a href="https://www.linkedin.com/in/beatrizramoss/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/beatrizramoss" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                        </Box>
                        </Grid>

                        <Grid item xs={12}>
                        <Box className='social'>
                            <a href="https://www.linkedin.com/in/kamilla-rocha/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/Kamilla-Rocha" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                            <h6 className='texto'>Kamilla</h6>
                        </Box>
                        </Grid>

                </Grid>
            </Grid>
        </Grid>

      </>
    );
}

export default Sobre;