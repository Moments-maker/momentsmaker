import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import profile from "../../assets/Profile.png";
import wedding from "../../assets/Background.png";
import party from "../../assets/birthday.jpg";
import halloween from "../../assets/halloween.jpg";
import concert from "../../assets/concert.jpg";
import corporate from "../../assets/corporate.jpg";
import funeral from "../../assets/funeral.jpg";
import Box from '@mui/material/Box';
import NavBar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Login from '../login/Login';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

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



    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));

    const handleProfile = (event) => {
        setAnchorEl(event.currentTarget);
        // alert(param);
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
                className=" w-full h-screen bg-[#ffe7e3]"
            >

                <div className="flex justify-between items-center w-full h-21 px-4">
                    <div>
                        <h1 className="text-3xl font-signature text-black ml-2">Moments </h1>
                        <h1 className="text-3xl font-signature text-black ml-2">Maker </h1>
                    </div>
                    <div className=" flex justify-center text-3xl ml-10 font-bold content-center text-black">
                        EVENTS

                    </div>
                    <ul className="flex space-x-4 hidden md:flex px-4 text-black">
                        <li className='cursor-pointer capitalize font-medium text-lg text-black hover:scale-105 duration-200'><a href="/">Home</a></li>
                        {/* <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Events</a></li> */}
                        <li className='cursor-pointer capitalize font-medium text-lg text-black hover:scale-105 duration-200'><a href="/About">About</a></li>
                        <li className='cursor-pointer capitalize font-medium text-lg text-black hover:scale-105 duration-200'><a href="/PostAd">Post Ad</a></li>
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
                                {/* <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon> */}
                                Logout
                            </MenuItem>
                        </Menu>

                    </ul>

                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                    >
                        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

                    </div>

                    {nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue to-blue-800 text-gray-500">
                            {links.map(({ id, link, path }) => (

                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                >
                                    <Link
                                        onClick={() => setNav(!nav)}
                                        to={"/"}
                                        smooth
                                        duration={500}
                                    >
                                        {path}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="font-general max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">

                    

                    <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-white text-center py-8 px-12 sm:px-0">

                        {events.map(({ id, title, src, style, description, path }) => (
                        
                            <div key={id} className="flex items-center justify-center h-44 w-60">
                                <div className="group h-44 w-60 [perspective:1000px]">
                                    <div className="relative h-44 w-60 shadow-xl ">
                                        <div className="absolute inset-0">
                                            {/* <ImageSrc style={{ backgroundImage:{src}}} /> */}
                                            <img className="max-w-xs transition duration-300 ease-in-out hover:scale-110 h-44 w-60" src={src} alt="" />
                                        </div>
                                        {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com --> */}

                                        <div className="absolute inset-0 h-full w-full   px-12 text-slate-200">
                                            <div className="flex min-h-full flex-col">
                                                {/* <ImageButton onClick={() => handleClick(path)}>{title}</ImageButton> */}
                                                <Button className="text-lg font-bold position-relative " onClick={() => handleClick(path)}>{title}</Button>
                                                {/* <ImageBackdrop className="MuiImageBackdrop-root" /> */}
                                                <p className="text-sm py-4">{description}</p>
                                                <p className="text-base"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
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
