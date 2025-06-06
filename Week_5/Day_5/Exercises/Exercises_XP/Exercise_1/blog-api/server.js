const express = require('express');
const app = express();

const data = [{
    id: 1,
    title: 'My first post',
    content: 'Hello world'
},
{
    id: 2,
    title: 'My second post',
    content: 'Hello world 2'
},
{
    id: 3,
    title: 'My third post',
    content: 'Hello world 3'
},
{
    id: 4,
    title: 'My fourth post',
    content: 'Hello world '
}];

app.use(express.json());

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = data.find(post => post.id == id);
    if (!post)
        return res.status(404).send('Post not found');
    res.json(post);
});

app.post('/posts', (req, res) => {
    const id = data[data.length - 1].id + 1;
    if (!req.body.title || !req.body.content)
        return res.status(400).send('Title and content are required');
    const newPost = {
        id: id,
        title: req.body.title,
        content: req.body.content
    };
    data.push(newPost);
    res.status(201).send(newPost);
});

app.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = data.find(post => post.id == id);
    if (!post)
        return res.status(404).send('Post not found');
    if (!req.body.title || !req.body.content)
        return res.status(400).send('Title and content are required');
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);

});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = data.find(post => post.id == id);
    if (!post)
        return res.status(404).send('Post not found');
    const index = data.indexOf(post);
    data.splice(index, 1);
    res.status(204).send();
});

app.listen(3000);