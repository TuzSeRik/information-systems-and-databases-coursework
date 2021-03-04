import React from 'react';
import {useSelector} from 'react-redux';
import {Col, Container, Row} from 'react-bootstrap';
import {Logout} from './LogoutBlock/Logout';
import {ClientProfile} from './ClientProfileBlock/ClientProfile';
import {IssuerProfile} from './IssuerProfileBlock/IssuerProfile';
import {ManagerProfile} from './ManagerProfileBlock/ManagerProfile';
import {ProfileType} from "../../AuthorisationContainer/authorisationSlice";
import {StoreType} from '../store';
import './Header.css';

export function Header() {
    const isAuthorised = useSelector(
        (state: StoreType) => state.authorisationReducer.isAuthorised
    );
    const profileType = useSelector((state: StoreType) => state.authorisationReducer.profileType);
    const {client, issuer, manager} = useSelector(
        (state: StoreType) => state.mainReducer
    );

    const componentSwitch = (profileType: ProfileType) => {
        switch (profileType) {
            case ProfileType.CLIENT:
                return <ClientProfile {...client} />;
            case ProfileType.ISSUER:
                return <IssuerProfile {...issuer}/>;
            case ProfileType.MANAGER:
                return <ManagerProfile {...manager}/>;
            case ProfileType.ADMINISTRATOR:
                return <div />
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    {isAuthorised ? <Logout /> : <div />}
                </Col>
                <Col>
                    <h3>ISDB Coursework</h3>
                </Col>
                <Col>
                    {componentSwitch(profileType)}
                </Col>
            </Row>
        </Container>
    );
}
