const fs = require('fs/promises');
const path = require('path');

const tasksPath = path.join(__dirname, '../data/tasks.json');

const getTasks = async () => {
    try {
        const data = await fs.readFile(tasksPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading tasks:", err);
        return [];
    }
};

const getSingleTask = async (id) => {
    const tasks = await getTasks();
    return tasks.find(task => task.id === id);
};

const addTask = async (task) => {
    const tasks = await getTasks();
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const newTask = { id, ...task };
    await fs.writeFile(tasksPath, JSON.stringify([...tasks, newTask], null, 2));
    return newTask;
};


const updateTask = async (id, task) => {
    const tasks = await getTasks();
    const taskToUpdate = tasks.find(task => task.id === id);
    const index = tasks.indexOf(taskToUpdate);
    if (index === -1)
        return null;
    tasks[index].title = task.title;
    tasks[index].description = task.description;
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), 'utf8');
    return tasks[index];
};

const deleteTask = async (id) => {
    const tasks = await getTasks();
    const taskToDelete = tasks.find(task => task.id === id);
    if (!taskToDelete)
        return null;
    tasks.splice(tasks.indexOf(taskToDelete), 1);
    await fs.writeFile(tasksPath, JSON.stringify(tasks, null, 2), 'utf8');
    return taskToDelete;
};


module.exports = {
    getTasks,
    getSingleTask,
    addTask,
    updateTask,
    deleteTask
};