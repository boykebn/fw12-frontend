    import {createSlice} from '@reduxjs/toolkit';

    import {loginAction} from '../action/auth'



const initialState = {
    token: null
};

const authReducers = createSlice({
    name : 'auth',
    initialState,
    reducer: {
        login: (state, payload) => {
            state.token = payload
        }
    },
    extraReducers: (build) => {
        build.addCase(loginAction.fulfilled, (state, {payload}) => {
            state.token = payload;
        })
    },
});

export const {login} = authReducers.actions;

export default authReducers.reducer;