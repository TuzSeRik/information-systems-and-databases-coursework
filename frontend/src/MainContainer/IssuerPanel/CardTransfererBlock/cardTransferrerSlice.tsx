import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const cardTransferrerSlice = createSlice({
    name: 'cardTransferrer',
    initialState: {
        cardId: '',
        ownerId: '',
        newOwnerId: ''
    },
    reducers: {
        cardIdEdited: (state, action) => {
            state.cardId = action.payload;
        },
        ownerIdEdited: (state, action) => {
            state.ownerId = action.payload;
        },
        newOwnerIdEdited: (state, action) => {
            state.newOwnerId = action.payload;
        }
    },
});

export const cardTransferrerReducer = cardTransferrerSlice.reducer;
// Actions
const {cardIdEdited, ownerIdEdited, newOwnerIdEdited} = cardTransferrerSlice.actions;

export const editCardId = (cardId: string) => (dispatch: Dispatch) => {
    dispatch(cardIdEdited(cardId));
};

export const editOwnerId = (ownerId: string) => (dispatch: Dispatch) => {
    dispatch(ownerIdEdited(ownerId));
};

export const editNewOwnerId = (newOwnerId: string) => (dispatch: Dispatch) => {
    dispatch(newOwnerIdEdited(newOwnerId));
};
