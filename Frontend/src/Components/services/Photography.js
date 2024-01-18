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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/Logo.png";
import Button from '@mui/material/Button';
import profile from "../../assets/Profile.png";
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
    const param = localStorage.getItem("name");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleClose = () => {
        setAnchorEl(null);
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

    const handleProfile = (event) => {
        setAnchorEl(event.currentTarget);
        console.log("clicked")
    }
    const handleProfileInfo = (event) => {
        navigate('/user')
    }
    const handleLogout = async () => {
        const url = "http://localhost:5000/api/v1/auth/logout";
        await fetch(url);
        localStorage.removeItem('authToken');
        alert("user logged out");
        navigate('/')
    }

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
                className=" w-full bg-[#ffe7e3]"
            >

                <div className="flex justify-between items-center w-full h-19 px-4">

                    <div>
                        <img src={logo} alt="Logo" width="150" height="150"></img>
                    </div>
                    <div className="flex justify-center text-5xl ml-10 font-bold content-center text-[#E10C69]">
                            PHOTOGRAPHY

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

            
                </div>
               
                <div className="font-general max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full ">

                    
                    <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-16 text-white text-center py-16 px-12 sm:px-0">


                        {data.map(({ id, contact, email, description, name, image }) => (

                            <Card sx={{ maxWidth: 900 }} key={id}>
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
                                    <Typography className="flex align-right" variant="body2" color="text.secondary" size="small">EMAIL : {email}</Typography>
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
