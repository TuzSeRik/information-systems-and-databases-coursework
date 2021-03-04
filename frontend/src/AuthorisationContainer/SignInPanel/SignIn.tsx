import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {editLogin, editPassword} from "./signInSlice";
import {auth} from '../authorisationSlice';
import {register} from '../SignUpPanel/signUpSlice';
import {StoreType} from '../../AppContainer/store';
import './SignIn.css';

export function SignIn() {
    const isAuthorised = useSelector(
        (state: StoreType) => state.authorisationReducer.isAuthorised
    );
    const {login, password} = useSelector(
        (state: StoreType) => state.signInReducer
    );
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (isAuthorised)
            history.push('/main/' + login);
        else
            dispatch(editPassword(''));
    }, [isAuthorised]);

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" placeholder="Enter login"
                                          value={login}
                                          onChange={event => dispatch(editLogin(event.target.value))}/>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password"
                                            value={password}
                                            onChange={event => dispatch(editPassword(event.target.value))}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(auth(window.btoa(login + ':' + password)));
                    }}>
                        Sign In
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => dispatch(register(true))}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
