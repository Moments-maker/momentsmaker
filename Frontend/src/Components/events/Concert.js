import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Register from '../register/Register';
import { Navigate } from 'react-router-dom';
import wedding from "../../assets/Photography.jpg";
import party from "../../assets/Dining.jpg";
import halloween from "../../assets/Venue.jpg";
import concert from "../../assets/florist.jpg";
import corporate from "../../assets/Dj.jpg";
import funeral from "../../assets/Mua.jpg";
import designer from "../../assets/Designer.jpg";
import Officiate from "../../assets/officiate.jpg";
import NavBar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import {
    useNavigate,
} from 'react-router-dom';

const Concert = () => {

    const BASE_URL = "http://localhost:5000/api/v1/products";

    const [nav, setNav] = useState(false);
    const [res, setRes] = useState(false);
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
    const[data,setData] = useState();

    const handleClick = (path) => {
        console.log("clicked");

        navigate(path);
    }
//    const handleClick = async (path) => {
//         try {
//             const response = await fetch(BASE_URL);
//             const json = await response.json();
//             console.log(json.products);
//             setData(json.products);
//             handleNavigate(path);
//             // navigate(path,{data : data});
//         } catch (error) {
//             console.log("error", error);
//         }
//     };
//     const handleNavigate=()=>{
//         console.log(data)
//         // navigate("/Photography", {data:data})
//     }
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
        },
        {
            id: 3,
            src: halloween,
            title: "Venue",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: concert,
            title: "Flowers",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: corporate,
            title: "DJ and music",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: funeral,
            title: "Makeover Artists",
            style: "shadow-yellow-500",
        },
        {
            id: 7,
            src: designer,
            title: "Designer",
            style: "shadow-yellow-500",
        },
        {
            id: 8,
            src: Officiate,
            title: "Officiate",
            style: "shadow-yellow-500",
        },
    ];
    return (
        localStorage.getItem("authToken")?
        <div
            name="skills"
            className=" w-full h-screen "
        >
            <div className="flex justify-between items-center w-full h-21 px-4  fixed">
                <div>
                    <h1 className="text-3xl font-signature text-gray-500 ml-2">Moments </h1>
                    <h1 className="text-3xl font-signature text-gray-500 ml-2">Maker </h1>
                </div>
                <div className=" flex justify-center  text-3xl ml-10 font-bold content-center text-purple-500">
                Concert

                </div>
                <ul className="flex space-x-4 hidden md:flex px-4 text-black">
                    <li className='cursor-pointer capitalize font-medium text-lg text-purple-500 hover:scale-105 duration-200'><a href="/">Home</a></li>
                    {/* <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Events</a></li> */}
                    <li className='cursor-pointer capitalize font-medium text-lg text-purple-500 hover:scale-105 duration-200'><a href="/About">About</a></li>
                    <li className='cursor-pointer capitalize font-medium text-lg text-purple-500 hover:scale-105 duration-200'><a href="/PostAd">Post Ad</a></li>
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
            <div className="font-general max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full ">
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
                </div>
                <br></br>
                <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-white text-center py-16 px-12 sm:px-0">
                    {events.map(({ id, title, src, style, description, path }) => (

                        <div key={id} className="flex items-center justify-center  bg-purple-300 h-44 w-60">
                            <div className="group h-44 w-60 [perspective:1000px]">
                                <div className="relative h-44 w-60  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0">
                                        <img className="h-full w-full  object-cover shadow-xl shadow-black/40" src={src} alt="" />
                                    </div>
                                    <div className="absolute inset-0 h-full w-full  bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col">
                                            <Button className="text-lg font-bold " onClick={() => handleClick(path)}>{title}</Button>
                                            {/* <p className="text-sm py-4">{description}</p> */}
                                            <p className="text-base"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>:
        <div></div>
    );
}
export default Concert
