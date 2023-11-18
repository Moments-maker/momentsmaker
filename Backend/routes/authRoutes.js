const express = require('express');
const router = express.Router();

const { register, login, logout, forgotPassword,verifyOTP } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgotPassword', forgotPassword);
router.post('/verifyOTP', verifyOTP);

module.exports = router;
