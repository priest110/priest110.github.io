import React from 'react';
import { Typography, Box, Button, Avatar, Chip, Grid, Paper} from '@mui/material';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import './Experience.css'


export default class Experience extends React.Component{ 
    render() {
        const uminho = "./logos/uminho.jpg";
        const inesctec = "./logos/inesctec.png";
        const bsc_contents = [
            "Functional Programming",
            "Imperative Programming",
            "Object Oriented Programming",
            "Operating Systems",
            "Distributed Systems",
            "Software Systems Development",
            "Computer Networks",
            "Databases"
        ];
        const specializations = ["Distributed Systems", "Distributed Parallel Computing"];
        const msc_contents = [
            "Distributed Systems Fundamentals",
            "Large Scale Distributed Systems",
            "Fault Tolerance",
            "Advanced Architectures",
            "Parallel Algorithms",
            "Computer Systems Engineering"
        ];  
        const thesis = "Scientific Data Management";
        const research_content = "Analysis of existing solutions to the problem of scientific data management, with a focus on the CKAN, EUDAT, and Magda systems. Following this evaluation, an adaptation of the most interesting (CKAN) was applied to a specific study, the SAIL Project, an initiative promoted by INESC TEC researchers. The master's thesis was the result of this research."
        var bsc_chips = []
        var msc_chips = []

        for (let i = 0; i < bsc_contents.length; i++){
            bsc_chips.push(
                <Chip key={i} color="primary" sx={{ margin: "5px"}} variant="outlined"  size="small" label={bsc_contents[i]}/>
            )
        }
        for (let i = 0; i < msc_contents.length; i++){
            msc_chips.push(
                <Chip key={i} color="primary" sx={{ margin: "5px"}} variant="outlined"  size="small" label={msc_contents[i]}/>
            )
        }

        const skills = [
            {
                react: {
                    name: "React",
                    image: "./logos/react.png"
                }
            },
            {
                vue: {
                    name: "Vue",
                    image: "./logos/vue.png"
                }
            },
            {
                java: {
                    name: "Java",
                    image: "./logos/java.png"
                }
            },
            {
                python: {
                    name: "Python",
                    image: "./logos/python.png"
                }
            },
            {
                c: {
                    name: "C++",
                    image: "./logos/c++.png"
                }
            },
            {
                js: {
                    name: "Javascript",
                    image: "./logos/javascript.png"
                }
            },
            {
                html: {
                    name: "HTML",
                    image: "./logos/html.png"
                }
            },
            {
                css: {
                    name: "CSS",
                    image: "./logos/css.png"
                }
            },
            {
                node: {
                    name: "NodeJS",
                    image: "./logos/nodejs.png"
                }
            },
            {
                my: {
                    name: "MySQL",
                    image: "./logos/mysql.png"
                }
            },
            {
               posthgres: {
                    name: "PostgreSQL",
                    image: "./logos/postgresql.png"
               }
            },
            {
                mongo: {
                    name: "Mongo DB",
                    image: "./logos/mongodb.svg"
                }
            },
            {
                strapi: {
                    name: "Strapi",
                    image: "./logos/strapi.jpg"
                }
            },
            {
                netlify: {
                    name: "Netlify",
                    image: "./logos/netlify.png"
                }
            },
            {
               vscode: {
                    name: "VS Code",
                    image: "./logos/vscode.png"
               }
            },
            {
                mongo: {
                    name: "Github",
                    image: "./logos/github.png"
                }
            },
            {
                github: {
                    name: "Docker",
                    image: "./logos/docker.png"
                }
            },
            {
                postman: {
                    name: "Postman",
                    image: "./logos/postman.png"
                }
            },
            {
                linux: {
                    name: "Linux",
                    image: "./logos/linux.png"
                }
            }
        ]
        var skills_aux = []
        for (let i = 0; i < skills.length; i++){
            skills_aux.push(
                <Grid key={i} item xs={2}>
                    <Paper elevation={2} style={{display:"inline-flex", minWidth:"180px"}}>
                        <Avatar src={skills[i][Object.keys(skills[i])]["image"]} alt={skills[i][Object.keys(skills[i])]["name"]} sx={{height:"48", width:"48", marginLeft:"5px"}}/>
                        <Typography variant="h6" style={{textAlign:"center", lineHeight:"40px", paddingLeft:"10px"}}>
                            {skills[i][Object.keys(skills[i])]["name"]}
                        </Typography>
                    </Paper>
                </Grid>
            )
        }

        return(
            <div id="experience">
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, marginLeft:"auto", marginRight:"auto", paddingBottom:"50px", paddingTop:"100px"}}>
                    <Typography variant="h2">
                        Experience & Education
                    </Typography>
                </Box>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, maxWidth:"80rem", marginLeft:"auto", marginRight:"auto"}}>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body1" color="text.secondary">
                            September 2017 - July 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ border: 0, padding: 0 }}>
                                <Avatar src={uminho} sx={{ width: 38, height: 38 }}/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span" color="primary">
                                University of Minho
                            </Typography>
                            <Typography variant="h6">
                                <b>Bsc Computer and Software Engineering</b>
                            </Typography>
                            { bsc_chips }
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body1" color="text.secondary">
                            September 2020 - October 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ border: 0, padding: 0 }}>
                                <Avatar src={uminho} sx={{ width: 38, height: 38 }}/>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h5" component="span" color="primary">
                                University of Minho
                            </Typography>
                            <Typography variant="h6">
                                <b>Msc Computer and Software Engineering</b>
                            </Typography>
                            <Typography color="grey">
                                <b>{specializations[0]} & {specializations[1]}</b>
                            </Typography>
                            { msc_chips }
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body1" color="text.secondary">
                            March 2022 - December 2022
                        </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot variant="outlined" sx={{ padding: 0, borderColor:"#008CB1" }}>
                                    <Avatar src={inesctec} sx={{ width: 38, height: 38 }}/>
                                </TimelineDot>
                                <TimelineConnector sx={{ bgcolor: 'secondary' }} />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h5" component="span" color="primary">
                                    INESC TEC
                                </Typography>
                                <Typography variant="h6">
                                    <b>Research assistant</b>
                                </Typography>
                                <Typography color="grey">
                                    <b>Research area: { thesis }</b>
                                </Typography>
                                <Typography color="grey">
                                    { research_content }
                                </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </Box>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, marginLeft:"auto", marginRight:"auto", paddingBottom:"50px", paddingTop:"50px"}}>
                    <Typography variant="h4">
                        My favourite technologies and tools
                    </Typography>
                </Box>
                <Grid container   spacing={5}  sx={{ display: { md: 'flex', xs: 'none'}, maxWidth:"80rem", marginLeft:"auto", marginRight:"auto"}}>
                    {skills_aux}
                </Grid>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, marginTop: "50px"}}>
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