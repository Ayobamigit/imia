import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SignInHeader from '../../../components/SignInComponents/SignInHeader';
import SignInDescription from '../../../components/SignInComponents/SignInDescription';
import SignUpForm from '../../../components/SignInComponents/SignUpForm/SignUpForm';

const SignUp = () => {
    return (
        <>
            <SignInHeader/> 
            <Row className="form-div">
                <Col lg={5}>
                    <SignUpForm />
                </Col>
                <Col lg={7}>
                    <SignInDescription />
                </Col>
            </Row>
        </>
    )
}

export default SignUp
