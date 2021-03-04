import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addCodes, loadCodes} from "./administratorSlice";
import {Code} from "../CodeBlock/Code";
import {StoreType} from "../../AppContainer/store";
import "./Administrator.css";


export function Administrator() {
    const authData = useSelector( (state: StoreType) => state.authorisationReducer.authData);
    const codes = useSelector((state: StoreType) => state.administratorReducer.codes);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(loadCodes(authData))
        }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Issuer Codes</h4>
                </Col>
                <Col>
                    <h4>Manager Codes</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        codes.filter((code: {id: string, code: string, level: string}) => code.level === "ISSUER")
                             .map(
                                (code: {id: string, code: string, level: string}) => (
                                    <>
                                        <Code code={code.code} />
                                    </>
                                )
                            )
                    }
                </Col>
                <Col>
                    {
                        codes.filter((code: {id: string, code: string, level: string}) => code.level === "MANAGER")
                            .map(
                                (code: {id: string, code: string, level: string}) => (
                                    <>
                                        <Code code={code.code} />
                                    </>
                                )
                            )
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={
                        () => dispatch(addCodes(authData, "ISSUER", 10))
                    }>
                        Add 10 more Issuer codes
                    </Button>
                </Col>
                <Col>
                    <Button onClick={
                        () => dispatch(addCodes(authData, "MANAGER", 10))
                    }>
                        Add 10 more Issuer codes
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={
                        () => dispatch(loadCodes(authData))
                    }>
                        Reload codes
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
