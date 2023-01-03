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
        const github = "https://github.com/priest110";
        const projects = [
            {
                ray_tracer:{
                    title: "Parallelization of a Simple Ray Tracer",
                    description: "Exploration of different performance optimisation techniques by exploiting parallelism in several aspects applied to a case study in Computer Graphics, a simple ray tracer.",
                    tools: ["C++", "ISPC"],
                    url: "https://github.com/priest110/university/tree/master/4th-year/CPD/ESC/Projeto%201"
                } 
            },
            {
                fault_tolerance:{
                    title: "Fault Tolerant Banking System",
                    description: "Banking system that employs a fault-tolerant spread group communication protocol.",
                    tools: ["Java", "Atomix", "Spread"],
                    url: "https://github.com/priest110/university/tree/master/4th-year/SD/TF/Projeto"
                } 
            },
            {
                rosetta:{
                    title: "Rosetta Stone",
                    description: "Middleware for transportation companies that use the General Transit Feed Specification (GTFS) format (in this case, Transportes Urbanos de Braga - TUB) to efficiently handle and display information.",
                    tools: ["Python", "Javascript", "Vue", "Strapi", "PostgreSQL"],
                    url: "https://github.com/priest110/Rosetta_Stone"
                } 
            },
            {
                lsds:{
                    title: "Large Scale Database Server",
                    description: "Evaluation of the behavior of a simple database system using the client-server paradigm, specifically to estimate its behavior in a high-performance and high-demand system and to calculate installation and maintenance costs.",
                    tools: ["C++"],
                    url: "https://github.com/priest110/university/tree/master/4th-year/CPD/ESC/Projeto%202"
                }
            },
            {
                sgr:{
                    title: "Restaurant Management System",
                    description: "Automation of the daily work in a restaurant, providing management in different areas such as stocks, sales, staff, menus, tables and orders.",
                    tools: ["C#","Xamarin", "ASP.NET Core MVC", "MySQL"],
                    url: "https://github.com/priest110/university/tree/master/3rd-year/LI4/Projeto"
                }
            }
            
        ]
        var projects_aux = []

        for(let i = 0; i < projects.length; i++){
            projects_aux.push(
                <Paper key={i} elevation={2} style={{ marginBottom:"30px", marginLeft:"auto", marginRight:"auto", width:"95%", maxWidth:"1300px", }}>
                    <Button disableRipple variant="text" href={projects[i][Object.keys(projects[i])]["url"]} target="_blank" rel="noreferrer" color="custom_black" sx={{ "&:hover": { backgroundColor: "transparent", color: "#aa4a44" }, padding:0, marginLeft:"10px", marginRight:"10px"}}>
                        <Typography variant="h6">
                            <b>{projects[i][Object.keys(projects[i])]["title"]}</b>
                        </Typography>
                    </Button>
                    <Typography sx={{marginLeft:"10px", marginRight:"10px"}}>{projects[i][Object.keys(projects[i])]["description"]}</Typography>
                    <div style={{display: this.state.matches ? 'flex' : 'block' , marginLeft:"10px", marginRight:"10px"}}>
                        {(() => {
                            let chips = []
                            for(let j = 0; j < projects[i][Object.keys(projects[i])]["tools"].length; j++){
                                chips.push(
                                    <Chip key={j} color="primary" sx={{ margin: "5px"}} variant="outlined" size="small" label={projects[i][Object.keys(projects[i])]["tools"][j]}/>
                                )
                            }
                            return chips
                        }) ()
                        } 
                        <Box sx={{ flexGrow: 1, display:{md: 'flex', xs: 'none'} }}></Box>
                        <Button variant="outlined" href={projects[i][Object.keys(projects[i])]["url"]} target="_blank" rel="noreferrer" sx={{ marginBottom:"10px", padding:"3px", display:{md: 'flex', xs: 'none'}}}>
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
                        The projects listed below are some of my favorites, but if you're curious, you can find many more <a style={{color:"#aa4a44", textDecoration:"none"}} rel="noreferrer" target="_blank" href={github}>here</a>! 
                    </Typography>
                </Box>
                {projects_aux}
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