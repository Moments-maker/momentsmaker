import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from '@mui/material/Button';
import NavBar from "../navbar/Navbar";
import logo from "../../assets/Logo.png";
import profile from "../../assets/Profile.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
    useNavigate,
  } from 'react-router-dom';
const About = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
            path: "/",
        },
        {
            id: 2,
            link: "about",
            path: "/about",
        },
        {
            id: 3,
            link: "events",
            path: "/events",
        },
        {
            id: 4,
            link: "Sign in",
            path: "/Login",
        },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const param = localStorage.getItem("name")
  
    const handleClose = () => {
        setAnchorEl(null);
      };
    
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
      }
    return (
        <div
            name="home"
            className="bg-about bg-opacity-50 bg-cover bg-center h-screen overflow-hidden text-black"
        >
            {/* <NavBar/> */}
            <div className="flex justify-between items-center w-full h-19 px-4   fixed">

                <div>
                <img src={logo} alt="Logo" width="150" height="150"></img>
                    {/* <h1 className="text-3xl text-grey-500 font-signature ml-2">Moments </h1>
                    <div><h1 className="text-3xl text-grey-500 font-signature ml-2">Maker </h1></div> */}
                </div>

                <ul className="flex space-x-4 hidden md:flex px-4 text-[#E10C69]">
            <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200 text-2xl'><a href="/">Home</a></li>
            <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200 text-2xl'><a href="/About">About</a></li>
            {localStorage.getItem("authToken") ? <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200 text-2xl'><a href="/Events">Events</a></li>
              :
              <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200 text-2xl'><a href="/Login">Events</a></li>}
            {localStorage.getItem("authToken") ?
              <li><Button id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleProfile}>
                <img src={profile} alt="alt text" width={40} height={40}></img>
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
                </Menu></li> :
              <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200 text-2xl'><a href="/Login">Sign In</a></li>

            }
          </ul>
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
            <div className="font-display max-w-screen-xl mx-auto flex  items-start justify-start h-full px-4 md:flex-row w-full text-black">
                <div className="flex flex-col text-4xl justify-center h-full">
                    <h2 className="text-5xl sm:text-6xl font-bold text-center text-[#E10C69]">
                        ABOUT US
                    </h2>
                    <div className="grid  gap-4" >
                        <h3 className="py-6 text-centre text-4xl font-light">

                            {/* At Moments Maker, we are passionate about turning your special moments into unforgettable experiences. We understand that planning and executing events can be both exciting and overwhelming, and that's where we come in. With a team of dedicated and creative professionals, we are here to make your dreams a reality.</h3> */}
                            Moments Maker is dedicated to turning special moments into unforgettable experiences. The team, comprised of passionate and creative professionals, aims to alleviate the stress of event planning while making dreams a reality. Services include meticulous event planning, customized themes and decor, venue selection and management, diverse entertainment options, catering services, photography and videography, logistics and guest management, and budget management. The focus is on creating personalized and unique experiences that capture the essence of each celebration, ensuring lasting memories. Moments Maker is committed to delivering seamless and stress-free events that exceed expectations.
                            </h3>
                        <p></p> 
                        <div className="py-6 flex justify-center text-3xl font-light "><p>Get in Touch &nbsp;</p>
                        <p>email : momentmakers@gmail.com &nbsp;</p>
                            <div><p>phone : +1 (123) 456 7890</p></div></div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full text-white">
                <div className="flex flex-col justify-center h-full">
                    <div className="grid grid-cols-2 gap-4" >
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;
