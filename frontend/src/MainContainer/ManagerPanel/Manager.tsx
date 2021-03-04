import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {loadContracts, loadTransactions, switchDisabling} from "./managerSlice";
import {Contract} from "./ContractBlock/Contract";
import {Transaction} from "./TransactionBlock/Transaction";
import {StoreType} from "../../AppContainer/store";
import "./Manager.css";

export function Manager() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {contracts, transactions, isDisableOld} = useSelector((state: StoreType) => state.managerReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContracts(authData));
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadTransactions(authData));
    }, [dispatch])

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Contracts, Assigned to You</h4>
                </Col>
                <Col>
                    <h4>Pending Transactions</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        contracts.filter((contract: {id: string, serviceName: string, receiverLogin: string,
                            cardName: string, status: string}) => isDisableOld && contract.status !== "PENDING")
                            .map(contract => (
                                <>
                                    <Contract {...contract} />
                                </>
                            )
                        )
                    }
                </Col>
                <Col>
                    {
                        transactions.filter((transaction: {id: string, cardName: string, previousOwnerLogin: string,
                            currentOwnerLogin: string, timestamp: string, status: string}) =>
                                isDisableOld && transaction.status !== "PENDING")
                            .map(transaction => (
                                    <>
                                        <Transaction {...transaction} />
                                    </>
                                )
                            )
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(switchDisabling(!isDisableOld));
                    }}>
                        {
                            !isDisableOld ?
                                'Hide old objects?' :
                                'Show old objects?'
                        }
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(loadContracts(authData));
                    }}>
                        Reload contracts
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() =>
                        dispatch(loadTransactions(authData))
                    }>
                        Reload transactions
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
