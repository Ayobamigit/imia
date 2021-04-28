import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Setup.scss';

const Setup = () => {
    return (
        <div>
            <div className="setup inmt-10">
                <h1 className="setup-title">BEFORE YOU GO LIVE</h1>
                
                <Row className="mt-16">
                    <Col lg={4} className="display-flex">
                        <label className="checkbox checkbox-lg checkbox-primary">
                            <input type="checkbox" checked/>
                            <span></span>  
                        </label>
                        <div className="ml-14">
                            <h6 className="setup-title-title">Create your account</h6>
                            <p className="setup-title-desc">Sign up for an IMIA merchant account</p>
                        </div>
                    </Col>

                    <Col lg={4} className="display-flex">
                        <label className="checkbox checkbox-lg checkbox-primary">
                            <input type="checkbox"/>
                            <span></span>  
                        </label>
                        <div className="ml-14">
                            <h6 className="setup-title-title">Complete verification</h6>
                            <p className="setup-title-desc">Enter your details to verify your account</p>
                            <div className="transparent-button">
                                Start verification
                            </div>
                        </div>
                    </Col>

                    <Col lg={4} className="display-flex">
                        <label className="checkbox checkbox-lg checkbox-primary">
                            <input type="checkbox"/>
                            <span></span>  
                        </label>
                        <div className="ml-14">
                            <h6 className="setup-title-title">Setup shipping</h6>
                            <p className="setup-title-desc">Create delivery and pickup plan</p>
                            <div className="transparent-button">
                                Shipping settings
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row className="progressBar">
                <Col lg={4} className="create-progressBar-active"></Col>
                <Col lg={4}></Col>
                {/*This is the class for when the task has been completed <Col lg={4} className="progressBar-active"></Col> */}
                <Col lg={4}></Col>
                {/* This is the class for when the task has been completed <Col lg={4} className="setup-progressBar-active"></Col> */}
            </Row>
        </div>
    )
}

export default Setup
