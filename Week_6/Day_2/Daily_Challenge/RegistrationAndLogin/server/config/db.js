const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'user',
        database: 'test'
    }
})

module.exports = db;