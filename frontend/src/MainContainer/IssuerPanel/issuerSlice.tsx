import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const issuerSlice = createSlice({
    name: 'issuer',
    initialState: {
        cardArchetypes: [],
        services: [],
        cards: []
    },
    reducers: {
        cardArchetypesLoaded: (state, action) => {
            state.cardArchetypes = action.payload.summaries;
        },
        servicesLoaded: (state, action) => {
            state.services = action.payload.summaries;
        },
        cardsLoaded: (state, action) => {
            state.cards = action.payload.summaries;
        },
        cardArchetypesAdded: (state, action) => {
            state.cardArchetypes = state.cardArchetypes.concat(action.payload);
        },
        servicesAdded: (state, action) => {
            state.services = state.services.concat(action.payload);
        },
        cardsAdded: (state, action) => {
            state.cards = state.cards.concat(action.payload);
        },
        cardTransferred: (state, action) => {
            state.cards = state.cards.filter((card: {id: string, archetypeId: string,
                name: string, userId: string, balance: number}) => card.id !== action.payload.id);
        }
    },
});

export const issuerReducer = issuerSlice.reducer;
// Actions
const {cardArchetypesLoaded, cardArchetypesAdded,
    cardsLoaded, cardsAdded, servicesLoaded, servicesAdded, cardTransferred} = issuerSlice.actions;

export const loadCardArchetypes = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/archetype', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(cardArchetypesLoaded(body));
}

export const loadServices = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/service', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(servicesLoaded(body));
}

export const loadCards = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/card', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(cardsLoaded(body));
}

export const addCardArchetype = (authData: string, archetype: {name: string, issuerId: string, value: number}) =>
        async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/archetype', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include",
        body: JSON.stringify(archetype)
    });
    const body = await response.json();

    dispatch(cardArchetypesAdded(body));
}

export const addService = (authData: string, service: {archetypeId: string, name: string, price: number}) =>
        async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/service', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include",
        body: JSON.stringify(service)
    });
    const body = await response.json();

    dispatch(servicesAdded(body));
}

export const addCard = (authData: string, card: {cardArchetypeId: string,
        name: string, ownerId: string, balance: number}) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include",
        body: JSON.stringify(card)
    });
    const body = await response.json();

    dispatch(cardsAdded(body));
}

export const transferCard = (authData: string, transfer: {cardId: string, ownerId: string, newOwnerId: string}) =>
        async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/card/transfer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include",
        body: JSON.stringify(transfer)
    });
    const body = await response.json();

    dispatch(cardTransferred(body));
}
