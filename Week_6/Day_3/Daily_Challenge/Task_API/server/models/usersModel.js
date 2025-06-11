const fs = require('fs/promises');
const path = require('path');

const usersPath = path.join(__dirname, '../data/users.json');

const bcrypt = require('bcrypt');
const addUser = async (user) => {
    const users = await getUsers();
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { id, ...user, password: hashedPassword };
    await fs.writeFile(usersPath, JSON.stringify([...users, newUser], null, 2));
    return newUser;
};

const findUser = async (username) => {
    try {
        const users = await getUsers();
        return users.find(user => user.username === username);
    } catch (err) {
        console.error("Error reading users:", err);
        return [];
    }
}
const getUsers = async () => {
    try {
        const users = await fs.readFile(usersPath, 'utf8');
        return JSON.parse(users);
    } catch (err) {
        console.error("Error reading users:", err);
        return [];
    }
};

const getSingleUser = async (id) => {
    const users = await getUsers();
    return users.find(user => user.id === id);
};




const updateUser = async (id, user) => {
    const users = await getUsers();
    const userToUpdate = users.find(user => user.id === id);
    const index = users.indexOf(userToUpdate);
    if (index === -1)
        return null;
    console.log();
    users[index] = { id, ...user };
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2), 'utf8');
    return users[index];
};



module.exports = {
    addUser,
    findUser,
    getUsers,
    getSingleUser,
    updateUser
};
