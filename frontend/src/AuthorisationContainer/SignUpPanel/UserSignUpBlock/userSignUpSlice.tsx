import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const userSignUpSlice = createSlice({
    name: 'userSignUp',
    initialState: {
        login: '',
        password: '',
        invitationCode: ''
    },
    reducers: {
        loginEdited: (state, action) => {
            state.login = action.payload;
        },
        passwordEdited: (state, action) => {
            state.password = action.payload;
        },
        invitationCodeEdited: (state, action) => {
            state.invitationCode = action.payload;
        },
    },
});

export const userSignUpReducer = userSignUpSlice.reducer;
// Actions
const {loginEdited, passwordEdited, invitationCodeEdited} = userSignUpSlice.actions;

export const editLogin = (login: string) => (dispatch: Dispatch) => {
    dispatch(loginEdited(login));
};

export const editPassword = (password: string) => (dispatch: Dispatch) => {
    dispatch(passwordEdited(password));
};

export const editInvitationCode = (invitationCode: string) => (dispatch: Dispatch) => {
    dispatch(invitationCodeEdited(invitationCode));
};
