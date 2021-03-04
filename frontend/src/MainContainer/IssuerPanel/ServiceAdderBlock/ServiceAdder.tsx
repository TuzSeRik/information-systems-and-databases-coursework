import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {editName, editPrice, editArchetypeId} from "./serviceAdderSlice";
import {addService} from "../issuerSlice";
import {StoreType} from "../../../AppContainer/store";
import './ServiceAdder.css';

export function ServiceAdder() {
    const authData = useSelector((state: StoreType) => state.authorisationReducer.authData);
    const {archetypeId, name, price} = useSelector((state: StoreType) => state.serviceAdderReducer);
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
                <Form.Label>Archetype Id</Form.Label>
                <Form.Control
                    type="text"
                    value={archetypeId}
                    onChange={event => dispatch(editArchetypeId(event.target.value))}
                />
                <Form.Label>Value</Form.Label>
                <Form.Control
                    type="text"
                    value={price}
                    onChange={event => dispatch(editPrice(event.target.value))}
                />
                <Button
                    onClick={() =>
                        dispatch(addService(authData, {archetypeId, name, price}))
                    }
                >
                    Add Service
                </Button>
            </Form.Group>
        </Form>
    );
}
