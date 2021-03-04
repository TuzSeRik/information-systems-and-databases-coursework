import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './CardArchetype.css';

export function CardArchetype(args: {id: string, name: string, issuer: string, value: number}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>Archetype Id: {args.id}</span>
                </Col>
                <Col>
                    <span>Archetype Name: {args.name}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Issuer Id: {args.issuer}</span>
                </Col>
                <Col>
                    <span>Value: {args.value}</span>
                </Col>
            </Row>
        </Container>
    );
}
