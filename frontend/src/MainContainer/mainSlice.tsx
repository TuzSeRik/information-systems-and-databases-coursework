import {createSlice, Dispatch} from '@reduxjs/toolkit';
import {ProfileType} from "../AuthorisationContainer/authorisationSlice";
// Reducers
const mainSlice = createSlice({
    name: 'main',
    initialState: {
        client: {
            givenName: '',
            familyName: '',
            picLink: ''
        },
        issuer: {
            givenName: '',
            nickname: '',
            familyName: '',
            famousFor: '',
            picLink: ''
        },
        manager: {
            name: '',
            picLink: ''
        },
    },
    reducers: {
        clientChanged: (state, action) => {
            state.client = action.payload;
        },
        issuerChanged: (state, action) => {
            state.issuer = action.payload;
        },
        managerChanged: (state, action) => {
            state.manager = action.payload;
        },
    },
});

export const mainReducer = mainSlice.reducer;
// Actions
const {clientChanged, issuerChanged, managerChanged} = mainSlice.actions;

export const load = (profileType: ProfileType, authData: string) => async (dispatch: Dispatch) => {
    switch (profileType) {
        case ProfileType.CLIENT: {
            const response = await fetch('http://localhost:8080/api/client', {
                headers: {'Authorization': 'Basic ' + authData},
                credentials: "include"
            });
            const body = await response.json();

            dispatch(clientChanged(body));
        }
        break;
        case ProfileType.ISSUER: {
            const response = await fetch('http://localhost:8080/api/issuer', {
                headers: {'Authorization': 'Basic ' + authData},
                credentials: "include"
            });
            const body = await response.json();

            dispatch(issuerChanged(body));
        }
        break;
        case ProfileType.MANAGER: {
            const response = await fetch('http://localhost:8080/api/manager', {
                headers: {'Authorization': 'Basic ' + authData},
                credentials: "include"
            });
            const body = await response.json();

            dispatch(managerChanged(body));
        }
        break;
    }
}
