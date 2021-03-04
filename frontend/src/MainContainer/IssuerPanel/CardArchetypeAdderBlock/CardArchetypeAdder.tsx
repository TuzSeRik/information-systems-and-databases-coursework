import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {editName, editIssuerId, editValue} from "./cardArchetypeAdderSlice";
import {addCard, addCardArchetype} from "../issuerSlice";
import {StoreType} from "../../../AppContainer/store";
import './CardArchetypeAdder.css';

export function CardArchetypeAdder() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {name, issuerId, value} = useSelector((state: StoreType) => state.cardArchetypeAdderReducer);
    const dispatch = useDispatch();

    return (
        <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={event => dispatch(editName(event.target.value))}
                />
                <Form.Label>Issuer Id</Form.Label>
                <Form.Control
                    type="text"
                    value={issuerId}
                    onChange={event => dispatch(editIssuerId(event.target.value))}
                />
                <Form.Label>Value</Form.Label>
                <Form.Control
                    type="text"
                    value={value}
                    onChange={event => dispatch(editValue(event.target.value))}
                />
                <Button
                    onClick={() =>
                        dispatch(addCardArchetype(authData, {name, issuerId, value}))
                    }
                >
                    Add Card Archetype
                </Button>
            </Form.Group>
        </Form>
    );
}
