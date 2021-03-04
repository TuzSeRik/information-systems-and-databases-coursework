import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const administratorSlice = createSlice({
    name: 'administrator',
    initialState: {
        codes: []
    },
    reducers: {
        codesLoaded: (state, action) => {
            state.codes = action.payload.codes;
        },
        codesAdded: (state, action) => {
            state.codes = state.codes.concat(action.payload.codes);
        },
    },
});

export const administratorReducer = administratorSlice.reducer;
// Actions
const {codesLoaded, codesAdded} = administratorSlice.actions;

export const loadCodes = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/codes', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(codesLoaded(body));
};

export const addCodes = (authData: string, type: string, number: number) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/codes', {
        method: 'POST',
        body: JSON.stringify({type, number}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(codesAdded(body));
};
