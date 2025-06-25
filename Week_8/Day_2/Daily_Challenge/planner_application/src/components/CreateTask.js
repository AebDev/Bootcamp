import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

const CreateTask = () => {
    const [taskText, setTaskText] = useState('');
    const selectedDay = useSelector((state) => state.tasks.selectedDay);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            dispatch(addTask({ day: selectedDay, task: { text: taskText } }));
            setTaskText('');
        }
    };

    return (
        <div>
            <h3>Add a New Task for {selectedDay}</h3>
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default CreateTask;