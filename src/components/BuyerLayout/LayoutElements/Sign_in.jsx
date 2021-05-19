import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import { BuyerLayoutContext } from '../BuyerLayout';


const Sign_in = () => {
    const {togglePassword, onOpenSideBar, state:{isPasswordShown}} = useContext(BuyerLayoutContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Welcome</h6>
                <p className="sideDrawer-subheader">Enter your details below to log into your account.</p>
            </div>
            <div>
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Email address</label>
                        <div className="input-group">
                            <input type="email" className="formcontrol" placeholder="eg. anwuli@gmail.com" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Password <span className="forgot-password" onClick={()=>{onOpenSideBar('forgot')}}><u>Forgot password?</u></span></label>
                        <div className="input-group">
                            <input type={isPasswordShown ? "text" : "password"} className="formcontrol" placeholder="Type your password" />
                            {
                                isPasswordShown ?
                                <EyeClosed className="profile-password-icon" onClick={togglePassword} />
                                :
                                <EyeOpened className="profile-password-icon" onClick={togglePassword} />
                            }
                        </div>
                    </Col>
                </Row>

                <div className="general-button full-width">
                Log in to your account
                </div>
            </form>

            <Divider />
            
            <div className="sign-first inmt-15">
                <h3 className="sign-first-text">First time here? <span className="get-started" onClick={()=>{onOpenSideBar('sign-up')}}><u>Get started</u></span> </h3>
            </div>
            </div>
        </div>
    )
}

export default Sign_in
