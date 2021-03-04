import {createSlice, Dispatch} from '@reduxjs/toolkit';
// Reducers
const managerSlice = createSlice({
    name: 'manager',
    initialState: {
        contracts: [],
        transactions: [],
        isDisableOld: false
    },
    reducers: {
        contractsLoaded: (state, action) => {
            state.contracts = action.payload.summaries;
        },
        transactionsLoaded: (state, action) => {
            state.transactions = action.payload.summaries;
        },
        contractUpdate: (state, action) => {
            state.contracts.filter((contract: {id: string, serviceName: string, receiverLogin: string,
                cardName: string, status: string}) => contract.id !== action.payload.id);
            state.contracts = state.contracts.concat(action.payload);
        },
        transactionUpdate: (state, action) => {
            state.transactions.filter((transaction: {id: string, cardName: string, previousOwnerLogin: string,
                                            currentOwnerLogin: string, timestamp: string, status: string}) =>
                transaction.id !== action.payload.id);
            state.transactions = state.transactions.concat(action.payload);
        },
        disablingSet: (state, action) =>  {
            state.isDisableOld = action.payload
        }
    },
});

export const managerReducer = managerSlice.reducer;
// Actions
const {contractsLoaded, transactionsLoaded, contractUpdate, transactionUpdate, disablingSet} = managerSlice.actions;

export const loadContracts = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/contract', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(contractsLoaded(body));
}

export const updateContract = (authData: string, id: string, status: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/contract', {
        body: JSON.stringify({id, status}),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(contractUpdate(body));
}

export const loadTransactions = (authData: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/contract', {
        headers: {
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(transactionsLoaded(body));
}

export const updateTransaction = (authData: string, id: string, status: string) => async (dispatch: Dispatch) => {
    const response = await fetch('http://localhost:8080/api/contract/mark', {
        body: JSON.stringify({id, status}),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + authData
        },
        credentials: "include"
    });
    const body = await response.json();

    dispatch(transactionUpdate(body));
}

export const switchDisabling = (value: boolean) => (dispatch: Dispatch) => {
    dispatch(disablingSet(value));
}
