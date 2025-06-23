import { useContext } from "react";
import { taskManagerContext } from '../context/TaskContext';

const RemoveTask = ({ taskId, taskTitle, className = "", showConfirm = false }) => {
    const { dispatch } = useContext(taskManagerContext);

    const handleRemove = () => {
        if (showConfirm) {
            const confirmed = window.confirm(`Are you sure you want to delete "${taskTitle}"?`);
            if (!confirmed) return;
        }

        dispatch({
            type: "REMOVE_TASK",
            payload: { id: taskId }
        });
    };

    return (
        <button
            onClick={handleRemove}
            className={`remove-task-btn ${className}`}
            aria-label={`Remove task: ${taskTitle}`}
            title="Delete task"
        >
            ✕
        </button>
    );
};

export default RemoveTask;
