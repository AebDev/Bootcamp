import { useContext } from "react";
import { taskManagerContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const DisplayTasks = () => {
    const { tasks, filter } = useContext(taskManagerContext);

    // Filter tasks based on current filter
    const getFilteredTasks = () => {
        switch (filter) {
            case "active":
                return tasks.filter(task => !task.completed);
            case "completed":
                return tasks.filter(task => task.completed);
            case "all":
            default:
                return tasks;
        }
    };

    const filteredTasks = getFilteredTasks();

    const getFilterTitle = () => {
        switch (filter) {
            case "active":
                return "Active Tasks";
            case "completed":
                return "Completed Tasks";
            case "all":
            default:
                return "All Tasks";
        }
    };

    if (tasks.length === 0) {
        return (
            <div className="show-tasks">
                <h3>Your Tasks</h3>
                <p className="no-tasks">No tasks available. Add a task to get started!</p>
            </div>
        );
    }

    if (filteredTasks.length === 0) {
        return (
            <div className="show-tasks">
                <h3>{getFilterTitle()} (0)</h3>
                <p className="no-tasks">No {filter} tasks found.</p>
            </div>
        );
    }

    return (
        <div className="show-tasks">
            <h3>{getFilterTitle()} ({filteredTasks.length})</h3>
            <ul className="task-list">
                {filteredTasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))}
            </ul>
        </div>
    );
};

export default DisplayTasks;
