import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Card.css';

export function Card(args: {id: string, cardArchetypeId: string, name: string, ownerId: string,
                                balance: number}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>Card Id: {args.id}</span>
                </Col>
                <Col>
                    <span>Card Name: {args.name}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Archetype Id: {args.cardArchetypeId}</span>
                </Col>
                <Col>
                    <span>Owner Id: {args.ownerId}</span>
                </Col>
                <Col>
                    <span>Balance: {args.balance}</span>
                </Col>
            </Row>
        </Container>
    );
}
