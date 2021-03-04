import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const managerSignUpSlice = createSlice({
    name: 'managerSignUp',
    initialState: {
        name: '',
        picLink: ''
    },
    reducers: {
        nameEdited: (state, action) => {
            state.name = action.payload;
        },
        picLinkEdited: (state, action) => {
            state.picLink = action.payload;
        },
    },
});

export const managerSignUpReducer = managerSignUpSlice.reducer;
// Actions
const {nameEdited, picLinkEdited} = managerSignUpSlice.actions;

export const editName = (name: string) => (dispatch: Dispatch) => {
    dispatch(nameEdited(name));
};

export const editPicLink = (picLink: string) => (dispatch: Dispatch) => {
    dispatch(picLinkEdited(picLink));
};
