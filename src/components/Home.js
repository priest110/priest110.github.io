import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './Home.css'
import { Avatar, Grid, Typography, IconButton, Button, Box} from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';


export default class Home extends React.Component{
    handle_download(){
        const link =  document.createElement("a");
        link.download = 'rui_oliveira_cv.pdf';
        link.href = './cv.pdf';
        link.click();
    }

    render() {
        const author_name = "Rui Oliveira";
        const author_area = "Software Enginner from Portugal";
        const description = "Specialized in ";
        const specialisations = ["Distributed Systems", "Distributed Parallel Computing"];
        const linkedIn = "https://www.linkedin.com/in/ruinbcoliveira/";
        const github = "https://github.com/priest110";
        const email = "mailto:rui.nbc.oliveira@gmail.com";
        const avatar = "./me/avatar.jpg";

        return(
            <div id='home'>
                <Grid className='sub-grid-height-1' container spacing={5}  sx={{ display: { md: 'flex', xs: 'none'}, marginTop:0}}>
                    <Grid item xs="auto" style={{ paddingTop:0 }}>
                        <Avatar src={avatar} sx={{ width:{ md:'33vw', lg:'400px'}, height:{ md:'33vw', lg:'400px'}, }}/>    
                    </Grid>
                    <Grid item xs="auto" md={6} style={{ paddingTop:0 }}>
                        <Typography color="primary.dark" variant='h2' >
                            {author_name}
                        </Typography>
                        <Typography color="primary" variant='h3' >
                            {author_area}
                        </Typography>
                        <Typography color="primary.light" variant='h4' sx={{ marginBottom:"15px"}} >
                            {description}
                        <TypewriterComponent  options={{
                            strings: specialisations,
                            autoStart: true,
                            loop: true,
                        }}/>
                        </Typography>
                        <IconButton disableRipple style={{ paddingLeft:'0px' }} color="primary"  href={linkedIn} target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <LinkedIn sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton disableRipple color="primary"  href={ github } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <GitHub sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton disableRipple color="primary" href={ email } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <Mail sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <div style={{ marginTop:"15px"}}>
                            <Button style={{ width:'152px' }} variant='contained' color="primary" onClick={this.handle_download} sx={{ "&:hover": { backgroundColor: "black"} }}>
                                Resume
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid className='sub-grid-height-1' container direction="column" sx={{ display: { md: 'none', xs: 'flex'}, textAlign: 'center'}}>
                    <Grid item>
                        <Avatar src={avatar} sx={{ width:'300px', height:'300px', marginLeft: 'auto', marginRight: 'auto' }}/> 
                        <Typography color="primary.dark" variant='h3' >
                            {author_name}
                        </Typography>
                        <Typography color="primary" variant='h5' >
                            {author_area}
                        </Typography>
                        <Typography color="primary.light" variant='h6' >
                            {description}
                        <TypewriterComponent  options={{
                            strings: specialisations,
                            autoStart: true,
                            loop: true,
                        }}/>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton disableRipple style={{ paddingLeft:'0px' }} color="primary"  href={ linkedIn } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <LinkedIn sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton disableRipple color="primary"  href={ github } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <GitHub sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton disableRipple color="primary" href={ email } target="_blank" rel="noreferrer" sx={{ "&:hover": { backgroundColor: "transparent", color: "black" } }}>
                            <Mail sx={{ fontSize:'40px' }}/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Button style={{ width:'152px' }} variant='contained' color="primary" onClick={this.handle_download} sx={{ "&:hover": { backgroundColor: "black"} }}>
                            Resume
                        </Button>
                    </Grid>
                </Grid>
                <Box className='sub-grid-height-2' justifyContent="center" alignItems="center" sx={{ display: "flex"}}>
                    <Typography className='animation-scroll' color="primary" variant='h6'>
                            SCROLL
                    </Typography>
                </Box>
            </div>
        )
    }
}