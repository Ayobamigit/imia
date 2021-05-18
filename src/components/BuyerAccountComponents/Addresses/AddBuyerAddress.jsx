import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AddBuyerAddress = () => {
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Add address</h6>
                <p className="sideDrawer-subheader">Enter and save your address below</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col lg={6}>
                            <label>First name</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="eg Oluwaseun" />
                            </div>
                        </Col>

                        <Col lg={6}>
                            <label>Last name (optional)</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="eg. Msilanga" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Phone number (in case of delivery questions)</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="+234 000 000 0000" />
                            </div>
                        </Col>
                    </Row>
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

                    <Row className="mt-24">
                        <div className="general-button full-width">
                            Save Address
                        </div>
                    </Row>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default AddBuyerAddress
