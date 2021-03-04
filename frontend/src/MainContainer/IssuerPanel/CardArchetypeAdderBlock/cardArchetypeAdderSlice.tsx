import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const cardArchetypeAdderSlice = createSlice({
    name: 'cardArchetypeAdder',
    initialState: {
        name: '',
        issuerId: '',
        value: 0
    },
    reducers: {
        nameEdited: (state, action) => {
            state.name = action.payload;
        },
        issuerIdEdited: (state, action) => {
            state.issuerId = action.payload;
        },
        valueEdited: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const cardArchetypeAdderReducer = cardArchetypeAdderSlice.reducer;
// Actions
const {nameEdited, issuerIdEdited, valueEdited} = cardArchetypeAdderSlice.actions;

export const editName = (name: string) => (dispatch: Dispatch) => {
    dispatch(nameEdited(name));
};

export const editIssuerId = (issuerId: string) => (dispatch: Dispatch) => {
    dispatch(issuerIdEdited(issuerId));
};

export const editValue = (value: string) => (dispatch: Dispatch) => {
    dispatch(valueEdited(value));
};
