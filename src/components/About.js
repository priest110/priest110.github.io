import React from 'react';
import { Avatar, Grid, Typography, IconButton, Box} from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';


export default class About extends React.Component{
    render() {
        const author_name = "Rui Oliveira";
        const author_area = "Software Enginner from Portugal";
        const description = "Specialised in Distributed Systems and Distributed Parallel Computing";
        const linkedIn = " ";
        const github = "https://github.com/priest110";
        const email = "mailto:rui.nbc.oliveira@gmail.com";
        const avatar = "https://avatars.githubusercontent.com/u/49480451?v=4";

        return(
            <main style={{ marginTop:"192px", height:"100%"}}>
                <Grid container justifyContent="center" spacing={2} sx={{ display:{ md:'flex', xs:'none'} }}>
                    <Grid item xs={3}>
                        <Avatar src={avatar} sx={{ width:300, height:300}}/>    
                    </Grid>
                    <Grid item xs={3}>
                        <Typography color="primary.dark" variant='h2' >
                            {author_name}
                        </Typography>
                        <Typography color="primary" variant='h4' >
                            {author_area}
                        </Typography>
                        <Typography color="primary.light" variant='h6' >
                            {description}
                        </Typography>
                        <IconButton color="primary" href="#">
                            <LinkedIn/>
                        </IconButton>
                        <IconButton color="primary" href={ github } target="_blank">
                            <GitHub/>
                        </IconButton>
                        <IconButton color="primary" href={ email } target="_blank">
                            <Mail/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Box sx={{ display:{ md:'none', xs:'flex'} }}>
                    <Avatar src={avatar} sx={{ width:300, height:300}}/> 
                    <Typography variant='h2' >
                            {author_name}
                    </Typography>
                    <Typography variant='h4' >
                        {author_area}
                    </Typography>
                    <Typography variant='h6' >
                        {description}
                    </Typography>
                    <IconButton>
                        <LinkedIn/>
                    </IconButton>
                    <IconButton>
                        <GitHub/>
                    </IconButton>
                    <IconButton>
                        <Mail/>
                    </IconButton>
                </Box>
            </main>
        )
    }
}