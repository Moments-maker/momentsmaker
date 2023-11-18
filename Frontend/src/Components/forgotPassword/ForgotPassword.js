import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from "../../assets/Profile.png";
import axios from 'axios';

const rootUrl = 'http://localhost:5000';

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');
    const [msg, setMsg] = useState('');

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    // const sendOTP = async () => {
    //     try {
    //       const response = await axios.post(`${rootUrl}/api/v1/auth/send-otp`, { email });
    //       setMsg(response.data.message);
    //     } catch (error) {
    //       setMsg('Error generating OTP');
    //     }
    // };

    // const verifyOTP = async () => {
    //     try {
    //       const response = await axios.post(`${rootUrl}/api/v1/auth/verify-otp`, { email, userOTP: otp });
    //       setMsg(response.data.message);
    //     } catch (error) {
    //       setMsg('Invalid OTP');
    //     }
    //   };
    const handleSendOTP = async (e) => {
        e.preventDefault();
        if(!email){
            return;
        }
        const user = {email}
        try{
            console.log(email)
            const url = `${rootUrl}/api/v1/auth/forgotPassword`;
            console.log(url)
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then(response =>{
                if(response.status === 201){
                    alert("user OTP is sent")
                    console.log('OTP sent successfully');
                    setMsg("OTP sent successfully")
                }
                else{
                    console.log('OTP not sent');
                    console.log(response.body.msg)
                    setMsg("OTP not sent")
                    console.log(response)
                }
            })

        }
        catch(error){
            console.log(error);
        }
    };
    const handleVerifyEmail = async (e) => {
        e.preventDefault();
        if (!otp) return;
        const user = {otp };

        try {
            const url = `${rootUrl}/api/v1/auth/verifyOTP`;
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(user),
            }).then(response => {
                if (response.status === 201) {
                    alert("Email verified successfully")
                    console.log('Success');
                    setMsg("Email verified successfully")
                    navigate('/NewPassword')
                } else {
                    alert("Invalid OTP, Try again")
                    console.log('Invalid OTP');
                    console.log(response.body.msg)
                    setMsg("Invalid OTP")
                    console.log(response)
                }
            });
            setOTP('');
            setEmail('');
            setOpen(true);

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
                    Forgot Password ? Don't you worry.
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleVerifyEmail} method="POST">
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
                        <Button 
                        type = "submit"
                        onClick={handleSendOTP}
                        variant="contained"
                        endIcon={<SendIcon />}>
                            Send OTP
                        </Button>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter OTP
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="otp"
                                name="otp"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setOTP(e.target.value)}
                                value={otp}
                            />
                        </div>
                    </div>
                    <div>
                    <button
                      type="submit"
                      onClick={handleVerifyEmail}
                      className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Verify Email
                    </button>
                  </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
