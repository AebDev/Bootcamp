const express = require('express');
const usersController = require('../controllers/usersController.js');
const router = express.Router();

router.post('/register', usersController.createUser);

router.post('/login', usersController.checkUser);

router.get('/users', usersController.getAllUsers);

router.get('/users/:id', usersController.getUserById);

router.put('/users/:id', usersController.updateUser);

module.exports = router;