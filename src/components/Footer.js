import React from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Avatar, Typography, Divider } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';


export default class Footer extends React.Component{
    render() {
        const name = "Rui Oliveira"
        const avatar = "./me/mini_avatar.png"
        const linkedIn = "www.linkedin.com/in/ruinbcoliveira";
        const github = "https://github.com/priest110";
        const email = "mailto:rui.nbc.oliveira@gmail.com";
        const final_declaration = "If you have a great idea, do not hesitate to contact me!"

        return (
            <footer style={{ backgroundColor:"#AA4A44" }}>
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", paddingTop:"20px", paddingBottom:"20px" }}>
                    <Avatar src={avatar} sx={{ width: 100, height: 100 }}/>  
                </Box>
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", marginLeft:"10px", marginRight:"10px", textAlign:"center" }}>
                    <Typography>    
                        {final_declaration}
                    </Typography>  
                </Box>             
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
                    <IconButton disableRipple href={linkedIn} target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "white" }, color:"black" }}>
                        <LinkedIn sx={{ fontSize:'40px' }}/>
                    </IconButton>
                    <IconButton disableRipple  href={ github } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "white" }, color:"black" }}>
                        <GitHub sx={{ fontSize:'40px' }}/>
                    </IconButton>
                    <IconButton disableRipple href={ email } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "white" }, color:"black" }}>
                        <Mail sx={{ fontSize:'40px' }}/>
                    </IconButton>
                </Box> 
                <Divider/>
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex" }}>
                    <Typography>
                        @2023 Rui Oliveira 
                    </Typography>
                </Box>    
            </footer>
        )
    }
}