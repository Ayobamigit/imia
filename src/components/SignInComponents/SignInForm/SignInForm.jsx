import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../../../pages/Merchant/SignIn/MainLogin/MainLogin';
import SubmitLoader from '../../SubmitLoader/SubmitLoader';

const SignInForm = () => {
    const {state:{isPasswordShown, isLoggingIn}, onChange, togglePassword, onClickLogin} = useContext(LoginContext);

    return (
        <div className="signIn-Form">
            <h3 className="signIn-Form-title-heading">Welcome back</h3>
            <h6 className="signIn-Form-title-desc">Log in to manage your store.</h6>
            
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Email address</label>
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="formcontrol" 
                                placeholder="eg. anwuli@gmail.com"
                                name="email"
                                onChange = {onChange}
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Password <span className="forgot-password"><Link to="reset-password"><u>Forgot password?</u></Link></span></label>
                        <div className="input-group">
                            <input 
                                type={isPasswordShown ? "text" : "password"} 
                                className="formcontrol" 
                                placeholder="Type your password"
                                name="password"
                                onChange = {onChange}
                            />
                            {
                                isPasswordShown ?
                                <EyeClosed className="profile-password-icon" onClick={togglePassword} />
                                :
                                <EyeOpened className="profile-password-icon" onClick={togglePassword} />
                            }
                        </div>
                    </Col>
                </Row>

                <div className="general-button full-width" onClick={onClickLogin}>
                    {
                        isLoggingIn ?
                        <SubmitLoader />
                        :
                        'Log in to your account'
                    }
                    
                </div>
            </form>

            <Divider />
            
            <div className="sign-first inmt-15">
                <h3 className="sign-first-text">First time here? <span className="get-started"><Link to="create-account"><u>Get started</u></Link></span> </h3>
            </div>
        </div>
    )
}

export default SignInForm
