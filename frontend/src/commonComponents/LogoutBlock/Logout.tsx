import React from 'react';
import {useDispatch} from 'react-redux';
import {Button} from 'react-bootstrap';
import {logout} from "../../authorisationPage/AuthorisationContainer/authorisationSlice";
import './Logout.css';

export function Logout() {
    const dispatch = useDispatch();
    return (
        <Button onClick={dispatch(logout)}>
            Logout
        </Button>
    );
}
