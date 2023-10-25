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

const Events = () => {
    const handleClick = () => {
        console.log("clicked");
    }
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };
    const events = [
        {
            id: 1,
            src: wedding,
            title: "Wedding",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: party,
            title: "Birthday",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: halloween,
            title: "Themed Party",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: concert,
            title: "Concert",
            style: "shadow-yellow-500",
        },
        {
            id: 5,
            src: corporate,
            title: "Corporate Event",
            style: "shadow-yellow-500",
        },
        {
            id: 6,
            src: funeral,
            title: "Funeral",
            style: "shadow-yellow-500",
        },
    ];

    return (
        <div
            name="skills"
            className=" w-full h-screen"
        >
            <div className="font-general max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
                <div>
                    <p className=" flex justify-center text-3xl font-bold inline border-b-2 content-center">
                        Events
                    </p>

                </div>
                <br></br>
                <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-white text-center py-8 px-12 sm:px-0">
                    {events.map(({ id, title, src, style, description }) => (

                        <div key={id} class="flex items-center justify-center rounded-xl bg-purple-300 h-44 w-60">
                            <div class="group h-44 w-60 [perspective:1000px]">
                                <div class="relative h-44 w-60 rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                    <div class="absolute inset-0">
                                        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={src} alt="" />
                                    </div>
                                    <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                        <div class="flex min-h-full flex-col">
                                            <h1 class="text-lg font-bold ">{title}</h1>
                                            <p class="text-sm py-4">{description}</p>
                                            <p class="text-base"></p>
                                            {/* <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        // <div
                        //   key={id}
                        //   className={`hover:scale-105 duration-500 py-2 shadow-md`}
                        // >
                        //   <img src={src} alt="" className="w-24 mx-auto rounded-lg" />
                        //   <p className="mt-4">{title}</p>
                        // </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Events
