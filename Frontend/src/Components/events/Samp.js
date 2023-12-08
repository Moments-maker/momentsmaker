import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';

import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


const rootUrl = 'http://localhost:5000';

const Samp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('sona123@gmail.com');
  const [password, setPassword] = useState('secret');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = React.useState(false);



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
  
        // Use saved responseBody for further processing if needed
        // Here you can access the response as text: responseBody
        console.log(jsonResponse.user.name)
        localStorage.setItem('authToken', cookies.get('token'));
        navigate('/Events', { isLoggedIn });
      }
      else {
        console.log(res);
        setMsg("Invalid credentials")
        console.log('Fail');
      }

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Button onClick={handleSubmit}> Click Me </Button>
    </div>
  )
}

export default Samp