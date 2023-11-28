import React from 'react'
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
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
import { PropaneTankSharp } from '@mui/icons-material';
const Photography = ({ route }) => {

    const BASE_URL = "http://localhost:5000/api/v1/products";

    // const {data} = route.params;
    const [data, setData] = useState();
    const [nav, setNav] = useState(false);
    const [res, setRes] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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


    const fetchData = async () => {
        await fetch(BASE_URL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data.products)

                setLoading(true)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        loading ?
            <div
                name="skills"
                className=" w-full h-screen "
            >
                <div className="flex justify-between items-center w-full h-21 px-4  fixed">
                    <div>
                        <h1 className="text-3xl font-signature text-gray-500 ml-2">Moments </h1>
                        <h1 className="text-3xl font-signature text-gray-500 ml-2">Maker </h1>
                    </div>
                    <div className=" flex justify-center text-3xl ml-10 font-bold content-center text-purple-500">
                        PHOTOGRAPHY

                    </div>
                    <ul className="flex space-x-4 hidden md:flex px-4 text-black">
                        <li className='cursor-pointer capitalize font-medium text-lg text-purple-500 hover:scale-105 duration-200'><a href="/">Home</a></li>
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
                <div className='flex center'>
                        
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
                {/* <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-black text-center py-16 px-12 sm:px-0">
                {data[0].email}
                        {console.log(data[0].email)}
                    {
                        data.map(dataObj => {
                            <h1>{dataObj.contact}</h1>
                            console.log(dataObj.email)
                        })
                    }
                </div> */}
                <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-white text-center py-16 px-12 sm:px-0">
                    {console.log(data)}
                    {data.map(({ id, contact, email, description, name}) => (

                        <div key={id} className="flex items-right justify-right  bg-purple-300 h-52 w-60">
                            <div className="group h-52 w-60 [perspective:1000px]">
                                <div className="relative h-52 w-60  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div className="absolute inset-0 py-2">
                                    <p className="text-sm py-4">Name : {name}</p>
                                    <p className="text-sm py-4">Email : {email}</p>
                                    <p className="text-sm py-4">Contact : {contact}</p>
                                    <p className="text-sm py-4">Description : {description}</p>
                                        {/* <img className="h-full w-full  object-cover shadow-xl shadow-black/40" src={src} alt="" /> */}
                                    </div>
                                    <div className="absolute inset-0 h-full w-full  bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div className="flex min-h-full flex-col">
                                            {/* <Button className="text-lg font-bold " onClick={() => handleClick(path)}>{title}</Button> */}
                                            <p className="text-sm py-4">Email : {email}</p>
                                            <p className="text-sm py-4">Contact : {contact}</p>
                                            <p className="text-sm py-4">Description : {description}</p>
                                            <p className="text-base"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
                
            </div> :
            <div>
                HI
            </div>
    );
}
export default Photography
