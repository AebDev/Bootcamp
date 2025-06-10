const db = require('../config/db');

const createUserWithPassword = async (userData, hashedPassword) => {
    return await db.transaction(async (trx) => {
        const [user] = await trx('users')
            .insert({
                email: userData.email,
                username: userData.username,
                first_name: userData.first_name,
                last_name: userData.last_name,
            })
            .returning('*');

        await trx('hashpwd').insert({
            username: userData.username,
            password: hashedPassword,
        });

        return user.id;
    });
};

const findUserByUsername = async (username) => {
    const user = await db('users').where({ username }).first();
    if (!user) return null;

    const hashEntry = await db('hashpwd').where({ username }).first();
    if (!hashEntry) return null;

    return { ...user, password: hashEntry.password };
};

const getAllUsers = async () => {
    return await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
};

const getUserById = async (id) => {
    return await db('users').select('id', 'email', 'username', 'first_name', 'last_name').where({ id }).first();
};

const updateUserById = async (id, updateData) => {
    const updatedRows = await db('users').where({ id }).update(updateData).returning('*');
    return updatedRows[0];
};

module.exports = {
    createUserWithPassword,
    findUserByUsername,
    getAllUsers,
    getUserById,
    updateUserById,
};
