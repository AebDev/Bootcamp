import { createSlice } from '@reduxjs/toolkit';

const getLocalDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const initialState = {
    tasksByDay: {},
    selectedDay: getLocalDate(),
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { day, task } = action.payload;
            const tasks = state.tasksByDay[day] || [];
            state.tasksByDay[day] = [...tasks, { ...task, id: Date.now() }];
        },
        editTask: (state, action) => {
            const { day, taskId, updatedTask } = action.payload;
            const tasks = state.tasksByDay[day] || [];
            const taskIndex = tasks.findIndex((task) => task.id === taskId);
            if (taskIndex !== -1) {
                state.tasksByDay[day][taskIndex] = { ...tasks[taskIndex], ...updatedTask };
            }
        },
        deleteTask: (state, action) => {
            const { day, taskId } = action.payload;
            const tasks = state.tasksByDay[day] || [];
            state.tasksByDay[day] = tasks.filter((task) => task.id !== taskId);
        },
        selectDay: (state, action) => {
            state.selectedDay = action.payload.day;
        },
    },
});

export const { addTask, editTask, deleteTask, selectDay } = tasksSlice.actions;
export default tasksSlice.reducer;