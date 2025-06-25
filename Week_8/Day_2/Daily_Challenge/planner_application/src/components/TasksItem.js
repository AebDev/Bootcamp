import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../features/tasks/tasksSlice';

const TaskItem = ({ task, day }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (editedText.trim() !== '') {
            dispatch(editTask({ day, taskId: task.id, updatedTask: { text: editedText } }));
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        dispatch(deleteTask({ day, taskId: task.id }));
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{task.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </li>
    );
};

export default TaskItem;