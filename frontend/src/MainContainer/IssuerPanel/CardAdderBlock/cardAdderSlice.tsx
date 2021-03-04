import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const cardAdderSlice = createSlice({
    name: 'cardAdder',
    initialState: {
        cardArchetypeId: '',
        name: '',
        ownerId : '',
        balance: 0
    },
    reducers: {
        cardArchetypeIdEdited: (state, action) => {
            state.cardArchetypeId = action.payload;
        },
        nameEdited: (state, action) => {
            state.name = action.payload;
        },
        ownerIdEdited: (state, action) => {
            state.ownerId = action.payload;
        },
        balanceEdited: (state, action) => {
            state.balance = action.payload;
        }
    },
});

export const cardAdderReducer = cardAdderSlice.reducer;
// Actions
const {cardArchetypeIdEdited, nameEdited, ownerIdEdited, balanceEdited} = cardAdderSlice.actions;

export const editCardArchetypeId = (cardArchetypeId: string) => (dispatch: Dispatch) => {
    dispatch(cardArchetypeIdEdited(cardArchetypeId));
};

export const editName = (name: string) => (dispatch: Dispatch) => {
    dispatch(nameEdited(name));
};

export const editOwnerId = (ownerId: string) => (dispatch: Dispatch) => {
    dispatch(ownerIdEdited(ownerId));
};

export const editBalance = (balance: string) => (dispatch: Dispatch) => {
    dispatch(balanceEdited(balance));
};
