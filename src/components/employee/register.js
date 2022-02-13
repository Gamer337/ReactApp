import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import "./register.css";

export default function RegisterEmp() {
    
    const initialvalues = { username:"", email:"", age:"" };
    const [formvalues, setFormvalues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormvalues({...formvalues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formvalues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formvalues);
        }
    },[formErrors]);

    const validate = (values) => {
        const errors = [];
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username) {
            errors.username = "Username is required";
        }

        if(!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if(!values.age) {
            errors.age = "Age is required";
        } else if (values.age.length > 3) {
            errors.age = "Age must be less than 3 characters";
        }

        return errors;
    };

    const paperStyle = {padding: 20, height:'auto', width: 250, margin:"20px auto"}
    const Style = {margin: '10px 2px'}

    return (
        <div className="container">
            <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <Grid align='center'>
                    <h1>Register Employee</h1>
                </Grid> 
                <div className="ui_form">
                    <Paper elevation={10} style={paperStyle}>

                        <label style={Style} fullWidth>Username</label>
                        <TextField type="text" placeholder="Enter Name" name="username" 
                        values={formvalues.username} onChange={handleChange}/>
                        <p>{formErrors.username}</p>

                        <label style={Style}>Email</label>
                        <TextField type="text" placeholder="Enter Email" name="email" 
                        values={formvalues.email} onChange={handleChange}/>
                        <p>{formErrors.email}</p>

                        <label style={Style}>Age</label>
                        <TextField type="text" placeholder="Enter Age" name="age" 
                        values={formvalues.age} onChange={handleChange}/>
                        <p>{formErrors.age}</p>
                        
                        <Button className="fluid ui button" color="primary" variant="contained" onClick={handleSubmit}>Sign UP</Button>
                    </Paper>
                </div>
            </form>
        </div>
    )
}