import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SignInHeader from '../../../../components/SignInComponents/SignInHeader';
import SignInDescription from '../../../../components/SignInComponents/SignInDescription';
import SignInForm from '../../../../components/SignInComponents/SignInForm/SignInForm';

const MainLogin = () => {
    return (
        <>
            <SignInHeader/> 
            <Row className="form-div">
                <Col lg={5}>
                    <SignInForm />
                </Col>
                <Col lg={7}>
                    <SignInDescription />
                </Col>
            </Row>
        </>
    )
}

export default MainLogin
