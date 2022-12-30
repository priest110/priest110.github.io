import React from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { EnergySavingsLeaf, SportsSoccer, VolunteerActivism } from '@mui/icons-material';
import './Experience.css'


export default class Experience extends React.Component{ 
    render() {
        const formal_education = "Hi! My name is Rui, and I recently graduated from the University of Minho with a master's degree in Software Engineering. During my academic career, I worked as a research assistant at INESC TEC, which helped me develop my specializations, and I also produced freelance work, which allowed me to study issues outside of my speciality, specifically web development. My primary goal is to bring new ideas to life that improve people's daily lives, but I also enjoy enhancing the performance and utility of existing solutions."
        const extra_education = "In addition to my academic education, I have always dedicated my time to other areas of interest that have been critical to my personal growth. Thus, among these, I would highlight the following:"
        const extra_education_areas = [
            ["Environmental sustainability and ecology", "I joined the organization Society Loving The Planet in 2019 and, currently, I am the Director of Strategy and Sustainable Development."], 
            ["Sports", "I used to swim as a child and currently hold a lifeguard certification. Furthermore, I played federated football for 8 years and am currently enrolled in the UEFA C coaching course."],
            ["Volunteering", "I have been working since 2015 in an organization that provides summer vacations to children, particularly those from deprived backgrounds, and I have been a mentor to teenagers aged 15 and 16 in a youth group called Alvorada for the previous three years."]
        ]
        const final_declaration = "Feel free to contact me anymtime if you have some cool idea!"
        const society_img = "https://avatars.githubusercontent.com/u/49480451?v=4";
        const football_img = " ";
        const acolmax_img = " ";

        return(
            <div id="experience">
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, maxWidth:"70rem", marginLeft:"auto", marginRight:"auto", paddingBottom:"50px", paddingTop:"100px"}}>
                    <Typography variant="h1">
                        Experience & Education
                    </Typography>
                </Box>
                <Grid container justifyContent="center" alignItems="center" spacing={5}  sx={{ display: { md: 'flex', xs: 'none'}, maxWidth:"80rem", marginLeft:"auto", marginRight:"auto"}}>
                    <Grid item xs="auto" style={{ paddingLeft:0 }}>
                        <img src="./priest_holo.png" alt="Holo" height="400px"></img>
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft:0 }}>
                        <Typography variant="h6">
                            { formal_education }
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft:0 }}>
                        <Typography variant='h6'>
                            { extra_education }
                        </Typography>
                        <List dense>        
                            <ListItem sx={{alignItems:'start'}} >
                                <ListItemIcon sx={{paddingTop:'8px'}}>
                                    <EnergySavingsLeaf color="primary"/>
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="h6"><b>{extra_education_areas[0][0]}</b> - {extra_education_areas[0][1]}</Typography>} />
                            </ListItem>
                            <ListItem sx={{alignItems:'start'}}>
                                <ListItemIcon sx={{paddingTop:'8px'}}>
                                    <SportsSoccer color="primary"/>
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="h6"><b>{extra_education_areas[1][0]}</b> - {extra_education_areas[1][1]}</Typography> } />
                            </ListItem>
                            <ListItem sx={{alignItems:'start'}}>
                                <ListItemIcon sx={{paddingTop:'8px'}}>
                                    <VolunteerActivism color="primary"/>
                                </ListItemIcon>
                                <ListItemText primary={<Typography variant="h6"><b>{extra_education_areas[2][0]}</b> - {extra_education_areas[2][1]}</Typography> } />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={"auto"} style={{ paddingLeft:0 }}>
                        <img src="./priest_holo.png" alt="Holo" height="500px"></img>
                    </Grid>
                </Grid>
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, marginTop: "50px"}}>
                    <Typography className='animation-back-top' color="primary" variant='h6'>
                            BACK TO TOP
                    </Typography>
                </Box>
            </div>
        )
    }
}