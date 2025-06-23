import { useContext, useState, useRef, useEffect } from "react";
import { taskManagerContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
    const { dispatch } = useContext(taskManagerContext);
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef();

    useEffect(() => {
        if (isEditing && editInputRef.current) {
            editInputRef.current.focus();
            editInputRef.current.select();
        }
    }, [isEditing]);

    const removeTask = () => {
        const confirmed = window.confirm(`Are you sure you want to delete "${task.title}"?`);
        if (confirmed) {
            dispatch({
                type: "REMOVE_TASK",
                payload: { id: task.id }
            });
        }
    };

    const toggleComplete = () => {
        dispatch({
            type: "TOGGLE_TASK",
            payload: { id: task.id }
        });
    };

    const startEdit = () => {
        setIsEditing(true);
    };

    const saveEdit = () => {
        const newTitle = editInputRef.current.value.trim();
        if (newTitle && newTitle !== task.title) {
            dispatch({
                type: "EDIT_TASK",
                payload: { id: task.id, title: newTitle }
            });
        }
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    const handleEditKeyDown = (event) => {
        if (event.key === 'Enter') {
            saveEdit();
        } else if (event.key === 'Escape') {
            cancelEdit();
        }
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
                {isEditing ? (
                    <input
                        type="text"
                        ref={editInputRef}
                        defaultValue={task.title}
                        onKeyDown={handleEditKeyDown}
                        onBlur={saveEdit}
                        className="edit-input"
                    />
                ) : (
                    <span
                        className="task-title"
                        onDoubleClick={startEdit}
                        title="Double-click to edit"
                    >
                        {task.title}
                    </span>
                )}
            </div>
            <div className="task-actions">
                {!isEditing && (
                    <button
                        onClick={startEdit}
                        className="edit-btn"
                        aria-label={`Edit task: ${task.title}`}
                    >
                        ✏️
                    </button>
                )}
                <button
                    onClick={removeTask}
                    className="remove-btn"
                    aria-label={`Remove task: ${task.title}`}
                >
                    ✕
                </button>
            </div>
        </li>
    );
};

export default TaskItem;
