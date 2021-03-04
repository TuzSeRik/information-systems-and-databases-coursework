import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {editBalance, editCardArchetypeId, editName, editOwnerId} from "./cardAdderSlice";
import {addCard} from "../issuerSlice";
import {StoreType} from "../../../AppContainer/store";
import './CardAdder.css';

export function CardAdder() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {cardArchetypeId, name, ownerId, balance} = useSelector((state: StoreType) => state.cardAdderReducer);
    const dispatch = useDispatch();

    return (
        <Form>
            <Form.Group>
                <Form.Label>Card Archetype Id</Form.Label>
                <Form.Control
                    type="text"
                    value={cardArchetypeId}
                    onChange={event => dispatch(editCardArchetypeId(event.target.value))}
                />
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={event => dispatch(editName(event.target.value))}
                />
                <Form.Label>Owner Id</Form.Label>
                <Form.Control
                    type="text"
                    value={ownerId}
                    onChange={event => dispatch(editOwnerId(event.target.value))}
                />
                <Form.Label>Balance</Form.Label>
                <Form.Control
                    type="text"
                    value={balance}
                    onChange={event => dispatch(editBalance(event.target.value))}
                />
                <Button
                    onClick={() =>
                        dispatch(addCard(authData, {cardArchetypeId, name, ownerId, balance}))
                    }
                >
                    Add Card
                </Button>
            </Form.Group>
        </Form>
    );
}
