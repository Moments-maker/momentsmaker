import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/Profile.png";

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
                    // console.log(response)
                    alert("user successfully registered")
                    console.log('Success');
                    setMsg("user successfully registered")
                    navigate('/Login')
                } else {
                    console.log('Fail');
                    console.log(response.body.msg)
                    setMsg("Email Already exists")
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
    return(
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-20 w-auto"
                  src={profile}
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign up to your account
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="email"   className="block text-sm font-medium leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={name} onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email"   className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                      />
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{' '}
                  <a href="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
      )
    // return (
    //     <div className="bg-cover bg-center w-screen  h-screen">
    //         <Grid className='flex flex-center'>
    //             <Paper elevation={10} style={paperStyle}>
    //                 <Grid align='center'>
    //                     <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
    //                     <label>REGISTER</label>
    //                 </Grid>
    //                 <form className='form flex flex-col space-y-4 mx-6' onSubmit={handleSubmit}>
    //                     <div className='form-row'>
    //                         <TextField id="standard-basic" label="Name" variant="standard" value={name}
    //                             onChange={(e) => setName(e.target.value)} />
                    
    //                     </div>
    //                     <div className='form-row'>
    //                         <TextField id="standard-basic" label="Email" variant="standard" value={email}
    //                             onChange={(e) => setEmail(e.target.value)} />

    //                     </div>
    //                     <div className='form-row'>
    //                         <TextField id="standard-basic" label="Password" variant="standard" value={password} type="password"
    //                             onChange={(e) => setPassword(e.target.value)} />
                            
    //                     </div>
    //                     <Button type='submit' className='py-8' onClick={handleSubmit} color='primary' variant="contained" style={btnstyle} fullWidth>Register</Button>
    //                     <Snackbar
    //                         open={open}
    //                         autoHideDuration={6000}
    //                         onClose={handleClose}
    //                         message={msg}
    //                         action={action}
    //                     />
    //                     <Typography > Do you have an account ?
    //                         <Link>
    //                             <a href='/Login'>Sign In
    //                             </a>
    //                         </Link>
    //                     </Typography>
    //                 </form>
    //             </Paper>
    //         </Grid>
    //     </div>
    // )
}

export default Register

