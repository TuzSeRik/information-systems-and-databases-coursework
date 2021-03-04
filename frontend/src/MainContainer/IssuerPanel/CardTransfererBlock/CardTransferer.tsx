import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {editCardId, editOwnerId, editNewOwnerId} from "./cardTransferrerSlice";
import {transferCard} from "../issuerSlice";
import {StoreType} from "../../../AppContainer/store";
import './CardTransferer.css';

export function CardTransferer() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {cardId, ownerId, newOwnerId} = useSelector((state: StoreType) => state.cardTransferrerReducer);
    const dispatch = useDispatch();

    return (
        <Form>
            <Form.Group>
                <Form.Label>Card Id</Form.Label>
                <Form.Control
                    type="text"
                    value={cardId}
                    onChange={event => dispatch(editCardId(event.target.value))}
                />
                <Form.Label>Owner Id</Form.Label>
                <Form.Control
                    type="text"
                    value={ownerId}
                    onChange={event => dispatch(editOwnerId(event.target.value))}
                />
                <Form.Label>New Owner Id</Form.Label>
                <Form.Control
                    type="text"
                    value={newOwnerId}
                    onChange={event => dispatch(editNewOwnerId(event.target.value))}
                />
                <Button
                    onClick={() =>
                        dispatch(transferCard(authData, {cardId, ownerId, newOwnerId}))
                    }
                >
                    Transfer card
                </Button>
            </Form.Group>
        </Form>
    );
}
