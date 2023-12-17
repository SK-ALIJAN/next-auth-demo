import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SignupState {
    isLoading: boolean;
    data: object;
    isError: boolean;
    errorMessage: string;
}

const initialState: SignupState = {
    isLoading: false,
    data: {},
    isError: false,
    errorMessage: '',
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        signupRequest: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.errorMessage = '';
        },
        signupSuccess: (state, action: PayloadAction<object>) => {
            state.isLoading = false;
            state.data = action.payload;
        },
        signupFailure: (state, action: PayloadAction<{ isError: boolean; errorMessage: string }>) => {
            state.isLoading = false;
            state.isError = action.payload.isError;
            state.errorMessage = action.payload.errorMessage;
        },
    },
});

export const { signupRequest, signupSuccess, signupFailure } = signupSlice.actions;

export const selectSignup = (state: RootState) => state.signup;

export default signupSlice.reducer;
