import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authorisationReducer} from "../AuthorisationContainer/authorisationSlice";
import {signInReducer} from "../AuthorisationContainer/SignInPanel/signInSlice";
import {signUpReducer} from "../AuthorisationContainer/SignUpPanel/signUpSlice";
import {userSignUpReducer} from "../AuthorisationContainer/SignUpPanel/UserSignUpBlock/userSignUpSlice";
import {clientSignUpReducer} from "../AuthorisationContainer/SignUpPanel/ClientSignUpBlock/clientSignUpSlice";
import {issuerSignUpReducer} from "../AuthorisationContainer/SignUpPanel/IssuerSignUpBlock/issuerSignUpSlice";
import {managerSignUpReducer} from "../AuthorisationContainer/SignUpPanel/ManagerSignUpBlock/managerSignUpSlice";
import {mainReducer} from "../MainContainer/mainSlice";
import {administratorReducer} from "../MainContainer/AdministratorPanel/administratorSlice";
import {managerReducer} from "../MainContainer/ManagerPanel/managerSlice";

const rootReducer = combineReducers({
    authorisationReducer,
    signInReducer,
    signUpReducer,
    userSignUpReducer,
    clientSignUpReducer,
    issuerSignUpReducer,
    managerSignUpReducer,
    mainReducer,
    administratorReducer,
    managerReducer
});

export const store = configureStore({reducer: rootReducer});
export type StoreType = ReturnType<typeof store.getState>;
