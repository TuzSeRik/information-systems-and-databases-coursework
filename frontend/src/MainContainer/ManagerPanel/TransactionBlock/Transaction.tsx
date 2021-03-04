import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateTransaction} from "../managerSlice";
import {StoreType} from "../../../AppContainer/store";
import './Transaction.css';

export function Transaction(args: {id: string, cardName: string, previousOwnerLogin: string,
                                    currentOwnerLogin: string, timestamp: string, status: string}) {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData)
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col>
                    <span>Card name: {args.cardName}</span>
                </Col>
                <Col>
                    <span>Current owner login: {args.currentOwnerLogin}</span>
                </Col>
                <Col>
                    <span>Previous owner login: {args.previousOwnerLogin}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Timestamp: {args.timestamp}</span>
                </Col>
                <Col>
                    <span>Status: {args.status}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() =>
                        dispatch(updateTransaction(authData, args.id, "CANCELED"))
                    }>
                        Cancel contract
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() =>
                        dispatch(updateTransaction(authData, args.id, "CONFIRMED"))
                    }>
                        Confirm contract
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
