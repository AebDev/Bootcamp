const express = require('express');
const router = express.Router();
const books = [
    {
        id: 1,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publishedYear: 1954
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        publishedYear: 1937
    },
    {
        id: 3,
        title: 'The Silmarillion',
        author: 'J.R.R. Tolkien',
        publishedYear: 1977
    }
];

router.get('/books', (req, res) => {
    res.json(books);
});
router.post('/books', (req, res) => {
    const book = {
        id: books[books.length - 1].id + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    console.log(book);
    if (!book.title || !book.author || !book.publishedYear)
        res.status(400).send('All fields are required');
    books.push(book);
    res.status(201).send('Book created');

});
router.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1)
        return res.status(404).send('Book not found');
    const book = {
        id: id,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    }
    if (!book.title || !book.author || !book.publishedYear)
        return res.status(400).send('All fields are required');
    books[index] = book;
    res.status(200).send('Book updated');
});
router.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1)
        return res.status(404).send('Book not found');
    books.splice(index, 1);
    res.status(200).send('Book deleted');
});

module.exports = router;