const express = require('express');
const db = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'user',
        database: 'test'
    }
});
const app = express();

app.use(express.json());

app.get('/posts', async (req, res) => {
    const posts = await db.select('*').from('posts');
    res.status(200).json(posts);
});

app.get('/posts/:id', async (req, res) => {

    const id = Number(req.params.id);
    try {
        post = await db.select('*').from('posts').where('id', id);
        if (!post.length)
            return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.post('/posts', async (req, res) => {
    try {
        if (!title || !content)
            throw new Error('title and content are required');

        const { title, content } = req.body;
        const newPost = await db('posts').insert({ title, content }, '*');
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ error: 'Post not inserted' });
    }
});

app.put('/posts/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, content } = req.body;
        if (!title || !content)
            throw new Error('title and content are required');

        const newPost = await db('posts').where('id', id).update({ title, content }, '*');
        if (!newPost.length)
            return res.status(404).json({ error: 'Post not exist' });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ error: 'Post not updated' });
    }
});

app.delete('/posts/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await db('posts').where('id', id).del('*');
        if (!post.length)
            return res.status(404).json({ error: 'Post not exist' });
        res.status(201).json(post);

    } catch (error) {
        res.status(404).json({ error: 'Post not deleted' });
    }
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});