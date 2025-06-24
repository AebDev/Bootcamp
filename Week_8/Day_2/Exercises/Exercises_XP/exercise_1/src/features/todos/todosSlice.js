import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addingTodo: (state, action) => {
            state.push({
                id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
                todo: action.payload,
                isCompleted: false
            });
        },
        togglingTodo: (state, action) => {
            state.map((todo) => todo.id === action.payload ? todo.isCompleted = !todo.isCompleted : todo.isCompleted);
        },
        removingTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
    }
});

export const { addingTodo, togglingTodo, removingTodo } = todosSlice.actions;

export default todosSlice.reducer;