import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import axios from 'axios';

// import "./login.css";
import Cookies from 'universal-cookie';
import profile from "../../assets/Profile.png";
const rootUrl = 'http://localhost:5000';

const PostAd = () => {
    // const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
    // const avatarStyle = { backgroundColor: '#1bbd7e' }
    // const btnstyle = { margin: '8px 0' }
    // const navigate = useNavigate()
    const fetchLogout = async () => {
        const url = `${rootUrl}/api/v1/auth/logout`;
        await fetch(url);
    };
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    // const [name, setname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [password, setPassword] = useState('');
    const [category, setCategory] = useState('');
    const [msg, setMsg] = useState('');
    const [contact, setcontact] = useState('');
    const [image, setImage] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [fileUrl, setFileUrl] = useState('');

    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const names = [
        'Photography',
        'Dining',
        'Venue',
        'Decoration',
        'Music',
        'ClothingDesigner',
        'MakeoverArtist',
    ];

    function getStyles(name, category, theme) {
        return {
            fontWeight:
                category.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const theme = useTheme();
    // const [category, setcategory] = React.useState([]);

    // const handleChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setCategory(
    //         // On autofill we get a stringified value.
    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };
    const handleUploadImage = (files) => {
        console.log(files[0])
        const formdata = new FormData();
        formdata.append("file",files[0]);
        formdata.append("upload_preset","aqtfzhro");
        axios.post("https://api.cloudinary.com/v1_1/dz9d1dzrj/image/upload",formdata)
        .then((response)=>{
            console.log(response.data)
            // const selectedFile = files[0]
            setImage(response.data.public_id);
        }
        )
    }

    const handleSubmit = async (e) => {
        console.log("image",image)
        e.preventDefault();
        // if (!email || !password) return;
        const user = { name, email, contact, description, category, image };
        try {
            const cookies = new Cookies();
            const url = `${rootUrl}/api/v1/products`;
            // const url = `/api/v1/auth/login`;
            await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'Authorization': `${cookies.get('token')}`
                }),
                credentials: 'same-origin',
                body: JSON.stringify(user),
            }).then(response => {
                if (response.status === 201) {
                    alert("AD posted successfully")
                    console.log('Success');
                    setMsg("AD posted successfully")
                    navigate('/Events')
                }
                else if (response.status === 403) {
                    alert("You are UnAuthorized to do this operation!")
                }
                else {
                    console.log('Fail');
                    setMsg("Email Already exists")
                }
            });
            setName('');
            setPassword('');
            setEmail('');
            setOpen(true);

        } catch (error) {
            console.log(error);
        }
    };


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                CLOSE
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
            >
            </IconButton>
        </React.Fragment>
    );
   
    return (

        localStorage.getItem("authToken") ?


            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                {/* <div className="flex justify-between items-center w-full h-19 px-4   fixed"> */}
                <div>
                    <h1 className="text-3xl text-black font-signature ml-2">Moments </h1>
                    <div><h1 className="text-3xl text-black font-signature ml-2">Maker </h1></div>
                </div>
                {/* </div> */}
                <Paper elevation={3}>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Post your Advertisement
                    </h2>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* <img
                    className="mx-auto h-20 w-auto"
                    src={profile}
                    alt="Your Company"
                /> */}
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Vendor Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={name} onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Vendor Description
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="description"
                                        name="description"
                                        type="description"
                                        autoComplete="description"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={description} onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                {/* <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label> */}
                                <div className="flex items-center justify-between">

                                    {/* <div className="mt-2">
                                    <input
                                        id="description"
                                        name="description"
                                        type="description"
                                        autoComplete="description"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={category} onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div> */}
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={category}
                                                label="Category"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={'Photography'}>Photography</MenuItem>
                                                <MenuItem value={"Venue"}>Venue</MenuItem>
                                                <MenuItem value={"Catering"}>Catering</MenuItem>
                                                <MenuItem value={"Decoration"}>Decoration</MenuItem>
                                                <MenuItem value={"Music"}>Music</MenuItem>
                                                <MenuItem value={"ClothingDesigner"}>ClothingDesigner</MenuItem>
                                                <MenuItem value={"MakeoverArtist"}>MakeoverArtist</MenuItem>
                                                {/* <MenuItem value={"Dining"}>Dining</MenuItem> */}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                                <div className="mt-2">

                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Business Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    contact
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="contact"
                                        name="contact"
                                        type="contact"
                                        autoComplete="contact"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={contact} onChange={(e) => setcontact(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="uploadImage" className="block text-sm font-medium leading-6 text-gray-900">
                                    Upload Image
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image"
                                        name="image"
                                        type="file"
                                        autoComplete="contact"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                         onChange={(e) => handleUploadImage(e.target.files)}
                                    />
                                    
                                </div>
                                
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </Paper>
            </div> :
            <div></div>
    )

}

export default PostAd