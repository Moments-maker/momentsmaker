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
import { Button } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import {
    useNavigate,
} from 'react-router-dom';

const User = ({ route }) => {

    const [open, setOpen] = React.useState(false);
    const [deletePost, setDeletePost] = useState(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = (id) => {
        console.log(id)
        setOpen(true);
        setDeletePost(id);
    };

    const handleClose = () => {
        setOpen(false);
    };



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

    const userId = localStorage.getItem("userId")
    const BASE_URL = `http://localhost:5000/api/v1/products?userId=${userId}`

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
                // console.log(BASE_URL)
                setData(data.products)
                setAssetId(data.products.image)
                setLoading(true)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async () => {
        console.log(deletePost)
        const YOUR_URL = `http://localhost:5000/api/v1/products/${deletePost}`
        console.log(YOUR_URL)
        const response = await fetch(YOUR_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data1 = await response.json();
        console.log(data1);
        setOpen(false)
        fetchData()
        // alert("Post successfully deleted")
    };

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
                        MY PROFILE

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
                    {Array.isArray(data) && data.length > 0} ?
                    <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-white text-center py-16 px-12 sm:px-0">

                        {console.log((data))}
                        {/* {console.log(userId)} */}
                        {data.map(({ id, contact, email, description, name, createdAt, image }) => (

                            <Card sx={{ maxWidth: 500 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                                            {name[0]}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            {/* <MoreVertIcon onClick={() => handleDelete(id)} /> */}
                                        </IconButton>
                                    }
                                    title={name}
                                // subheader={createdAt}
                                />
                                <CardMedia absolute inset-0 alt="Alternate text">
                                    <Image h-full w-full cloudName='dz9d1dzrj' publicId={image}></Image>
                                </CardMedia>


                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">

                                        {description}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">

                                    </IconButton>
                                    <IconButton aria-label="share">

                                    </IconButton>
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                    </ExpandMore>
                                    <Button onClick={() => handleClickOpen(id)} color="error" variant="contained" size="small">Delete Post</Button>
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                            {" Are you sure, you want to delete your post?"}
                                        </DialogTitle>
                                        <DialogActions>
                                            <Button color="error" onClick={() => handleDelete()}>
                                                Delete
                                            </Button>
                                            <Button onClick={handleClose} autoFocus>
                                                Cancel
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    {/* <div>Something went wrong</div> */}
                                </CardActions>

                            </Card>


                        ))}
                    </div>
                </div>
                <br></br>

            </div> :
            <div>
            </div>
    );
}
export default User
