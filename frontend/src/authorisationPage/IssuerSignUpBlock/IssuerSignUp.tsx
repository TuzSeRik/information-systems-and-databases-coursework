import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import {registerIssuer} from "../SignUpPanel/signUpSlice";
import {editGivenName, editNickname, editFamilyName, editFamousFor, editPicLink} from "./issuerSignUpSlice";
import {StoreType} from '../../AppContainer/store';
import './IssuerSignUp.css';

export function IssuerSignUp() {
    const {givenName, nickname, familyName, famousFor, picLink} =
        useSelector((state: StoreType) => state.issuerSignUpReducer);
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
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Nickname"
                                          value={nickname}
                                          onChange={event => dispatch(editNickname(event.target.value))}/>
                            <Form.Label>Family Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter family name"
                                          value={familyName}
                                          onChange={event => dispatch(editFamilyName(event.target.value))}/>
                            <Form.Label>Famous For</Form.Label>
                            <Form.Control type="text" placeholder="Enter What You Famous For"
                                          value={famousFor}
                                          onChange={event => dispatch(editFamousFor(event.target.value))}/>
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
                        dispatch(registerIssuer(window.btoa(login + ':' + password),
                            {givenName, nickname, familyName, famousFor, picLink}));
                    }}>
                        Create Issuer Profile
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
