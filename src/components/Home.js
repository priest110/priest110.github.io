import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './Home.css'
import { Avatar, Grid, Typography, IconButton, Container, Button} from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';


export default class Home extends React.Component{
    handle_download(){
        const link =  document.createElement("a")
        link.download = 'rui_oliveira_cv.pdf'
        link.href = './cv.pdf'
        link.click()
    }

    render() {
        const author_name = "Rui Oliveira";
        const author_area = "Software Enginner from Portugal";
        const description = "Specialised in ";
        const specialisations = ["Distributed Systems", "Distributed Parallel Computing"];
        const linkedIn = " ";
        const github = "https://github.com/priest110";
        const email = "mailto:rui.nbc.oliveira@gmail.com";
        const avatar = "https://avatars.githubusercontent.com/u/49480451?v=4";

        return(
            <main style={{ marginTop:"192px", height:"100%"}}>
                <Grid container justifyContent="center" alignItems="center" spacing={5} sx={{ display: { md: 'flex', xs: 'none'}}}>
                    <Grid item xs="auto">
                        <Avatar src={avatar} sx={{ width:{ md:'25vw', lg:'300px'}, height:{ md:'25vw', lg:'300px'}, }}/>    
                    </Grid>
                    <Grid item xs="auto" md={5}>
                        <Typography color="primary.dark" variant='h2' >
                            {author_name}
                        </Typography>
                        <Typography color="primary" variant='h4' >
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
                        <IconButton style={{ paddingLeft:'0px' }} color="primary"  href="#" target="_blank">
                            <LinkedIn sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton color="primary"  href={ github } target="_blank">
                            <GitHub sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton color="primary" href={ email } target="_blank">
                            <Mail sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <div>
                            <Button style={{ width:'152px' }} variant='contained' color="primary" onClick={this.handle_download}>
                                Resume
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ display: { md: 'none', xs: 'flex'}, textAlign: 'center'}}>
                        <Grid item>
                        <Avatar src={avatar} sx={{ width:'300px', height:'300px', marginLeft: 'auto', marginRight: 'auto' }}/> 
                        <Typography color="primary.dark" variant='h2' >
                            {author_name}
                        </Typography>
                        <Typography color="primary" variant='h4' >
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
                        <IconButton style={{ paddingLeft:'0px' }} color="primary"  href="#" target="_blank">
                            <LinkedIn sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton color="primary"  href={ github } target="_blank">
                            <GitHub sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        <IconButton color="primary" href={ email } target="_blank">
                            <Mail sx={{ fontSize:'40px' }}/>
                        </IconButton>
                        </Grid>
                        <Grid item>
                            <Button style={{ width:'152px' }} variant='contained' color="primary" onClick={this.handle_download}>
                                Resume
                            </Button>
                        </Grid>
                </Grid>
            </main>
        )
    }
}