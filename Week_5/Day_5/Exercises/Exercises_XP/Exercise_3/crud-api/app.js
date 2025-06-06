const express = require('express');
const fetchPosts = require('./data/dataService');
const app = express();

app.use(express.json());

let posts = [];
fetchPosts().then(data => posts = data);

app.get('/', (req, res) => {
    console.log('The data has been successfully retrieved');
    res.status(200).send(posts);
});


app.listen(5000, () => {
    console.log('Server is running on port 5000');
});