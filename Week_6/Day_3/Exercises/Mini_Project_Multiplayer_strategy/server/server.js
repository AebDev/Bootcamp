const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const authRouter = require('./routers/authRouter');
const gameRouter = require('./routers/gameRouter');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/game', gameRouter());


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// Initialize database
db.initialize()
    .then(() => {
        console.log('Database initialized');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database initialization failed:', err);
        process.exit(1);
    });

module.exports = app;
