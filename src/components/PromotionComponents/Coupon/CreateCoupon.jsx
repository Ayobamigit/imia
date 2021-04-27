import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as Image} from '../../../assets/icons/Image.svg';
import {ReactComponent as SearchIcon} from '../../../assets/icons/greysearch.svg';
import {ReactComponent as Percent} from '../../../assets/icons/percentage.svg';


const CreateCoupon = () => {
    return (
        <div className="address-div">
        <div>
            <h6 className="sideDrawer-header">Coupon code</h6>
            <p className="sideDrawer-subheader">Enter the coupon code details below</p>
        </div>
        <div>
            <form>
                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col>
                        <label>Coupon code<span className="forgot-password"><u>Generate code</u></span></label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="eg. Black Friday Sales" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup" style={{marginBottom:'12px'}}>
                    <Col>
                        <label>Enter percentage discount</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter percentage off" />
                            <Percent className="profile-password-icon promotion-formIcons"/>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Duration</label>
                        <div className="input-group">
                            <input type="date" className="formcontrol" placeholder="Select end date" />
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    <div className="general-button full-width">
                    Save
                    </div>
                </Row>
                
                
            </form>
        </div>
    </div>
    )
}

export default CreateCoupon
