import React from 'react'
import { Col, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col lg={6}>
                        <label>Business name</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Name" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <label>Category</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Choose</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Business description</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Type brief info about your business" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Country where your business is located</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Choose</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col lg={6}>
                        <label>Support email</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter email address" />
                        </div>
                        
                    </Col>
                    <Col lg={6}>
                        <label>Phone number</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="000 000 0000" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">

                    <Col>
                        <h6 className="form-desc">
                             This should be an email address and phone number you have access to all the time as we’ll use it to contact you about new orders, delivery scheduling, and more.
                        </h6>
                    </Col>
                </Row>

                <div className=" general-button ml-70">
                    Save Information
                </div>
                
            </form>
        </div>
    )
}

export default About
