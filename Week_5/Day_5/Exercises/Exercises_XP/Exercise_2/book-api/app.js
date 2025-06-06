const express = require('express');
const app = express();
const books = [{
    id: 1,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publushedYear: 1954
},
{
    id: 2,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    publushedYear: 1937
},
{
    id: 3,
    title: 'The Silmarillion',
    author: 'J.R.R. Tolkien',
    publushedYear: 1977
},
{
    id: 4,
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien',
    publushedYear: 1954
}];

app.use(express.json());

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const id = req.params.bookId;
    const book = books.find(book => book.id == id);
    if (!book)
        return res.status(404).send('Book not found');
    res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
    const id = books.length + 1;
    if (!req.body.title || !req.body.author || !req.body.publushedYear)
        return res.status(400).send('Title, author and published year are required');
    const book = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        publushedYear: req.body.publushedYear
    };
    books.push(book);
    res.status(201).json(book);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});