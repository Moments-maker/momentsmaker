import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./login.css";
import Cookies from 'universal-cookie';
import profile from "../../assets/Profile.png";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    console.log("clicked")
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };
    // console.log(user)
    try {
      const url = `${rootUrl}/api/v1/auth/login`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(user),
      })

      if (res.status == 200) {
        const responseBody = await res.text();

        // Parse JSON after saving body
        const jsonResponse = JSON.parse(responseBody);
        const token = jsonResponse.user.token;
  
        const oneDay = 1000 * 60 * 60 * 24;
        let cookies = new Cookies();
  
        cookies.set('token', token, {
          path: '/',
          expires: new Date(Date.now() + oneDay),
        });
        console.log(jsonResponse.user)
        localStorage.setItem('authToken', cookies.get('token'));
        localStorage.setItem('name', jsonResponse.user.name);
        localStorage.setItem('userId', jsonResponse.user.userId);
        navigate('/Events', {  state: { param: jsonResponse.user.name }});
      }
      else {
        console.log(res);
        setMsg("Invalid credentials")
        console.log('Fail');
      }
      setPassword('');
      setEmail('');
      setOpen(true)

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src={profile}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={msg}
            action={action}
          />
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a href="/Register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )

}

export default Login