const express = require('express');
const router = express.Router();
const todos = [
    {
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
    }
];

router.get('/todos', (req, res) =>
    res.json(todos));
router.post('/todos', (req, res) => {
    const todo = {
        id: todos[todos.length - 1].id + 1,
        title: req.body.title,
        content: req.body.content
    };
    if (!todo.title || !todo.content) {
        return res.status(400).send('Title and content are required');
    }
    todos.push(todo);
    res.json(todo);
});
router.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    const newTodo = {
        id: id,
        title: req.body.title,
        content: req.body.content
    };
    if (index === -1)
        return res.status(404).send('Todo not found');
    if (!newTodo.title || !newTodo.content)
        return res.status(400).send('Title and content are required');
    todos[index] = newTodo;
    res.json(newTodo);
});
router.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1)
        return res.status(404).send('Todo not found');
    todos.splice(index, 1);
    res.status(200).send('Todo deleted');
});


module.exports = router;