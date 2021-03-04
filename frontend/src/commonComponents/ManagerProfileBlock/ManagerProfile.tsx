import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ManagerProfile.css';

export function ManagerProfile(profile: {name: string, picLink: string}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>{profile.name}</span>
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
