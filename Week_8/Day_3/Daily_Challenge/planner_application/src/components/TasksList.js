import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TasksItem';

const TasksList = () => {
    const selectedDay = useSelector((state) => state.tasks.selectedDay);
    const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);

    return (
        <div>
            <h3>Tasks for {selectedDay}</h3>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map((task) => <TaskItem key={task.id} task={task} day={selectedDay} />)
                ) : (
                    <p>No tasks for this day.</p>
                )}
            </ul>
        </div>
    );
};

export default TasksList;