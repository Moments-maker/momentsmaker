import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/Profile.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

const rootUrl = 'http://localhost:5000';

const User = () => {

 const handleClick=async()=>{
    console.log("Clicked")
    // const user = localStorage.getItem("authToken")
    try {
        const url = `${rootUrl}/api/v1/users/showMe`;
        // const url = `/api/v1/auth/login`;
        await fetch(url, {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
          },
        //   body: JSON.stringify(user),
        }).then(response => {
          if (response.status === 200) {
            alert("Success")
            console.log('Success');
            // setMsg("vendor successfully registered")
            // navigate('/Login')
          } else {
            console.log('Fail');
            console.log(response.body.msg)
            // setMsg("Email Already exists")
            console.log(response)
          }
        });
  
      } catch (error) {
        console.log(error);
      }
 }
  return (
    <div>
        <Button onClick={handleClick}>
            ShowMe
        </Button>
    </div>
  )

}

export default User

