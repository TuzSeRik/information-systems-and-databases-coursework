import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const signInSlice = createSlice({
    name: 'signIn',
    initialState: {
        login: '',
        password: ''
    },
    reducers: {
        loginEdited: (state, action) => {
            state.login = action.payload;
        },
        passwordEdited: (state, action) => {
            state.password = action.payload;
        },
    },
});

export const signInReducer = signInSlice.reducer;
// Actions
const {loginEdited, passwordEdited} = signInSlice.actions;

export const editLogin = (login: string) => (dispatch: Dispatch) => {
    dispatch(loginEdited(login));
};

export const editPassword = (password: string) => (dispatch: Dispatch) => {
    dispatch(passwordEdited(password));
};
