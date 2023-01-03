import React from 'react';
import './Header.css'
import { AppBar, Toolbar, Button, Box, IconButton, Avatar} from '@mui/material';
import { Save, Menu } from '@mui/icons-material';


export default class Header extends React.Component{
    render() {
        const name = "Rui Oliveira"
        const tabs = [
            {about:"About"}, 
            {experience:"Experience"}, 
            {projects:"Projects"}
        ]
        const avatar = "./me/mini_avatar.png"
        var buttons = []

        for (let i = 0; i < tabs.length; i++){
            buttons.push(
                <Button id={"tab_button_" + i} href={"#" + Object.keys(tabs[i])} disableRipple key={i} variant="text" color="primary" size="large" sx={{ backgroundColor:"transparent", "&:hover": { backgroundColor: "transparent", color: "black !important" }, fontSize:"20px" }}>
                    <b>{tabs[i][Object.keys(tabs[i])]}</b>
                </Button>
            )
        }

        const change_color = () => {
            const background_elem = document.querySelector("#background");
            var header_bar_elem = document.getElementById("header_bar");
            var button_elem = document.getElementById("author_button");
            var tabs_buttons = []
            for (let i = 0; i < tabs.length; i++){
                tabs_buttons.push(document.getElementById("tab_button_" + i))
            }
            if (window.scrollY >= background_elem.offsetHeight){
                header_bar_elem.classList.add("header-color")
                button_elem.classList.add("button-color") 
                for(let i = 0; i < tabs_buttons.length; i++){
                    tabs_buttons[i].classList.add("button-color")
                }
                header_bar_elem.classList.add("animation-header")
            }
            else{
                header_bar_elem.classList.remove("header-color")
                button_elem.classList.remove("button-color")
                for(let i = 0; i < tabs_buttons.length; i++){
                    tabs_buttons[i].classList.remove("button-color")
                }
                header_bar_elem.classList.remove("animation-header")
            }
        }

        window.addEventListener("scroll", change_color)

        return (
            <header style={{ height:'76px'}} id="homepage">
                <AppBar id="header_bar" color="transparent" elevation={0} style={{ height: 'inherit', position:"absolute"}}>
                    <Toolbar style={{ marginLeft:"34px", marginRight:"34px", height: 'inherit'}} >
                        <Button id="author_button" href="#homepage" disableRipple color="primary" size="large" sx={{ "&:hover": { backgroundColor: "transparent", color: "black !important" }, fontSize:"20px" }}>
                            <Avatar src={avatar} sx={{ width: 56, height: 56 }}/>     
                            &nbsp; 
                            <b>{ name }</b>                       
                        </Button>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box id="tabs_buttons" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            { buttons }
                        </Box>
                    {/*}    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton color="primary"  sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                                <Menu sx={{ fontSize:'40px' }}/>
                            </IconButton>
                        </Box> */}
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}