import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {registerClient} from "../SignUpPanel/signUpSlice";
import {editGivenName, editFamilyName, editPicLink} from "./clientSignUpSlice";
import {StoreType} from '../../AppContainer/store';
import './ClientSignUp.css';

export function ClientSignUp() {
    const {givenName, familyName, picLink} =
        useSelector((state: StoreType) => state.clientSignUpReducer);
    const {login, password, invitationCode} = useSelector((state: StoreType) => state.userSignUpReducer);
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Given Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter given name"
                                          value={givenName}
                                          onChange={event => dispatch(editGivenName(event.target.value))}/>
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter family name"
                                          value={familyName}
                                          onChange={event => dispatch(editFamilyName(event.target.value))}/>
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
                        dispatch(registerClient(window.btoa(login + ':' + password),
                                {givenName, familyName, picLink}));
                    }}>
                        Create Client Profile
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
