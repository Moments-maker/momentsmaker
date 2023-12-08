const express = require('express');
const router = express.Router();

const { register, login, logout, forgotPassword } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/forgotPassword', forgotPassword);

module.exports = router;
