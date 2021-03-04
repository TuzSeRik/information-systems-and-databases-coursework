import React from 'react';
import {useSelector} from "react-redux";
import {Container, Row, Col} from 'react-bootstrap';
import {UserType} from "./signUpSlice";
import {UserSignUp} from "./UserSignUpBlock/UserSignUp";
import {ClientSignUp} from "./ClientSignUpBlock/ClientSignUp";
import {IssuerSignUp} from "./IssuerSignUpBlock/IssuerSignUp";
import {ManagerSignUp} from "./ManagerSignUpBlock/ManagerSignUp";
import {StoreType} from "../../AppContainer/store";
import './SignUp.css';

export function SignUp() {
    const userType = useSelector((state: StoreType) => state.signUpReducer.userType);

    const componentSwitch = (userType: UserType) => {
        switch (userType) {
            case UserType.USER:
                return <UserSignUp />;
            case UserType.CLIENT:
                return <ClientSignUp />;
            case UserType.ISSUER:
                return <IssuerSignUp />;
            case UserType.MANAGER:
                return <ManagerSignUp />;
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    {componentSwitch(userType)}
                </Col>
            </Row>
        </Container>
    );
}
