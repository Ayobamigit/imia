import React from 'react';
import './BuyerFooter.scss';
import Divider from '../../UI/Divider/Divider';
import Subscribe from '../../Subscribe/Subscribe';
import { Row, Col } from 'react-bootstrap';
import {ReactComponent as Facebook} from '../../../assets/icons/facebook.svg';
import {ReactComponent as Instagram} from '../../../assets/icons/instagram.svg';
import {ReactComponent as Twitter} from '../../../assets/icons/twitter.svg';
import {ReactComponent as Visa} from '../../../assets/icons/visa.svg';
import {ReactComponent as Dhl} from '../../../assets/icons/dhl.svg';
import {ReactComponent as Mastercard} from '../../../assets/icons/mastercard.svg';
import {ReactComponent as Paypal} from '../../../assets/icons/paypal.svg';
import { NavLink } from 'react-router-dom';

const BuyerFooter = () => {
    return (
        <div className="buyer-footer">
            <div>
                <h3 className="footer-logo">IMIA</h3>
            </div>
            <Row>
                <Col lg={6}>
                    <div className="footer-text-div">
                        <p className="footer-text">
                        This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Someday this space will be occupied by real copy that is meant to be read. 
                        </p>

                        <div className="footer-heading-div">
                            <h4 className="footer-heading-text">
                            Sign up for our newsletter and be the first to know about special deals, promos and more.
                            </h4>
                        </div>

                        <div className="mt-25">
                            <Subscribe 
                                placeholder = "Type your email address"
                            />
                        </div>
                    </div>
                   
                </Col>
                <Col lg={3}>
                    <h4 className="footer-heading">GET HELP</h4>
                    <ul className="footer-list">
                        <li>
                            <NavLink to="#">Contact us</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">FAQs</NavLink>
                        </li>
                    </ul>

                    <div>
                        <h4 className="footer-heading">
                        FOLLOW US
                        </h4>
                        <div>
                            <span><Facebook /></span><span className="ml-20"><Instagram /></span><span className="ml-20"><Twitter /></span>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <h4 className="footer-heading">ABOUT US</h4>
                    <ul className="footer-list">
                        <li>
                            <NavLink to="#">Careers</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">IMIA vendors portal</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Policies & terms</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Delivery & returns</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Payments</NavLink>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Divider />
            <Row  className="mt-79">
                <Col lg={6}>
                    <h4 className="footer-text">© 2021 It’s Made In Africa. All rights reserved.</h4>
                </Col>
                <Col lg={6} className="text-end">
                    <span><Visa /></span><span className="ml-30"><Mastercard /></span><span className="ml-30"><Paypal /></span><span className="ml-30"><Dhl /></span>
                </Col>
            </Row>
        </div>
    )
}

export default BuyerFooter
