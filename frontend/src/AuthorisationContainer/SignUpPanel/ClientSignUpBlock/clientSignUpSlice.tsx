import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const clientSignUpSlice = createSlice({
    name: 'clientSignUp',
    initialState: {
        givenName: '',
        familyName: '',
        picLink: ''
    },
    reducers: {
        givenNameEdited: (state, action) => {
            state.givenName = action.payload;
        },
        familyNameEdited: (state, action) => {
            state.familyName = action.payload;
        },
        picLinkEdited: (state, action) => {
            state.picLink = action.payload;
        },
    },
});

export const clientSignUpReducer = clientSignUpSlice.reducer;
// Actions
const {givenNameEdited, familyNameEdited, picLinkEdited} = clientSignUpSlice.actions;

export const editGivenName = (givenName: string) => (dispatch: Dispatch) => {
    dispatch(givenNameEdited(givenName));
};

export const editFamilyName = (familyName: string) => (dispatch: Dispatch) => {
    dispatch(familyNameEdited(familyName));
};

export const editPicLink = (picLink: string) => (dispatch: Dispatch) => {
    dispatch(picLinkEdited(picLink));
};
