import TodoList from './todo.js';

const todoList = new TodoList();

todoList.addTask({
    task: 'Buy milk',
    completed: false
});

todoList.addTask({
    task: 'Buy eggs',
    completed: false
});

todoList.addTask({
    task: 'Buy bread',
    completed: false
});

todoList.addTask({
    task: 'Buy cheese',
    completed: false
});

todoList.markTask('Buy milk');
todoList.markTask('Buy bread');

todoList.listTasks();
