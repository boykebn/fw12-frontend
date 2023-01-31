    import {createSlice} from '@reduxjs/toolkit';
    import {loginAction, registerAction} from '../action/auth'

    
const initialState = {
    token: null,
    isLoading: false,
    message: null,
    email: '',
};

const authReducers = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
          return initialState;
        },
        setEmail: (state, action) => {
          // console.log(action.payload)
          state.email = action.payload
          // console.log("first")
          // console.log(action.payload)
        },
        setError:(state, action) => {
          state.error = null
        }
    },
    extraReducers: (build) => {
      build.addCase(loginAction.pending, (state) => {
        state.isLoading = false;
      });
  
      build.addCase(loginAction.fulfilled, (state, {payload}) => {
        console.log('masuk');
        state.token = payload.token;
        state.isLoading = false;
        state.message = "Login Succes";
        // console.log(state.message);
      });
  
      build.addCase(loginAction.rejected, (state, action) => {
        state.token = null;
        state.isLoading = true;
        state.message = action.error.message;
      });
  
      build.addCase(registerAction.pending, (state) => {
        state.isLoading = false;
      });
  
      build.addCase(registerAction.fulfilled, (state, {payload}) => {
        // console.log(action)
        state.token = payload.token;
        state.isLoading = true;
        state.message = " ";
      });
  
      build.addCase(registerAction.rejected, (state, action) => {
        state.token = null;
        state.isLoading = true;
        state.message = action.error.message;
      });
    },
  });
  
  export const {logout: logoutAction, setEmail, setError} = authReducers.actions;
  
  export default authReducers.reducer;
  