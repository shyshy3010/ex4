const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);


router.post('/login', userController.loginUser);

router.get('/details', userController.getUserDetails);

router.put('/update', userController.updateUserDetails);

module.exports = router;
