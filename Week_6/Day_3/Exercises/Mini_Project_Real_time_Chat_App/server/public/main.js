const socket = io();

const usernameContainer = document.getElementById('username-container');
const chatContainer = document.getElementById('chat-container');
const joinBtn = document.getElementById('join-btn');
const usernameInput = document.getElementById('username');
const roomInput = document.getElementById('room');
const roomNameDisplay = document.getElementById('room-name');
const usersList = document.getElementById('users');
const messagesList = document.getElementById('messages');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

let username = '';
let room = '';

// Join chat room
joinBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    room = roomInput.value.trim();

    if (username && room) {
        socket.emit('joinRoom', { username, room });
        usernameContainer.classList.add('hidden');
        chatContainer.classList.remove('hidden');
        roomNameDisplay.textContent = room;
    }
});

// Receive updated user list
socket.on('roomUsers', (users) => {
    usersList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        usersList.appendChild(li);
    });
});

// Receive messages
socket.on('message', ({ username: sender, text }) => {
    const li = document.createElement('li');
    li.textContent = `${sender}: ${text}`;
    li.classList.add(sender === username ? 'self' : 'other');
    messagesList.appendChild(li);
    messagesList.scrollTop = messagesList.scrollHeight;
});

// Receive notifications (e.g., user joined/left)
socket.on('notification', (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    li.style.fontStyle = 'italic';
    li.style.color = '#666';
    messagesList.appendChild(li);
    messagesList.scrollTop = messagesList.scrollHeight;
});

// Send message
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chatMessage', message);
        messageInput.value = '';
    }
});
