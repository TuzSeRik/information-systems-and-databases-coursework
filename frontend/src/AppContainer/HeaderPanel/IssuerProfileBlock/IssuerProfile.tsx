import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './IssuerProfile.css';

export function IssuerProfile(profile: {givenName: string, nickname: string, familyName: string,
                                        famousFor: string, picLink: string}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>{profile.givenName}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{profile.nickname}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{profile.familyName}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{profile.famousFor}</span>
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
