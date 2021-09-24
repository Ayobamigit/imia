import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SignUpContext } from '../../../pages/Merchant/SignIn/SignUp/SignUp';
import SubmitLoader from '../../SubmitLoader/SubmitLoader';

const SignUpForm = () => {
    const {state:{isPasswordShown, isLoading}, togglePassword, createMerchant, onChange} = useContext(SignUpContext)
    return (
        <div className="signIn-Form">
            <h3 className="signIn-Form-title-heading">Create your account</h3>
            <h6 className="signIn-Form-title-desc">Enter your details below to create your account.</h6>
            
            <form>
                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col lg={6}>
                        <label>First name</label>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="formcontrol" 
                                placeholder="eg. Anwuli" 
                                onChange={onChange}
                                name="firstName"
                            />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <label>Last name</label>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="formcontrol" 
                                placeholder="eg. Msilanga"
                                onChange={onChange}
                                name="lastName" 
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col>
                        <label>Email address</label>
                        <div className="input-group">
                            <input 
                                type="email" 
                                className="formcontrol" 
                                placeholder="eg. anwuli@gmail.com" 
                                onChange={onChange}
                                name="email"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col>
                        <label>Business name</label>
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="formcontrol" 
                                placeholder="Enter the name of your business" 
                                onChange={onChange}
                                name="businessName"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col>
                        <label>Create password</label>
                        <div className="input-group">
                            <input 
                                type={isPasswordShown ? "text" : "password"} 
                                className="formcontrol" 
                                placeholder="Type your password" 
                                onChange={onChange}
                                name="password"
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

                <div className="general-button full-width" onClick={createMerchant}>
                    {
                        isLoading ?
                        <SubmitLoader />
                        :
                        'Create your account'
                    }
                </div>
            </form>

            <div className="sign-first mt-14">
                <h3 className="sign-first-text">By creating an account, you agree with our <span className="get-started"><Link to="#"><u>Terms</u></Link></span> </h3>
            </div>

            <Divider />
            
            <div className="sign-first inmt-15">
                <h3 className="sign-first-text">Already have an account? <span className="get-started"><Link to="vendor-log-in"><u>Log in</u></Link></span> </h3>
            </div>
        </div>
    )
}

export default SignUpForm
