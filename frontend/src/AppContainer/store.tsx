import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authorisationReducer} from "../authorisationPage/AuthorisationContainer/authorisationSlice";
import {signInReducer} from "../authorisationPage/SignInPanel/signInSlice";
import {signUpReducer} from "../authorisationPage/SignUpPanel/signUpSlice";
import {userSignUpReducer} from "../authorisationPage/UserSignUpBlock/userSignUpSlice";
import {clientSignUpReducer} from "../authorisationPage/ClientSignUpBlock/clientSignUpSlice";
import {issuerSignUpReducer} from "../authorisationPage/IssuerSignUpBlock/issuerSignUpSlice";
import {managerSignUpReducer} from "../authorisationPage/ManagerSignUpBlock/managerSignUpSlice";
import {mainReducer} from "../mainPage/MainContainer/mainSlice";

const rootReducer = combineReducers({
    authorisationReducer,
    signInReducer,
    signUpReducer,
    userSignUpReducer,
    clientSignUpReducer,
    issuerSignUpReducer,
    managerSignUpReducer,
    mainReducer
});

export const store = configureStore({reducer: rootReducer});
export type StoreType = ReturnType<typeof store.getState>;
