import React from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper} from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { EnergySavingsLeaf, SportsSoccer, VolunteerActivism } from '@mui/icons-material';
import './About.css'

export default class About extends React.Component{ 
    carousel_item(item, i){
        return (
            <Paper key={i} elevation={0}>
                <div style={{overflow:"hidden"}}>
                <img className='carousel_image' src={item.image} alt={item.alt} style={{objectFit: "cover", height:"500px", width:"100%"}}/>
                </div>
                <Typography style={{ minHeight:"70px", marginBottom:0, marginTop:0, display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>{item.description}</Typography>
            </Paper>
        )
    }


    render() {
        const formal_education = "Hi! My name is Rui, and I recently graduated from the University of Minho with a master's degree in Computer and Software Engineering. During my academic career, I worked as a research assistant at INESC TEC, which helped me develop my specializations, and I also produced freelance work, which allowed me to study issues outside of my speciality, namely web development. My primary goal is to bring new ideas to life that improve people's daily lives, but I also enjoy enhancing the performance and utility of existing solutions."
        const extra_education = "In addition to my academic education, I have always dedicated my time to other areas of interest that have been critical to my personal growth. Thus, among these, I would highlight the following:"
        const extra_education_areas = [
            ["Environmental sustainability and ecology", "I joined the organization Society Loving The Planet in 2019 and, currently, I am the Director of Strategy and Sustainable Development."], 
            ["Sports", "I used to swim as a child and currently hold a lifeguard certification. Furthermore, I played federated football for 8 years and am currently enrolled in the UEFA C coaching course."],
            ["Volunteering", "I have been working since 2015 in an organization called ACOLMAX (or simply 'Colónia') that provides summer vacations to children, particularly those from deprived backgrounds. In addition, for the previous three years, I volunteered as a mentor to youngsters aged 15 and 16 in a youth group called Alvorada."]
        ]
        var items = [
            {
                alt: "Tree planting",
                image: "./me/plantacao.jpg",
                description: "Tree planting promoted by Society and Laboratório da Paisagem (november 2022)"
            },
            {
                alt: "Football",
                image: "./me/futebol.jpg",
                description: "Vilaverdense Futebol Clube (17/18 season)"
            },
            {
                alt: "Colónia",
                image: "./me/colonia-2.jpg",
                description: "First day of 'Colónia' 2019"
            },
            {
                alt: "World Environment Week",
                image: "./me/se.jpg",
                description: "Activity related to the World Environment Week at the Sé elementary school in Braga (june 2022)"
            },
            {
                alt: "Sea",
                image: "./me/mar.jpg",
                description: "Bath time at 'Colónia' 2022, with the boundary marked by the typical human cordon formed by the volunteers"
            },
        ]

        return(
            <div id="about">
                <Box justifyContent="center" alignItems="center" sx={{ display: { md: 'flex', xs: 'none'}, marginLeft:"auto", marginRight:"auto", paddingBottom:"50px", paddingTop:"100px"}}>
                    <Typography variant="h2">
                        About me
                    </Typography>
                </Box>
                <Grid container justifyContent="center" alignItems="center" spacing={5}  sx={{ display: { md: 'flex', xs: 'none'}, maxWidth:"80rem", marginLeft:"auto", marginRight:"auto"}}>
                    <Grid item xs={4}>
                        <img src="./me/priest_holo.png" alt="Holo" height="400px"></img>
                    </Grid>
                    <Grid item xs={6} style={{paddingTop:0}}>
                        <Typography variant="h6">
                            { formal_education }
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft:0}}>
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
                    <Grid item xs={5}>
                        <Carousel animation='slide' duration="1000" navButtonsAlwaysInvisible swipe>
                            { items.map( (item, i) => this.carousel_item(item, i) )}
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
        )
    }
}