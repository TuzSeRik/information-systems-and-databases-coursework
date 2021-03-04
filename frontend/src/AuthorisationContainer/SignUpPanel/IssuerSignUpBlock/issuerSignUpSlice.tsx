import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const issuerSignUpSlice = createSlice({
    name: 'issuerSignUp',
    initialState: {
        givenName: '',
        nickname: '',
        familyName: '',
        famousFor: '',
        picLink: ''
    },
    reducers: {
        givenNameEdited: (state, action) => {
            state.givenName = action.payload;
        },
        nicknameEdited: (state, action) => {
            state.nickname = action.payload;
        },
        familyNameEdited: (state, action) => {
            state.familyName = action.payload;
        },
        famousForEdited: (state, action) => {
            state.famousFor = action.payload;
        },
        picLinkEdited: (state, action) => {
            state.picLink = action.payload;
        },
    },
});

export const issuerSignUpReducer = issuerSignUpSlice.reducer;
// Actions
const {givenNameEdited, nicknameEdited, familyNameEdited, famousForEdited, picLinkEdited} = issuerSignUpSlice.actions;

export const editGivenName = (givenName: string) => (dispatch: Dispatch) => {
    dispatch(givenNameEdited(givenName));
};

export const editNickname = (nickname: string) => (dispatch: Dispatch) => {
    dispatch(nicknameEdited(nickname));
};

export const editFamilyName = (familyName: string) => (dispatch: Dispatch) => {
    dispatch(familyNameEdited(familyName));
};

export const editFamousFor = (famousFor: string) => (dispatch: Dispatch) => {
    dispatch(famousForEdited(famousFor));
};

export const editPicLink = (picLink: string) => (dispatch: Dispatch) => {
    dispatch(picLinkEdited(picLink));
};
