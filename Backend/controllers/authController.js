const User = require('../models/User');
const mongoose = require('mongoose');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');
const { attachCookiesToResponse, createTokenUser } = require('../utils');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
// const { v4: uuidv4 } = require('uuid');

const register = async (req, res) => {
  const { email, name, password } = req.body;
  
  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    res.status(400).json({ error: 'Email already exists' });
    throw new CustomError.BadRequestError('Email already exists'); 
  }

  // first registered user is an admin
  const isFirstAccount = (await User.countDocuments({})) === 0;
  const role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create({ name, email, password, role });
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
};
const updatePassword = async (req,res)=>{
  const { email } = req.body;

  const user = await User.findOne({email});
  const tokenUser = createTokenUser(user);
  attachCookiesToResponse({ res, user: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser });
}
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomError.BadRequestError('Please provide email and password');
  }
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError('Invalid Credentials');
  }
  var tokenUser = createTokenUser(user);
  const token  = attachCookiesToResponse({ res, user: tokenUser });
  tokenUser.token = token;

  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};

const realOTP = Math.floor(100000 + Math.random() * 900000).toString();

const verifyOTP = async (req,res) => {
  const {otp} = req.body;

  try{
    if(otp != realOTP){
      throw new CustomError.UnauthenticatedError('Invalid OTP');
      
    }
    res.status(201).json({ message: 'OTP Verified' });
  }
  catch(error){
    res.status(500).json({error});
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try{
    const emailAlreadyExists = await User.findOne({email:email});
    console.log(emailAlreadyExists);
    if (!emailAlreadyExists) {
      res.status(400).json({ error: 'Email does not exists' });
      throw new CustomError.BadRequestError('Email does not exists'); 
    }
  }
  catch(error){
    console.log(error)
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "son4selv4@gmail.com",
      pass: "lwxo mueh mrkd cikq",
    },
  });

  try {
    const mailOptions = {
      from: 'momentsmaker7@gmail.com',
      to: email,
      subject: 'OTP Verification',
      html:`<h3>Your OTP for email verification is: ${realOTP}</h3>`
    };  
    console.log(transporter)
    await transporter.sendMail(mailOptions).then(()=>{
      return res.status(201).json({message:"OTP sent successfully"})
    });
    res.status(201).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    res.status(500).json({ error});
  }
};


module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  verifyOTP
};
