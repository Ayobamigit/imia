import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Text} from '../../../../assets/icons/text.svg';


const AddPickUp = () => {
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Pickup Settings</h6>
                <p className="sideDrawer-subheader">Indicate the number of days after order confirmation for buyer to pickup order</p>
            </div>
            <div style={{marginTop:'25px'}}>
                <form>
                    <Row className="formgroup" style={{marginBottom:'16px'}}>
                        <Col>
                            <label>Minimum number of days</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter number" />
                                <Text className="profile-password-icon" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup">
                        <Col>
                            <label>Maximum number of days</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter number"/>
                                <Text className="profile-password-icon" />
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop:'17px'}}>
                        <div className="general-button full-width">
                            Save
                        </div>
                    </Row>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default AddPickUp
