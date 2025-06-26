import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    isLoading: false,
    error: null
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        startFetch: (state, action) => {
            state.isLoading = true;
        },
        successFetch: (state, action) => {
            state.isLoading = false;
            state.error = null;
        },
        failedFetch: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setUsers: (state, action) => {
            state.users = action.payload;
        }
    }
})

export const { setUsers, startFetch, successFetch, failedFetch } = usersSlice.actions;
export default usersSlice.reducer;