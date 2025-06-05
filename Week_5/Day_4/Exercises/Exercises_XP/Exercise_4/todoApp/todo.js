export default class TodoList {
    constructor() {
        this.todos = [];
    }

    addTask(task) {
        this.todos.push(task);
    }

    markTask(task) {
        this.todos.find((todo) => todo.task === task).completed = true;
    }

    listTasks() {
        console.log(this.todos);
    }
}