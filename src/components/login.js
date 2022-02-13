import React from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Link, Typography } from "@mui/material";

const login = () => {
    const paperStyle = {padding: 20, height:'70vh', width: 280, margin:"20px auto"}
    const avatarStyle = {backgroundColor: 'lightgreen'}
    const Style = {margin: '8px 0'}
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>    
                <TextField id="email" label="Username" placeholder="Enter Username" variant="standard" fullWidth required/>
                <TextField id="password" label="Password" variant="standard" placeholder="Enter Password" type="password" fullWidth required/>
                <FormControlLabel
                    label="Remember Me"
                    control={
                        <Checkbox name="checkdb" color="primary" fullWidth/>
                    }
                    style={Style}
                    fullWidth
                />
                <Button type="submit" color="primary" variant="contained" style={Style} fullWidth>SIGNIN</Button>
                <Grid style={Style} >
                    <Typography >
                        Forgot 
                        <Link href="#"> Password ?</Link>
                    </Typography>
                    <Typography>
                        Do you have an Account. <Link href="#">Sign Up</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default login