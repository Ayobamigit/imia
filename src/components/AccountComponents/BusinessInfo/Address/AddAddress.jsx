import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../../UI/Divider/Divider'



const AddAddress = () => {
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Add address</h6>
                <p className="sideDrawer-subheader">Enter and save your address below</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Street address</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="eg. 15a Idejo Street, Victoria Island" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Apt, suite etc (optional)</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter additional address details" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col lg={6}>
                            <label>Country</label>
                            <div className="input-group">
                                <select className="formcontrol">
                                    <option>Choose</option>
                                    <option>Nigeria</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </Col>

                        <Col>
                            <label>City</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter city" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col lg={6}>
                            <label>State</label>
                            <div className="input-group">
                                <select className="formcontrol">
                                    <option>Choose</option>
                                    <option>Nigeria</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                            
                        </Col>
                        <Col lg={6}>
                            <label>Postal code</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter postal code" />
                            </div>
                        </Col>
                    </Row>

                    <Divider />

                    <Row style={{marginTop:'-20px', marginBottom:'-20px'}}>

                        <Col lg={6}>
                            <h6 className="form-desc" style={{color: '#4C4C4C'}}>
                                Set as primary address
                            </h6>
                        </Col>
                    </Row>

                    <Divider />

                    <Row style={{marginTop:'-20px'}}>

                        <Col lg={6}>
                            <h6 className="form-desc"style={{color: '#4C4C4C'}} >
                                Set as a pickup location
                            </h6>
                        </Col>

                        <Col lg={6}></Col>

                        <Col>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Give this location a name eg. Main Office" />
                            </div>
                        </Col>
                    </Row>

                    <Divider/>

                    <Row style={{marginTop:'-17px'}}>
                        <div className="general-button full-width">
                            Save Address
                        </div>
                    </Row>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default AddAddress
