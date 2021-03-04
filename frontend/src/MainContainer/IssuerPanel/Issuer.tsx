import React, {useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {loadCardArchetypes, loadCards, loadServices} from "./issuerSlice";
import {StoreType} from "../../AppContainer/store";
import {CardArchetype} from "./CardArchetypeBlock/CardArchetype";
import {Service} from "./ServiceBlock/Service";
import {Card} from "./CardBlock/Card";
import {CardAdder} from "./CardAdderBlock/CardAdder";
import {CardArchetypeAdder} from "./CardArchetypeAdderBlock/CardArchetypeAdder";
import {ServiceAdder} from "./ServiceAdderBlock/ServiceAdder";
import {CardTransferer} from "./CardTransfererBlock/CardTransferer";
import "./Issuer.css";

export function Issuer() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {cardArchetypes, services, cards} = useSelector((state: StoreType) => state.issuerReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCardArchetypes(authData));
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadServices(authData));
    }, [dispatch]);

    useEffect(() => {
        dispatch(loadCards(authData));
    }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col>
                    <h4>Your card archetypes</h4>
                </Col>
                <Col>
                    <h4>Services of archetypes</h4>
                </Col>
                <Col>
                    <h4>Not released cards</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        cardArchetypes.map(cardArchetype =>
                            <>
                                <CardArchetype {...cardArchetype} />
                            </>
                        )
                    }
                </Col>
                <Col>
                    {
                        services.map(service =>
                            <>
                                <Service {...service} />
                            </>
                        )
                    }
                </Col>
                <Col>
                    {
                        cards.map(card =>
                            <>
                                <Card {...card} />
                            </>
                        )
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {
                        dispatch(loadCardArchetypes(authData));
                    }}>
                        Reload Card Archetypes
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => {
                        dispatch(loadServices(authData));
                    }}>
                        Reload Services
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => {
                        dispatch(loadCards(authData));
                    }}>
                        Reload Cards
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardArchetypeAdder />
                </Col>
                <Col>
                    <ServiceAdder />
                </Col>
                <Col>
                    <CardAdder />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardTransferer />
                </Col>
            </Row>
        </Container>
    );
}
