import React from 'react';
import { Col, Row } from 'react-bootstrap'


const PayoutBank = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Select your bank</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Choose</option>
                                <option>First Bank</option>
                                <option>Access Bank</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col lg={6}>
                        <label>Account number</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter account number" />
                        </div>
                        
                    </Col>
                    <Col lg={6}>
                        <label>Account name</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Account name goes here" disabled />
                        </div>
                    </Col>
                </Row>

                <div className=" general-button ml-70">
                    Save Details
                </div>
                
            </form>
        </div>
    )
}

export default PayoutBank
