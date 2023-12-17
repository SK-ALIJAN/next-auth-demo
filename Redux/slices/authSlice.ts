import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
    isLoading: boolean;
    isAuth: boolean;
    userData: object;
    isError: boolean;
    errorMessage: string;
}

const initialState: AuthState = {
    isLoading: false,
    isAuth: false,
    userData: {},
    isError: false,
    errorMessage: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = '';
        },
        loginSuccess: (state, action: PayloadAction<object>) => {
            state.isLoading = false;
            state.userData = action.payload;
            state.isAuth = true;
            state.isError = false;
            state.errorMessage = '';
        },
        loginFailure: (state, action: PayloadAction<boolean>) => {
            state.isLoading = false;
            state.isAuth = false;
            state.isError = action.payload;
            state.errorMessage = action.payload ? 'Login failed' : '';
        },
        logout: (state) => {
            state.isAuth = false;
            state.userData = {};
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
