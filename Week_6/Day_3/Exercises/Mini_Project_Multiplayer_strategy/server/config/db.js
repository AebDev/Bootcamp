const knex = require('knex');
const { v4: uuidv4 } = require('uuid');

// Database configuration
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'user',
        database: 'postgres',
        port: 5432
    },
    useNullAsDefault: true
});

// Initialize database schema
async function initialize() {
    try {
        // Create games table if not exists
        await db.schema.hasTable('games').then(exists => {
            if (!exists) {
                return db.schema.createTable('games', table => {
                    table.string('id').primary();
                    table.jsonb('players').notNullable();
                    table.jsonb('board').notNullable();
                    table.string('currentTurn').notNullable();
                    table.string('status').defaultTo('active');
                    table.timestamps(false, true);
                });
            }
        });
        console.log('Database schema initialized');
    } catch (err) {
        console.error('Database initialization error:', err);
        throw err;
    }
}

module.exports = {
    db,
    initialize
};
