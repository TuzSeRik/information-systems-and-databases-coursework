import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './Service.css';

export function Service(args: {id: string, cardArchetypeId: string, name: string, price: number}) {
    return (
        <Container>
            <Row>
                <Col>
                    <span>Service Id: {args.id}</span>
                </Col>
                <Col>
                    <span>Receiver Name: {args.name}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Archetype Id: {args.cardArchetypeId}</span>
                </Col>
                <Col>
                    <span>Price: {args.price}</span>
                </Col>
            </Row>
        </Container>
    );
}
