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

app.get('/api/books', async (req, res) => {
    const posts = await db.select('*').from('books');
    res.status(200).json(posts);
});

app.get('/api/books/:id', async (req, res) => {
    const id = Number(req.params.id);

    try {
        post = await db.select('*').from('books').where('id', id);
        if (!post.length)
            return res.status(404).json({ error: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.post('/api/books', async (req, res) => {
    try {
        const { title, author, publishedyear } = req.body;
        if (!title || !author || !publishedyear)
            return res.status(400).send('All fields are required');
        const newBook = await db('books').insert({ title, author, publishedyear }, '*');
        res.status(201).json(newBook);

    } catch (error) {
        res.status(404).json({ error: 'Post not created' });
    }
});


app.listen(5000, () => {
    console.log("Server is running on port 3000");
});