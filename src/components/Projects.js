import React from 'react';
import { Typography, Paper, Box, Button, Chip } from '@mui/material';

export default class Experience extends React.Component{ 
    constructor(props) {
        super(props)
        this.state = { matches: window.matchMedia("(min-width: 900px)").matches };
    }

    componentDidMount() {
        const handler = e => this.setState({matches: e.matches});
        window.matchMedia("(min-width: 900px)").addEventListener('change', handler);
      }
    render() {
        const projects = require('../data/projects.json');
        const personal_info = require('../data/personal_info.json');
        var projects_container = []

        for(let i = 0; i < projects.length; i++){
            projects_container.push(
                <Paper key={i} elevation={2} style={{ marginBottom:"30px", marginLeft:"auto", marginRight:"auto", width:"95%", maxWidth:"1300px", }}>
                    <Button disableRipple variant="text" href={projects[i].url} target="_blank" rel="noreferrer" color="custom_black" sx={{ "&:hover": { backgroundColor: "transparent", color: "#aa4a44" }, padding:0, marginLeft:"10px", marginRight:"10px"}}>
                        <Typography variant="h6">
                            <b>{projects[i].title}</b>
                        </Typography>
                    </Button>
                    <Typography sx={{marginLeft:"10px", marginRight:"10px"}}>{projects[i].description}</Typography>
                    <div style={{display: this.state.matches ? 'flex' : 'block' , marginLeft:"10px", marginRight:"10px"}}>
                        {(() => {
                            let chips = []
                            for(let j = 0; j < projects[i].tools.length; j++){
                                chips.push(
                                    <Chip key={j} color="primary" sx={{ margin: "5px"}} variant="outlined" size="small" label={projects[i].tools[j]}/>
                                )
                            }
                            return chips
                        }) ()
                        } 
                        <Box sx={{ flexGrow: 1, display:{md: 'flex', xs: 'none'} }}></Box>
                        <Button variant="outlined" href={projects[i].url} target="_blank" rel="noreferrer" sx={{ marginBottom:"10px", padding:"3px", display:{md: 'flex', xs: 'none'}}}>
                            Learn more
                        </Button> 
                    </div>
                </Paper>
            )
        }

        return(
            <div id="projects">
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", width:"95%", maxWidth:"1300px",  marginLeft:"auto", marginRight:"auto", paddingBottom:"50px", paddingTop:"100px", textAlign:"center"}}>
                    <Typography variant="h2">
                        Projects
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", width:"95%", maxWidth:"1300px",  marginLeft:"auto", marginRight:"auto", marginBottom:"30px"}}>
                    <Typography sx={{textAlign:{xs:'center', md:'none'}}}>
                        The projects listed below are some of my favorites, but if you're curious, you can find many more <a style={{color:"#aa4a44", textDecoration:"none"}} rel="noreferrer" target="_blank" href={personal_info.profile.github}>here</a>! 
                    </Typography>
                </Box>
                {projects_container}
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", marginTop: "50px" }}>
                    <Button href="#homepage" disableRipple className='animation-back-top button-transition' color="primary" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                        <Typography variant='h6'>
                            BACK TO TOP
                        </Typography>
                    </Button>
                </Box>
            </div>
        )
    }
}