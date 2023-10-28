import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Homepage = () => {
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
  return (
    <div
      className="bg-background bg-opacity-50 bg-cover bg-center w-full h-screen text-white"
    >
      <div className="flex justify-between items-center w-full h-19 px-4   fixed">
        <div>
          <h1 className="text-3xl text-grey-500 font-signature ml-2">Moments </h1>
          <div><h1 className="text-3xl text-grey-500 font-signature ml-2">Maker </h1></div>
        </div>

        <ul className="flex space-x-4 hidden md:flex px-4 text-gray-50">
          <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/">Home</a></li>
          <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Events</a></li>
          <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Home">About</a></li>
          <li className='cursor-pointer capitalize font-medium text-grey-500 hover:scale-105 duration-200'><a href="/Login">Sign In</a></li>
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
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
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

  )
}
export default Homepage