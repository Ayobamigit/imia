import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import { Link } from 'react-router-dom';

const CreateNewPassword = () => {
    const [state, setState] = useState({
        isPasswordShown: true
    })

    const togglePassword = () =>{
        setState(state=>({
            ...state,
            isPasswordShown  : !isPasswordShown
        }))
    }

    const {isPasswordShown} = state;
    return (
        <div className="signIn-Form">
            <h3 className="signIn-Form-title-heading">Create new password</h3>
            <h6 className="signIn-Form-title-desc">Enter the reset code we just sent & a new password.</h6>
            
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
                <h3 className="sign-first-text">Did not get code? <span className="get-started"><Link to="#"><u>Resend</u></Link></span> </h3>
            </div>


            <Divider />
            
            <div className="sign-first inmt-15">
                <h3 className="sign-first-text">Remember password? <span className="get-started"><Link to="log-in"><u>Log in</u></Link></span> </h3>
            </div>
        </div>
    )
}

export default CreateNewPassword
