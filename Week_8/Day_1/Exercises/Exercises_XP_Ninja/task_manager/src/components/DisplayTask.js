import { useContext } from "react";
import { taskManagerContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const DisplayTasks = () => {
    const { tasks, dispatch } = useContext(taskManagerContext);

    if (tasks.length === 0) {
        return (
            <div className="show-tasks">
                <h3>Your Tasks</h3>
                <p className="no-tasks">No tasks available. Add a task to get started!</p>
            </div>
        );
    }

    return (
        <div className="show-tasks">
            <h3>Your Tasks ({tasks.length})</h3>
            <ul className="task-list">
                {tasks.map(task => (
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
