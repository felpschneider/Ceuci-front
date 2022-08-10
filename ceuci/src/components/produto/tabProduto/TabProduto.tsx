import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaProduto from '../listaProduto/ListaProduto'
import './TabProduto.css';


function TabProduto() {
    const [value, setValue] = useState('1');
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue)
    }


    return (
        <>

            <TabContext value={value}>
                <AppBar position='static'>
                    <Tabs centered indicatorColor='secondary' onChange={handleChange}>
                        <Tab label='Todos os Produtos' value='1' />
                        <Tab label='Sobre nós' value='2' />
                    </Tabs>
                </AppBar>
                <TabPanel value='1'>
                    <Box display='flex' flexWrap='wrap' justifyContent='center'>
                        <ListaProduto />
                    </Box>
                </TabPanel>
                <TabPanel value='2'>
                    <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo'>
                        Sobre nós
                    </Typography>
                    <Typography variant='body1' gutterBottom color='textPrimary' align='justify'>

                    </Typography>
                </TabPanel>
            </TabContext>

        </>


    )
}

export default TabProduto;