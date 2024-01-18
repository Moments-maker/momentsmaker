import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import wedding from "../../assets/Photography.jpg";
import party from "../../assets/Dining.jpg";
import halloween from "../../assets/Venue.jpg";
import concert from "../../assets/florist.jpg";
import corporate from "../../assets/Dj.jpg";
import funeral from "../../assets/Mua.jpg";
import designer from "../../assets/Designer.jpg";
import Officiate from "../../assets/officiate.jpg";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import profile from "../../assets/Profile.png";
import ButtonBase from '@mui/material/ButtonBase';
import {
    useNavigate,
} from 'react-router-dom';
import logo from "../../assets/Logo.png";

const Wedding = () => {

    const BASE_URL = "http://localhost:5000/api/v1/products";
    const param = localStorage.getItem("name");
    const [nav, setNav] = useState(false);
    const [res, setRes] = useState(false);
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
            link: "Register",
            path: "/Register",
        },
    ];
    const [data, setData] = useState();

    const handleClick = (path) => {
        console.log("clicked");

        navigate(path);
    }
    const events = [
        {
            id: 1,
            src: wedding,
            title: "Photography",
            path: "/Photography",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: party,
            title: "Dining",
            style: "shadow-blue-500",
            path: "/Dining",
        },
        {
            id: 3,
            src: halloween,
            title: "Venue",
            style: "shadow-yellow-500",
            path: "/Venue"
        },
        {
            id: 4,
            src: concert,
            title: "Flowers",
            style: "shadow-yellow-500",
            path: "/Decoration"
        },
        {
            id: 5,
            src: corporate,
            title: "DJ and music",
            style: "shadow-yellow-500",
            path: "/Music"
        },
        {
            id: 6,
            src: funeral,
            title: "Makeover Artists",
            style: "shadow-yellow-500",
            path: "/Mua"
        },
        {
            id: 7,
            src: designer,
            title: "Designer",
            style: "shadow-yellow-500",
            path: "/Designer"
        },
        {
            id: 8,
            src: Officiate,
            title: "Officiate",
            path: "/Officiate",

            style: "shadow-yellow-500",
        },
    ];
    const handleProfile = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("clicked")
    }
    const handleProfileInfo = (event) => {
        navigate('/user')
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = async () => {
        const url = "http://localhost:5000/api/v1/auth/logout";
        await fetch(url);
        localStorage.removeItem('authToken');
        alert("user logged out");
        navigate('/')
    }
    return (
        localStorage.getItem("authToken") ?
            <div
                name="skills"
                className=" w-full bg-[#ffe7e3] "
            >
                <div className="flex justify-between items-center w-full h-21 px-4">
                    <div>
                        <img src={logo} alt="Logo" width="150" height="150"></img>
                    </div>
                    <div className="flex justify-center text-5xl ml-10 font-bold content-center text-[#E10C69]">
                            WEDDING

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
                    <div className="flex justify-between items-center w-full h-19 px-4  fixed">
                        <div
                            onClick={() => setNav(!nav)}
                            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
                        >
                            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </div>

                        {nav && (
                            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue to-blue-800 text-gray-500">
                                {links.map(({ id, link }) => (
                                    <li
                                        key={id}
                                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                    >
                                        <Link
                                            onClick={() => setNav(!nav)}
                                            to={link}
                                            smooth
                                            duration={500}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="font-general max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full h-full ">
                        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-8 text-white text-center py-4 px-12 sm:px-0">

                            {events.map(({ id, title, src, style, description, path }) => (
                                <div key={id} className="flex items-center justify-center">
                                    <div className="group h-96 w-64 perspective-1000px">
                                        <div className="relative h-56 w-64 shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                            <div className="absolute inset-0">
                                                <img className="h-full w-full object-cover shadow-xl shadow-black/40" src={src} alt="" />
                                            </div>

                                            <div className="absolute inset-0 flex flex-col items-center justify-center ">
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
                            ))}
                        </div>
                    </div>
                </div>
            </div> :
            <div></div>
    );
}
export default Wedding
