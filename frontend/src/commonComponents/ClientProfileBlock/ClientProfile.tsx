import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ClientProfile.css';

export function ClientProfile(profile: {givenName: string, familyName: string, picLink: string}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>{profile.givenName}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{profile.familyName}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{profile.picLink}</span>
                </Col>
            </Row>
        </Container>
    );
}
