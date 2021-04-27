import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Divider from '../../UI/Divider/Divider';
import {ForgotPasswordContext} from '../../../pages/SignIn/ForgotPassword/ForgotPassword';

const ForgotPasswordForm = () => {
    const { sendCode} = useContext(ForgotPasswordContext);

    return (
        <div className="signIn-Form">
            <h3 className="signIn-Form-title-heading">Reset password</h3>
            <h6 className="signIn-Form-title-desc">Enter your email address to get a reset code.</h6>
            
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Email address</label>
                        <div className="input-group">
                            <input type="email" className="formcontrol" placeholder="eg. anwuli@gmail.com" />
                        </div>
                    </Col>
                </Row>

                <div className="general-button full-width" onClick={sendCode}>
                Get reset code
                </div>
            </form>

            <Divider />

            <div className="sign-first inmt-15">
                <h3 className="sign-first-text">Remember password? <span className ="get-started"><Link to="log-in"><u>Log in</u></Link></span> </h3>
            </div>
        </div>
    )
}

export default ForgotPasswordForm
