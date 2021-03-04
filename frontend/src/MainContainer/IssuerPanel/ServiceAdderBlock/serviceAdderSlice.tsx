import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const serviceAdderSlice = createSlice({
    name: 'serviceAdderSlice',
    initialState: {
        archetypeId: '',
        name: '',
        price: 0
    },
    reducers: {
        nameEdited: (state, action) => {
            state.name = action.payload;
        },
        archetypeIdEdited: (state, action) => {
            state.archetypeId = action.payload;
        },
        priceEdited: (state, action) => {
            state.price = action.payload;
        }
    },
});

export const serviceAdderReducer = serviceAdderSlice.reducer;
// Actions
const {archetypeIdEdited, nameEdited, priceEdited} = serviceAdderSlice.actions;

export const editName = (name: string) => (dispatch: Dispatch) => {
    dispatch(nameEdited(name));
};

export const editArchetypeId = (archetypeId: string) => (dispatch: Dispatch) => {
    dispatch(archetypeIdEdited(archetypeId));
};

export const editPrice = (price: string) => (dispatch: Dispatch) => {
    dispatch(priceEdited(price));
};
