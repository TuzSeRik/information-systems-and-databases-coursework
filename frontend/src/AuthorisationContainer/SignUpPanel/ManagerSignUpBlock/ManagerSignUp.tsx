import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {registerManager} from "../signUpSlice";
import {editName, editPicLink} from "./managerSignUpSlice";
import {StoreType} from '../../../AppContainer/store';
import './ManagerSignUp.css';


export function ManagerSignUp() {
    const {name, picLink} =
        useSelector((state: StoreType) => state.managerSignUpReducer);
    const {login, password, invitationCode} = useSelector((state: StoreType) => state.userSignUpReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter given name"
                                          value={name}
                                          onChange={event => dispatch(editName(event.target.value))}/>
                            <Form.Label>Pic Link</Form.Label>
                            <Form.Control type="text" placeholder="Enter picture link"
                                          value={picLink}
                                          onChange={event => dispatch(editPicLink(event.target.value))}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(registerManager(window.btoa(login + ':' + password), {name, picLink}));
                        history.push('/');
                    }}>
                        Create Manager Profile
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
