import React from 'react';
import {useSelector} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import {SignIn} from './SignInPanel/SignIn';
import {SignUp} from './SignUpPanel/SignUp';
import {StoreType} from '../AppContainer/store';
import './Authorisation.css';

export function Authorisation() {
    const isRegistering = useSelector((state: StoreType) => state.signUpReducer.isRegistering);

    return (
        <Container>
            <Row>
                <Col>
                    {
                        !isRegistering ?
                        <SignIn /> :
                        <SignUp />
                    }
                </Col>
            </Row>
        </Container>
    );
}
