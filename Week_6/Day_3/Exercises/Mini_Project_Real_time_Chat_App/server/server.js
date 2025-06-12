const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static frontend files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

let users = {}; // To track users by socket.id and room

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle user joining a room with a username
    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        users[socket.id] = { username, room };

        // Notify others in the room
        socket.to(room).emit('notification', `${username} has joined the room.`);

        // Send updated user list to room
        const roomUsers = Object.values(users)
            .filter(user => user.room === room)
            .map(user => user.username);
        io.to(room).emit('roomUsers', roomUsers);
    });

    // Handle sending messages
    socket.on('chatMessage', (message) => {
        const user = users[socket.id];
        if (user) {
            io.to(user.room).emit('message', { username: user.username, text: message });
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        const user = users[socket.id];
        if (user) {
            const { username, room } = user;
            delete users[socket.id];
            socket.to(room).emit('notification', `${username} has left the room.`);

            // Update user list
            const roomUsers = Object.values(users)
                .filter(u => u.room === room)
                .map(u => u.username);
            io.to(room).emit('roomUsers', roomUsers);
        }
        console.log('User disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
