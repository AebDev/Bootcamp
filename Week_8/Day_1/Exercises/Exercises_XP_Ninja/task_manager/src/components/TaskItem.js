import { useContext } from "react";
import { taskManagerContext } from "../context/TaskContext";
import RemoveTask from "./RemoveTask";  // ✅ Import the component

const TaskItem = ({ task }) => {
    const { dispatch } = useContext(taskManagerContext);

    const toggleComplete = () => {
        dispatch({
            type: "TOGGLE_TASK",
            payload: { id: task.id }
        });
    };

    return (
        <li className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={toggleComplete}
                    className="task-checkbox"
                />
                <span className="task-title">{task.title}</span>
            </div>
            <RemoveTask
                taskId={task.id}
                taskTitle={task.title}
            />
        </li>
    );
};

export default TaskItem;
