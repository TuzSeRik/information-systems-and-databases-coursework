import {createSlice, Dispatch} from '@reduxjs/toolkit';

export enum ProfileType {
    CLIENT = 'CLIENT', ISSUER = 'ISSUER', MANAGER = 'MANAGER', ADMINISTRATOR = 'ADMINISTRATOR'
}

// Reducers
const authorisationSlice = createSlice({
    name: 'authorisation',
    initialState: {
        isAuthorised: false,
        currentUser: '',
        authData: '',
        profileType: ProfileType.CLIENT
    },
    reducers: {
        logined: (state, action) => {
            state.isAuthorised = true;
            state.currentUser = action.payload;
        },
        logouted: (state) => {
            state.isAuthorised = false;
            state.authData = '';
        },
        authDataSet: (state, action) => {
            state.authData = action.payload;
        },
        switched: (state, action) => {
            state.profileType = action.payload
        }
    },
});

export const authorisationReducer = authorisationSlice.reducer;
// Actions
const {logined, logouted, authDataSet, switched} = authorisationSlice.actions;

export const auth = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/user', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    if (response.status) {
        dispatch(logined(body.login));
        dispatch(authDataSet(authData));

        if (body.type === 'CLIENT')
            dispatch(switched(ProfileType.CLIENT));
        if (body.type === 'ISSUER')
            dispatch(switched(ProfileType.ISSUER));
        if (body.type === 'MANAGER')
            dispatch(switched(ProfileType.MANAGER));
        if (body.type === 'ADMINISTRATOR')
            dispatch(switched(ProfileType.ADMINISTRATOR));
    }
};

export const logout = () => (dispatch: Dispatch) => {
    dispatch(logouted);
};
