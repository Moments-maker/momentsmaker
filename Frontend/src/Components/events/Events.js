import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import profile from "../../assets/Profile.png";
import wedding from "../../assets/Background.jpg";
import party from "../../assets/birthday.jpg";
import halloween from "../../assets/halloween.jpg";
import concert from "../../assets/concert.jpg";
import corporate from "../../assets/corporate.jpg";
import funeral from "../../assets/funeral.jpg";
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Login from '../login/Login';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import logo from "../../assets/Logo.png";


import {
    useNavigate,
} from 'react-router-dom';

const Events = ({ route }) => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const links = [
        {
            id: 1,
            link: "home",
            path: "/home",
        },
        {
            id: 2,
            link: "about",
            path: "/home",
        },
        {
            id: 3,
            link: "events",
            path: "/home",
        },
        {
            id: 4,
            link: "Post AD",
            path: "/PostAd",
        },
    ];


    const theme = useTheme();
    const location = useLocation();
    const param = localStorage.getItem("name");
    console.log(param)
    const handleClick = (path) => {
        console.log("clicked");
        navigate(path);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    const events = [
        {
            id: 1,
            src: wedding,
            title: "Wedding",
            style: "shadow-orange-500",
            path: "/Wedding"
        },
        {
            id: 2,
            src: party,
            title: "Birthday",
            style: "shadow-blue-500",
            path: "/Birthday"
        },
        {
            id: 3,
            src: halloween,
            title: "Themed Party",
            style: "shadow-yellow-500",
            path: "/ThemedParty"
        },
        {
            id: 4,
            src: concert,
            title: "Concert",
            style: "shadow-yellow-500",
            path: "/Concert"
        },
        {
            id: 5,
            src: corporate,
            title: "Corporate Event",
            style: "shadow-yellow-500",
            path: "/Corporate"
        },
        {
            id: 6,
            src: funeral,
            title: "Funeral",
            style: "shadow-yellow-500",
            path: "/Funeral"
        },
    ];

    const handleProfile = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("clicked")
    }
    const handleProfileInfo = (event) => {
        navigate('/user')
    }
    const handleLogout = async () => {
        const url = "http://localhost:5000/api/v1/auth/logout";
        await fetch(url);
        localStorage.removeItem('authToken');
        alert("user logged out");
        navigate('/')
    }

    return (
        localStorage.getItem("authToken") && localStorage.getItem("name") ?
            <div
                name="skills"
                className=" w-full  bg-[#ffe7e3]"
            >

                <div className="flex justify-between items-center w-full h-21 px-4">
                    <div>
                        <img src={logo} alt="Logo" width="150" height="150"></img>
                    </div>
                    <div className="flex justify-center text-5xl ml-10 font-bold content-center text-[#E10C69]">
                        EVENTS

                    </div>
                    <ul className="flex space-x-4 hidden md:flex px-4 text-black">
                        <li className='cursor-pointer capitalize font-medium  hover:scale-105 duration-200 text-[#E10C69] text-2xl'><a href="/">Home</a></li>
                        <li className='cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-[#E10C69] text-2xl'><a href="/About">About</a></li>
                        <li className='cursor-pointer capitalize font-medium     hover:scale-105 duration-200 text-[#E10C69] text-2xl'><a href="/PostAd">Post Ad</a></li>
                        <Button id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleProfile}>
                            <img src={profile} alt="alt text" width={35} height={35}></img>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Hi {param}</MenuItem>
                            <MenuItem onClick={handleProfileInfo}>My account</MenuItem>
                            <MenuItem onClick={handleLogout}>
                                Logout
                            </MenuItem>
                        </Menu>

                    </ul>

                </div>

                <div className="font-general max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full h-full ">


                    <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-white text-center py-4 px-12 sm:px-0">

                        {events.map(({ id, title, src, style, description, path }) => (
                            // <div key={id} className="flex items-center justify-center">
                            //     <div className="group h-96 w-64 perspective-1000px">
                            //         <div className="relative h-96 w-64 shadow-lg">
                            //             <div className="absolute inset-0">
                            //                 <img className="h-full w-full object-cover shadow-xl shadow-black/40" src={src} alt="" />
                            //             </div>

                            //             <div className="absolute inset-0 flex flex-col items-end ">
                            //                 {/* Your button component */}
                            //                 <Button variant="contained" color="secondary" className="text-lg text-white font-bold" onClick={() => handleClick(path)}>
                            //                     {title}
                            //                 </Button>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                            <div key={id} className="flex items-center justify-center">
                                <div className="group h-96 w-64 perspective-1000px">
                                    <div className="relative h-56 w-64 shadow-lg">
                                        <div className="absolute inset-0">
                                            <img className="h-full w-full object-cover shadow-xl shadow-black/40" src={src} alt="" />
                                        </div>

                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            {/* Use ButtonBase for the ripple effect */}
                                            <ButtonBase
                                                focusRipple
                                                key={title}
                                                className="text-lg text-white font-bold"
                                                onClick={() => handleClick(path)}
                                                style={{
                                                    width: '100%',
                                                }}
                                            >
                                                <span className="text-lg text-white font-bold">{title}</span>
                                            </ButtonBase>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            // <div key={id} className="flex items-center justify-center">
                            //     <div className="group h-96 w-64 [perspective:1000px]">

                            //         <div className="relative h-56 w-72 shadow-lg ">
                            //         <div className="absolute inset-0">
                            //             <img className="h-full w-full  object-cover shadow-xl shadow-black/40" src={src} alt=""  />

                            //         </div>



                            //             <div>
                            //             <Button variant="contained" color="secondary" className="text-lg text-white font-bold " onClick={() => handleClick(path)}>{title}</Button>

                            //             </div>
                            //         </div>
                            //     </div>

                            // </div>
                        ))}
                    </div>
                </div>
            </div> :
            <div className="text-black flex justify-centre">
                <Login></Login>
            </div>

    );
}
export default Events
