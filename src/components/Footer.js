import React from 'react';
import { AppBar, Toolbar, Container, Box, IconButton, Avatar, Typography, Divider} from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';


export default class Footer extends React.Component{
    render() {
        const name = "Rui Oliveira"
        const avatar = "./mini_avatar.png"
        const linkedIn = " ";
        const github = "https://github.com/priest110";
        const email = "mailto:rui.nbc.oliveira@gmail.com";
        const final_declaration = "Feel free to contact me anymtime if you have some cool idea!"

        return (
            <footer style={{ backgroundColor:"#BB6E69" }}>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, paddingTop:"20px", paddingBottom:"20px" }}>
                    <Avatar src={avatar} sx={{ width: 100, height: 100 }}/>  
                </Box>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'} }}>
                    <Typography>    
                        Feel free to contact me anytime if you have some cool idea!
                    </Typography>  
                </Box>             
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'} }}>
                    <IconButton disableRipple href="#" target="_blank" sx={{ "&:hover": { backgroundColor: "transparent", color: "#AA4A44" }, color:"black" }}>
                        <LinkedIn sx={{ fontSize:'40px' }}/>
                    </IconButton>
                    <IconButton disableRipple  href={ github } target="_blank" sx={{ "&:hover": { backgroundColor: "transparent", color: "#AA4A44" }, color:"black" }}>
                        <GitHub sx={{ fontSize:'40px' }}/>
                    </IconButton>
                    <IconButton disableRipple href={ email } target="_blank" sx={{ "&:hover": { backgroundColor: "transparent", color: "#AA4A44" }, color:"black" }}>
                        <Mail sx={{ fontSize:'40px' }}/>
                    </IconButton>
                </Box> 
                <Divider/>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'} }}>
                    <Typography>
                        @2022 Rui Oliveira 
                    </Typography>
                </Box>    
            </footer>
        )
    }
}