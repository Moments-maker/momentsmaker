import React from 'react'
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import { Image } from 'cloudinary-react';

import {
    useNavigate,
} from 'react-router-dom';

const Photography = ({ route }) => {

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const BASE_URL = "http://localhost:5000/api/v1/products?category=Photography";

    // const {data} = route.params;
    const [data, setData] = useState();
    const [assetId, setAssetId] = useState('');
    const [nav, setNav] = useState(false);
    const [res, setRes] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
                setAssetId(data.products.image)
                setLoading(true)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        localStorage.getItem("authToken") && loading ?
            <div
                name="skills"
                className=" w-full h-screen "
            >

                <div className="flex justify-between items-center w-full h-21 px-4 ">
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

                    <div>
                    </div>
                    <br></br>

                    <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-white text-center py-16 px-12 sm:px-0">


                        {data.map(({ id, contact, email, description, name, image }) => (

                            <Card sx={{ maxWidth: 700 }} key={id}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                            {name[0]}
                                        </Avatar>
                                    }
                                    
                                    title={name}
                                // subheader={createdAt}
                                />
                                <CardMedia height="194" alt="Alternate text">
                                    {/* <Image cloudName='dz9d1dzrj' publicId="838ea5c3ad94222f3c63fcea40f84c9b"></Image> */}
                                </CardMedia>
                                <Image cloudName='dz9d1dzrj' publicId={image}></Image>

                                {/* <CardMedia
                                    component="img"
                                    height="194"
                                    image={imageUrl}
                                    alt="Paella dish"
                                /> */}
                                <CardContent>
                                    {description}
                                    <Typography variant="body2" color="text.secondary">

                                        CONTACT : {contact}

                                    </Typography>
                                    <Typography className="flex align-right"variant="body2" color="text.secondary" size="small">EMAIL : {email}</Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        {/* <FavoriteIcon /> */}
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        {/* <ShareIcon /> */}
                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        {/* <ExpandMoreIcon /> */}
                                    </ExpandMore>
                                </CardActions>
                            </Card>
                            // <div key={id} className="flex items-right justify-right  bg-purple-300 h-52 w-60">
                            //     <div className="group h-52 w-60 [perspective:1000px]">
                            //         <div className="relative h-52 w-60  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            //             <div className="absolute inset-0 py-2">
                            //                 <p className="text-sm py-4">Name : {name}</p>
                            //                 <p className="text-sm py-4">Email : {email}</p>
                            //                 <p className="text-sm py-4">Contact : {contact}</p>
                            //                 <p className="text-sm py-4">Description : {description}</p>
                            //                                                         </div>
                            //             <div className="absolute inset-0 h-full w-full  bg-black/80 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            //                 <div className="flex min-h-full flex-col">
                            //                     <p className="text-sm py-4">Email : {email}</p>
                            //                     <p className="text-sm py-4">Contact : {contact}</p>
                            //                     <p className="text-sm py-4">Description : {description}</p>
                            //                     <p className="text-base"></p>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                        ))}
                    </div>
                </div>
                <br></br>

            </div> :
            <div className='text-black font-extrabold'>
                <h1>No Data Found</h1>
            </div>
    );
}
export default Photography
