import {createSlice, Dispatch} from '@reduxjs/toolkit';

export enum UserType {
    USER = 'USER', CLIENT = 'CLIENT', ISSUER = 'ISSUER', MANAGER = 'MANAGER'
}
// Reducers
const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        isRegistering: false,
        userType: UserType.USER,
    },
    reducers: {
        switched: (state, action) => {
            state.userType = action.payload
        },
        registering: (state, action) => {
            state.isRegistering = state.isRegistering || action.payload;
        },
    },
});

export const signUpReducer = signUpSlice.reducer;
// Actions
const {registering, switched} = signUpSlice.actions;

export const register = (payload: boolean) => (dispatch: Dispatch) => {
    dispatch(registering(payload));
}

export const registerUser =
    (payload: {login: string, password: string, invitationCode: string}) =>
        async (dispatch: Dispatch) => {
            const response = await fetch('http://localhost:8080/register/user', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(payload)
    });
    const body = await response.json();

    if (body.type === 'CLIENT')
        dispatch(switched(UserType.CLIENT));
    if (body.type === 'ISSUER')
        dispatch(switched(UserType.ISSUER));
    if (body.type === 'MANAGER')
        dispatch(switched(UserType.MANAGER));
}

export const registerClient =
    (authData: string, payload: {givenName: string, familyName: string, picLink: string}) =>
        async (dispatch: Dispatch) => {
            const response = await fetch('http://localhost:8080/register/client', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + authData
                },
                method: 'POST',
                body: JSON.stringify(payload)
            });

            if (response.ok)
                dispatch(registering(false));
        };

export const registerIssuer =
    (authData: string, payload:
         {givenName: string, nickname: string, familyName: string, famousFor: string, picLink: string}) =>
        async (dispatch: Dispatch) => {
            const response = await fetch('http://localhost:8080/register/issuer', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + authData
                },
                method: 'POST',
                body: JSON.stringify(payload)
            });

            if (response.ok)
                dispatch(registering(false));
        };

export const registerManager =
    (authData: string, payload: { name: string, picLink: string}) =>
        async (dispatch: Dispatch) => {
            const response = await fetch('http://localhost:8080/register/manager', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + authData
                },
                method: 'POST',
                body: JSON.stringify(payload)
            });

            if (response.ok)
                dispatch(registering(false));
        };
