import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Register from '../register/Register';
import { Navigate } from 'react-router-dom';
import wedding from "../../assets/Background.png";
import party from "../../assets/birthday.jpg";
import halloween from "../../assets/halloween.jpg";
import concert from "../../assets/concert.jpg";
import corporate from "../../assets/corporate.jpg";
import funeral from "../../assets/funeral.jpg";
import NavBar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';

const Wedding = () => {
    const [nav, setNav] = useState(false);
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
    const handleClick = () => {
        console.log("clicked");
    }

    const events = [
        {
            id: 1,
            src: wedding,
            title: "Vendor1",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: party,
            title: "Vendor2",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: halloween,
            title: "Vendor3",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: concert,
            title: "Vendor4",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: corporate,
            title: "Vendor5",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: funeral,
            title: "Vendor6",
            style: "shadow-yellow-500",
        },
        {
            id: 7,
            src: funeral,
            title: "Vendor7",
            style: "shadow-yellow-500",
        },
        {
            id: 8,
            src: funeral,
            title: "Vendor8",
            style: "shadow-yellow-500",
        },
    ];
    return (
        <div name="Wedding" className='bg-gradient-to-r  h-screen'>
            <div className="font-general max-w-screen-lg ml-72 p-4 flex flex-col justify-center  ">
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
            <div>
                    <p className=" flex justify-center  text-gray-600 text-3xl font-bold inline border-b-2 ">
                            WEDDING
                    </p>

                </div>
                <Sidebar></Sidebar>
            <div className="w-full  grid grid-cols-4 sm:grid-cols-4 gap-8 text-white text-center py-8 px-12 sm:px-0">
        
                    {events.map(({ id, title, src, style, description,path }) => (

                        <div key={id} class="flex items-center justify-center rounded-xl bg-purple-300 h-40 w-56">
                            <div class="group h-40 w-56 [perspective:1000px]">
                                <div class="relative h-40 w-56 rounded-xl shadow-xl ">
                                    <div class="absolute inset-0">
                                        {/* <img class="h-full w-full rounded-xl object-cover shadow-xl" src={src} alt="" /> */}
                                    </div>
                                    <div class="absolute inset-0 h-full w-full rounded-xl  px-12 text-slate-200 ">
                                        <div class="flex min-h-full flex-col">
                                            <Button class="text-lg font-bold " onClick={() => handleClick()}>{title}</Button>
                                            <p class="text-sm py-4">{description}</p>
                                            <p class="text-base"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div></div>
    );
}
export default Wedding
