import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PayoutInfo from '../AccountComponents/Payouts/PayoutInfo';
import Divider from '../UI/Divider/Divider';
import {ReactComponent as Shoe} from '../../assets/icons/shoe.svg';
import {ReactComponent as Watch} from '../../assets/icons/watch.svg';
import {ReactComponent as Top} from '../../assets/icons/top.svg';



const IndividualOrder = () => {
    return (
        <div className="individual-order">
            <Row>
                <Col lg={6} style={{paddingRight:'45px'}}>
                    <h1 className="individual-heading">ITEMS (3)</h1>
                    <PayoutInfo 
                        text="Mark items to confirm order"
                    />
                    <div className="order-image">
                        <Row className="inmb-10">
                            <Col lg={2}>
                                <Top />

                                <div className="order-image-edit">
                                    2
                                </div>
                            </Col>
                            <Col lg={6} className="mt-25 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                            </Col>
                            <Col lg={2} className="mt-25 ml-40">
                                 <label className="checkbox checkbox-lg checkbox-primary">
                                    <input type="checkbox" checked/>
                                    <span></span>  
                                </label>
                            </Col>
                        </Row>

                        <Divider /> {/* Pass a className down as a prop setting the margin top and bottom for the divider to overide what is in the divider.scss */}

                        <Row className="inmt-15 inmb-10">
                            <Col lg={2}>
                                <Shoe />

                                <div className="order-image-edit">
                                    1
                                </div>
                            </Col>
                            <Col lg={6} className="mt-25 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                            </Col>
                            <Col lg={2} className="mt-25 ml-40">
                                 <label className="checkbox checkbox-lg checkbox-primary">
                                    <input type="checkbox"/>
                                    <span></span>  
                                </label>
                            </Col>
                        </Row>

                        <Divider />

                        <Row className="inmt-15 inmb-10">
                            <Col lg={2}>
                                <Watch />

                                <div className="order-image-edit">
                                    1
                                </div>
                            </Col>
                            <Col lg={6} className="mt-25 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                            </Col>
                            <Col lg={2} className="mt-25 ml-40">
                                 <label className="checkbox checkbox-lg checkbox-primary">
                                    <input type="checkbox"/>
                                    <span></span>  
                                </label>
                            </Col>
                        </Row>
                    </div>
                    
                </Col>
                <Col lg={6}>
                    <h1 className="individual-heading">SUMMARY</h1>

                    <Row className="inmb-10">
                        <Col lg={6}>
                            <h3 className="individual-summary">Order status</h3>
                        </Col>
                        <Col lg={6} style={{textAlign: 'right'}}>
                          <span className="table-grey">Waiting confirmation</span>
                        </Col>
                    </Row>

                    <Divider />

                    <Row className="inmt-15 inmb-10">
                        <Col lg={6}>
                            <h3 className="individual-summary">Customer</h3>
                        </Col>
                        <Col lg={6}>
                          <p className="individual-info">anwuli.mariam@gmail.com</p>
                        </Col>
                    </Row>

                    <Divider /> 

                    <Row className="inmt-15 inmb-10">
                        <Col lg={6}>
                            <h3 className="individual-summary">Delivery method</h3>
                        </Col>
                        <Col lg={6}>
                          <p className="individual-info">Shipping (standard)</p>
                        </Col>
                    </Row>

                    <Divider /> 

                    <Row className="inmt-15 inmb-10">
                        <Col lg={4}>
                            <h3 className="individual-summary">Shipping address</h3>
                        </Col>
                        <Col lg={8}>
                          <p className="individual-info mb-02">Anwuli Mariam +234 814 927 4820 </p>
                          <p className="individual-info-info">15a Idejo Street, Victoria Island, LA 100001, Nigeria. </p>
                        </Col>
                    </Row>

                    <Divider /> 

                    <Row className="inmt-15 inmb-10">
                        <Col lg={6}>
                            <h3 className="individual-summary">Payment method</h3>
                        </Col>
                        <Col lg={6}>
                          <p className="individual-info">Pay with Flutterwave</p>
                        </Col>
                    </Row>

                    <Divider /> 

                    <Row className="inmt-15">
                        <Col>
                            <h3 className="individual-summary">Payment summary</h3>
                        </Col>
                    </Row>

                    <Row className="mt-14 inmb-10">
                        <Col lg={6}>
                            <h3 className="individual-summary">Total</h3>
                        </Col>
                        <Col lg={6}>
                          <p className="individual-info">$163.32</p>
                        </Col>
                    </Row>

                    <Divider /> 
                </Col>
            </Row>
        </div>
    )
}

export default IndividualOrder
