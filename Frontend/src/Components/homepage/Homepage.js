import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import { } from 'react-router-dom';
import About from '../about/About';
import profile from "../../assets/Profile.png";
import {
  useNavigate,
} from 'react-router-dom';
import NavBar from '../navbar/Navbar';
const Homepage = () => {
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const param = localStorage.getItem("name")
  const navigate = useNavigate();

  const links = [
    {
      id: 1,
      link: "home",
      path: "/home",
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
      link: "Register",
      path: "/Register",
    },
  ];

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
  // const handleEventsClick = async()=>{
  //   Navigate("/login")
  // }
  return (
    <div>
      <div
        name="home"
        className="bg-about bg-opacity-50 bg-cover bg-center w-full h-screen overflow-hidden text-black"
      >
        <div className="flex justify-between items-center w-full h-19 px-4   fixed">

          <div>
            <h1 className="text-3xl text-grey-500 font-signature ml-2">Moments </h1>
            <div><h1 className="text-3xl text-grey-500 font-signature ml-2">Maker </h1></div>
          </div>
          <ul className="flex space-x-4 hidden md:flex px-4 text-black">
            <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/">Home</a></li>
            <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/About">About</a></li>
            {localStorage.getItem("authToken") ? <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Events">Events</a></li>
              :
              <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Events</a></li>}
            {localStorage.getItem("authToken") ?
              <li><Button id="basic-button"
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
                </Menu></li> :
              <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Sign In</a></li>

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
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full text-black">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-6xl font-bold text-black">
              WELCOME TO MOMENTS MAKER
            </h2>
            <div className="grid grid-cols-2 gap-4" >
              <p className="py-6 text-centre text-lg font-extrabold">
                One Stop destination to plan your events
              </p>
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
      <About />
    </div>
  )

}
<About />
export default Homepage