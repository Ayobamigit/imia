import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import { BuyerLayoutContext } from '../BuyerLayout';

const Create_password = () => {
    const {togglePassword, onOpenSideBar, state:{isPasswordShown}}= useContext(BuyerLayoutContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Create new password</h6>
                <p className="sideDrawer-subheader">We just sent a reset code to your email address. Check and enter it below.</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup">
                        <Col>
                            <label>Reset code (check your email)</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="000 000" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup">
                        <Col>
                            <label>New password</label>
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
                        Create new password
                    </div>
                </form>

                <div className="sign-first mt-14">
                    <h3 className="sign-first-text">Did not get code? <span className="get-started"><u>Resend</u></span> </h3>
                </div>


                <Divider />
                
                <div className="sign-first inmt-15">
                    <h3 className="sign-first-text">Remember password? <span className="get-started" onClick={()=>{onOpenSideBar('sign-in')}}><u>Log in</u></span> </h3>
                </div>
            </div>
        </div>
    )
}

export default Create_password
