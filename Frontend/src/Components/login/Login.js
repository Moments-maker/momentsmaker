import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const rootUrl = 'http://localhost:5000';

const Login = () => {
    const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const navigate = useNavigate()
    const fetchLogout = async () => {
        const url = `${rootUrl}/api/v1/auth/logout`;
        // const url = `/api/v1/auth/logout`;
        await fetch(url);
      };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [msg, setMsg] = useState('');
    const [open, setOpen] = React.useState(false);

    
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
            >
            </IconButton>
        </React.Fragment>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) return;
        const user = { email, password };
    
        try {
          const url = `${rootUrl}/api/v1/auth/login`;
          // const url = `/api/v1/auth/login`;
          const res= await fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
          }).then(response => {
            if (response.status === 200) {
              console.log(response);
              navigate('/Events',{email})
            } else {
                console.log(response);
                setMsg("Invalid credentials")
              console.log('Fail');
            }
          });
          
          setPassword('');
          setEmail('');
          setOpen(true)
          
        } catch (error) {
          console.log(error);
        }
        
      };

    

    return (
        <Grid className='bg-cover bg-center w-screen  h-screen flex bg-center'>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                </Grid>
                <label className='flex flex-centre'>Login</label>
                <form className='form' onSubmit={handleSubmit}>
                    
                    <div className='form-row'>
                    <TextField id="standard-basic" label="Email" variant="standard" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-row'>
                    <TextField id="standard-basic" label="Password" variant="standard" value={password} type='password'
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                   
                </form>
                <Button type='submit'className='py-8' onClick={handleSubmit}  color='primary' variant="contained" style={btnstyle} fullWidth>Log in</Button>
                <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message={msg}
                            action={action}
                        />
                <Typography > Don't have an account ?
                    <Link  >
                        <a href='/Register'>Sign Up
                        </a>
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login