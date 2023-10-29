import React from 'react';
import './Header.css'
import { AppBar, Toolbar, Button, Box, IconButton, Avatar, MenuItem, Menu, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function HeaderMenu({ tabs }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (sectionId) => {
        // Scroll to the corresponding section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Close the menu
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton id={"tab_button_menu"} color="primary" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }} onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    tabs.map((tab, index) => {
                        return (
                            <MenuItem key={index} onClick={() => handleMenuItemClick(tab)}>
                                <Typography color='primary'>{tab}</Typography>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </>
    );
}

export default class Header extends React.Component {
    render() {
        const name = "Rui Oliveira"
        const tabs = ["About", "Experience", "Projects"]
        const avatar = "./me/mini_avatar.png"
        var buttons = []

        for (let i = 0; i < tabs.length; i++) {
            buttons.push(
                <Button id={"tab_button_" + i} href={"#" + tabs[i]} disableRipple key={i} variant="text" color="primary" size="large" sx={{ backgroundColor: "transparent", "&:hover": { backgroundColor: "transparent", color: "black !important" }, fontSize: "20px" }}>
                    <b>{tabs[i]}</b>
                </Button>
            )
        }

        const change_color = () => {
            const background_elem = document.querySelector("#background");
            var header_bar_elem = document.getElementById("header_bar");
            var button_elem = document.getElementById("author_button");
            var tabs_buttons = []
            for (let i = 0; i < tabs.length; i++) {
                tabs_buttons.push(document.getElementById("tab_button_" + i));
            }
            tabs_buttons.push(document.getElementById("tab_button_menu"));
            if (window.scrollY >= background_elem.offsetHeight) {
                header_bar_elem.classList.add("header-color")
                button_elem.classList.add("button-color")
                for (let i = 0; i < tabs_buttons.length; i++) {
                    tabs_buttons[i].classList.add("button-color")
                }
                header_bar_elem.classList.add("animation-header")
            }
            else {
                header_bar_elem.classList.remove("header-color")
                button_elem.classList.remove("button-color")
                for (let i = 0; i < tabs_buttons.length; i++) {
                    tabs_buttons[i].classList.remove("button-color")
                }
                header_bar_elem.classList.remove("animation-header")
            }
        }

        window.addEventListener("scroll", change_color);

        return (
            <header style={{ height: '76px' }} id="homepage">
                <AppBar id="header_bar" color="transparent" elevation={0} style={{ height: 'inherit', position: "absolute" }}>
                    <Toolbar sx={{ marginLeft: { md: "34px", xs: "flex" }, marginRight: { md: "34px", xs: "flex" }, height: 'inherit' }} >
                        <Button id="author_button" href="#homepage" disableRipple color="primary" size="large" sx={{ "&:hover": { backgroundColor: "transparent", color: "black !important" }, fontSize: { 'md': "20px", 'xs': '18px' } }}>
                            <Avatar src={avatar} sx={{ width: 56, height: 56 }} />
                            &nbsp;
                            <b>{name}</b>
                        </Button>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box id="tabs_buttons" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {buttons}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <HeaderMenu tabs={tabs} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}