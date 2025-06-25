import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => [...state, {
            id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
            text: action.payload,
            completed: false
        }],
        toggleTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload);
            if (todo)
                todo.completed = !todo.completed;
        },
        removeTodo: (state, action) => state.filter(item => item.id !== action.payload)
    }
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;

