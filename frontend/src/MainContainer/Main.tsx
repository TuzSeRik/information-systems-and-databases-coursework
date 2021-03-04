import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Col, Container, Row} from 'react-bootstrap';
import {Client} from './ClientPanel/Client';
import {Issuer} from './IssuerPanel/Issuer';
import {Manager} from './ManagerPanel/Manager';
import {Administrator} from './AdministratorPanel/Administrator';
import {load} from "./mainSlice";
import {ProfileType} from "../AuthorisationContainer/authorisationSlice";
import {StoreType} from "../AppContainer/store";
import './Main.css';

export function Main() {
    const profileType = useSelector((state: StoreType) => state.authorisationReducer.profileType);
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const dispatch = useDispatch();
    dispatch(load(profileType, authData));

    const componentSwitch = (profileType: ProfileType) => {
        switch (profileType) {
            case ProfileType.CLIENT:
                return <Client />;
            case ProfileType.ISSUER:
                return <Issuer />;
            case ProfileType.MANAGER:
                return <Manager />;
            case ProfileType.ADMINISTRATOR:
                return <Administrator />
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    {componentSwitch(profileType)}
                </Col>
            </Row>
        </Container>
    );
}
