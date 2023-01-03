import { Grid } from "@mui/material";
import React from "react";
import './Loading.css'

export default class Loading extends React.Component{
    render() {
        return (
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={5} style={{display:"flex", height:"100vh"}}>
                <Grid item>
                    <img className="loader" style={{height:"100px", width:"100px"}} src="/me/mini_avatar.png" alt="" />
                </Grid>
            </Grid>
        )
    }
}