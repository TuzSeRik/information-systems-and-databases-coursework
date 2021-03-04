import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateContract} from "../managerSlice";
import {StoreType} from "../../../AppContainer/store";
import './Contract.css';

export function Contract(args: {id: string, serviceName: string, receiverLogin: string,
                                cardName: string, status: string}) {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData)
    const dispatch = useDispatch();

    return (
        <Container>
            <Row>
                <Col>
                    <span>Service name: {args.serviceName}</span>
                </Col>
                <Col>
                    <span>Receiver Login: {args.receiverLogin}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>Card name: {args.cardName}</span>
                </Col>
                <Col>
                    <span>Status: {args.status}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() =>
                        dispatch(updateContract(authData, args.id, "CANCELED"))
                    }>
                        Cancel contract
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() =>
                        dispatch(updateContract(authData, args.id, "CONFIRMED"))
                    }>
                        Confirm contract
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
