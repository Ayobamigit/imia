import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import { BuyerLayoutContext } from '../BuyerLayout';

const Reset_password = () => {
    const {onOpenSideBar, sendCode}= useContext(BuyerLayoutContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Reset password</h6>
                <p className="sideDrawer-subheader">Enter your email address to get a reset code.</p>
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

                    <div className="general-button full-width" onClick={sendCode}>
                    Get reset code
                    </div>
                </form>

                <Divider />

                <div className="sign-first inmt-15">
                    <h3 className="sign-first-text">Remember password? <span className ="get-started" onClick={()=>{onOpenSideBar('sign-in')}}><u>Log in</u></span> </h3>
                </div>
            </div>
        </div>
    )
}

export default Reset_password
