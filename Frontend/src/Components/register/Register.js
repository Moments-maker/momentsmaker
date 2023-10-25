import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const rootUrl = 'http://localhost:5000';

const Register = () => {

    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                CLOSE
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            // onClick={handleClose}
            >
                <LockOutlinedIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        const user = { name, email, password };

        try {
            const url = `${rootUrl}/api/v1/auth/register`;
            // const url = `/api/v1/auth/login`;
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then(response => {
                if (response.status === 201) {
                    console.log('Success');
                    setMsg("user successfully registered")
                    navigate('/Events')
                } else {
                    console.log('Fail');
                    console.log(response.error)
                    setMsg("Email already exists")
                    console.log(response)
                }
            });
            setName('');
            setPassword('');
            setEmail('');
            setOpen(true);

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-cover bg-center w-screen  h-screen">
            <Grid className='flex flex-center'>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <label>REGISTER</label>
                    </Grid>
                    <form className='form flex flex-col space-y-4 mx-6' onSubmit={handleSubmit}>
                        <div className='form-row'>
                            <TextField id="standard-basic" label="Name" variant="standard" value={name}
                                onChange={(e) => setName(e.target.value)} />
                    
                        </div>
                        <div className='form-row'>
                            <TextField id="standard-basic" label="Email" variant="standard" value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className='form-row'>
                            <TextField id="standard-basic" label="Password" variant="standard" value={password} type="password"
                                onChange={(e) => setPassword(e.target.value)} />
                            
                        </div>
                        <Button type='submit' className='py-8' onClick={handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message={msg}
                            action={action}
                        />
                        <Typography > Do you have an account ?
                            <Link>
                                <a href='/Login'>Sign In
                                </a>
                            </Link>
                        </Typography>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default Register

