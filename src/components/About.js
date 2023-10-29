import React from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { EnergySavingsLeaf, SportsSoccer, VolunteerActivism } from '@mui/icons-material';
import './About.css'


export default class About extends React.Component {
    carousel_item(item, i) {
        return (
            <Paper key={i} elevation={0}>
                <div style={{ overflow: "hidden" }}>
                    <img className='carousel_image' src={item.image} alt={item.alt} style={{ objectFit: "cover", height: "500px", width: "100%" }} />
                </div>
                <Typography style={{ minHeight: "70px", marginBottom: 0, marginTop: 0, display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>{item.description}</Typography>
            </Paper>
        )
    }

    render() {
        const personal_info = require('../data/personal_info.json');

        return (
            <div id="About">
                <Box justifyContent="center" alignItems="center" sx={{ display: "flex", marginLeft: "auto", marginRight: "auto", paddingBottom: "50px", paddingTop: "100px" }}>
                    <Typography variant="h2">
                        About me
                    </Typography>
                </Box>
                <Grid container spacing={5} sx={{ display: "flex" }}>
                    <Grid item md="auto" style={{ paddingLeft: 0 }}>
                        <img src="./me/priest_holo.png" alt="Holo" height="400" style={{ ŧextAlign: "center" }}></img>
                    </Grid>
                    <Grid item lg={7} xs={12} style={{ paddingLeft: 0 }}>
                        <Typography variant="h6" >
                            {personal_info.first_paragraph}
                        </Typography>
                    </Grid>
                    <Grid item lg={6} xs={12} style={{ paddingLeft: 0 }}>
                        <Typography variant='h6'>
                            {personal_info.second_paragraph}
                        </Typography>
                        <List dense>
                            {
                                personal_info.hobbies.map((hobby, index) => {
                                    return (
                                        <ListItem key={index} sx={{ alignItems: 'start' }} >
                                            <ListItemIcon sx={{ paddingTop: '8px' }}>
                                                {
                                                    hobby.type === "Sports"
                                                        ? (
                                                            <SportsSoccer color="primary" />
                                                        ) : hobby.type === "Volunteering"
                                                            ?
                                                            <VolunteerActivism color="primary" />
                                                            :
                                                            <EnergySavingsLeaf color="primary" />
                                                }
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="h6"><b>{hobby.type}</b> - {hobby.description}</Typography>} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item lg={5} xs={12} className="carousel_grid">
                        <Carousel autoPlay="false" animation='slide' duration="1000" swipe>
                            {personal_info.hobbies_images.map((item, i) => this.carousel_item(item, i))}
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
        )
    }
}