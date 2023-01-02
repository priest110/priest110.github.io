import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Avatar} from '@mui/material';
import { Save, Menu } from '@mui/icons-material';


export default class Header extends React.Component{
    render() {
        const name = "Rui Oliveira"
        const tabs = ["About", "Experience", "Projects"]
        const avatar = "./me/mini_avatar.png"
        var buttons = []

        for (let i = 0; i < tabs.length; i++){
            buttons.push(
                <Button disableRipple key={i} variant="text" color="primary" size="large" sx={{ backgroundColor:"transparent", "&:hover": { backgroundColor: "transparent", color: "black" }, fontSize:"20px" }}>
                    <b>{tabs[i]}</b>
                </Button>
            )
        }

        return (
            <header style={{ height:'76px' }} id="homepage">
                <AppBar color="transparent" elevation={0} style={{ height: 'inherit' }}>
                    <Toolbar style={{ marginLeft:"34px", marginRight:"34px", height: 'inherit'}} >
                        <Button disableRipple color="primary" size="large" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" }, fontSize:"20px" }}>
                            <Avatar src={avatar} sx={{ width: 56, height: 56 }}/>  
                            &nbsp; 
                            <b>{ name }</b>                       
                        </Button>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            { buttons }
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton color="primary" size="large" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                                <Menu/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}