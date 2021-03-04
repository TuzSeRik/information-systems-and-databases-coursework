import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {registerUser} from "../signUpSlice";
import {editLogin, editPassword, editInvitationCode} from "./userSignUpSlice";
import {StoreType} from '../../../AppContainer/store';
import './UserSignUp.css';

export function UserSignUp() {
    const {login, password, invitationCode} =
        useSelector((state: StoreType) => state.userSignUpReducer);
    const dispatch = useDispatch();

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
                            <Form.Label>Invitation code</Form.Label>
                            <Form.Control type="text" placeholder="Enter code, if you have one"
                                          value={invitationCode}
                                          onChange={event => dispatch(editInvitationCode(event.target.value))}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(registerUser({login, password, invitationCode}));
                    }}>
                        Sign Up
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
