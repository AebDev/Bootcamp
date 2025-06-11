const taskModel = require('../models/tasksModel');

const getAllTasks = async (req, res) => {
    res.json(await taskModel.getTasks());
}

const getTaskById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const task = await taskModel.getSingleTask(id);
        if (!task)
            throw new Error('Task not found');
        res.json(task);
    }
    catch (error) {
        res.status(404).json({ error: 'Task not found' });
    }
}

const createTask = async (req, res) => {
    try {
        const task = req.body;
        if (!task.title || !task.description)
            throw new Error('Title and description are required');
        const newTask = await taskModel.addTask(task);
        if (!newTask)
            throw new Error('Task not created');
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTask = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const task = req.body;
        if (!task.title || !task.description)
            throw new Error('Title and description are required');
        const updatedTask = await taskModel.updateTask(id, task);
        if (!updatedTask)
            throw new Error('Task not updated');
        res.json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteTask = async (req, res) => {
    const id = Number(req.params.id);
    const deletedTask = await taskModel.deleteTask(id);
    if (!deletedTask)
        return res.status(404).json({ error: 'Task not found' });
    res.json(deletedTask);
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};