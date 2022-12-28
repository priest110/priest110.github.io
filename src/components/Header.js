import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton} from '@mui/material';
import { Save, Menu } from '@mui/icons-material';


export default class Header extends React.Component{
    render() {
        const name = "Priest"
        const tabs = ["About", "Experience", "Projects"]
        var buttons = []

        for (let i = 0; i < tabs.length; i++){
            buttons.push(
                <Button key={i} variant="text" color="secondary" size="large">
                    {tabs[i]}
                </Button>
            )
        }

        return (
            <header style={{ height:'64px' }}>
                <AppBar>
                    <Toolbar color="primary" style={{ marginLeft:"24px", marginRight:"24px", }}>
                        <Button color="secondary" size="large" startIcon={<Save />}>
                            { name }
                        </Button>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            { buttons }
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton color="secondary" size="large">
                                <Menu/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}