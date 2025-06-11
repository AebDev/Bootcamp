const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {

        const User = req.body;
        if (!User.first_name || !User.last_name || !User.email || !User.username || !User.password)
            throw new Error('All fields are required');
        const check = await usersModel.findUser(User.username);
        if (check)
            return res.status(400).json({ message: 'Username already exists' });
        const newUser = await usersModel.addUser(User);
        if (!newUser)
            return res.status(400).json({ message: 'User not created' });
        res.status(201).json({ message: 'Hello Your account is now created!', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const checkUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await usersModel.findUser(username);
        if (!user)
            return res.status(404).json({ message: 'Username is not registered' });
        const isValid = await bcrypt.compare(password, user.password);
        if (isValid)
            res.json({ message: `Hi ${user.username} welcome back again!` });
        else
            res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getAllUsers = async (req, res) => {
    res.json(await usersModel.getUsers());
}

const getUserById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const User = await usersModel.getSingleUser(id);
        if (!User)
            throw new Error('User not found');
        res.json(User);
    }
    catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const User = req.body;
        if (!User.first_name || !User.last_name || !User.email || !User.username || !User.password)
            throw new Error('All fields are required');
        const updatedUser = await usersModel.updateUser(id, User);
        if (!updatedUser)
            throw new Error('User not updated');
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    createUser,
    checkUser,
    getAllUsers,
    getUserById,
    updateUser
};
