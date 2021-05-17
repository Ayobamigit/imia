import React, { useState, createContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import SignInHeader from '../../../../components/SignInComponents/SignInHeader';
import SignInDescription from '../../../../components/SignInComponents/SignInDescription';
import ForgotPasswordForm from '../../../../components/SignInComponents/ForgotPasswordForm/ForgotPasswordForm';
import CreateNewPassword from '../../../../components/SignInComponents/ForgotPasswordForm/CreateNewPassword';

export const ForgotPasswordContext = createContext();

const ForgotPassword = () => {
    const [state, setState] = useState({
        route: 'email-form'
    })

    const sendCode = () =>{
        setState(state=>({
            ...state,
            route: 'new-password'
        }))
    }

    const renderPages = () =>{
        switch(route) {
            case 'email-form':
                return <ForgotPasswordForm />;
            case 'new-password':
                return <CreateNewPassword />;
            default:
                return <ForgotPasswordForm />
          }
    }

    const {route} = state;
    return (
        <ForgotPasswordContext.Provider value={{
            sendCode
        }}>
        <>
            <SignInHeader/> 
            <Row className="form-div">
                <Col lg={5}>
                    {renderPages()}
                </Col>
                <Col lg={7}>
                    <SignInDescription />
                </Col>
            </Row>
        </>
        </ForgotPasswordContext.Provider>
    )
}

export default ForgotPassword
