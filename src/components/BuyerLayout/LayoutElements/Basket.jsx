import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Empty} from '../../../assets/icons/emptystate.svg';
import Divider from '../../UI/Divider/Divider';
import { BuyerLayoutContext } from '../BuyerLayout';
import {ReactComponent as Watch} from '../../../assets/icons/watch.svg';
import {ReactComponent as Trash} from '../../../assets/icons/bin.svg';
import {ReactComponent as Minus} from '../../../assets/icons/minus.svg';
import {ReactComponent as Plus} from '../../../assets/icons/plus.svg';



const Basket = () => {
    const {state:{basketList}}= useContext(BuyerLayoutContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">
                    Your basket (
                        {
                            basketList ?
                            basketList.length ?
                            basketList.length
                            :
                            '0'
                            :
                            '0'
                        }
                        )
                </h6>
            </div>
            {
               basketList ?
               basketList.length === 0 ?
               <>
                <div className="text-center mt-100">
                    <Empty />
                </div>
                <div className="text-center mt-10">
                    <p className="basket-empty-text">
                    You’ve not added any item yet.
                    </p>

                    <div className="general-button">
                    Let’s go shopping
                    </div>
                </div>
               </>
                :
                <>
                    <Row className="mt-30">
                        <Col lg={2}>
                            <Watch />

                            <div className="order-image-edit">
                                <Trash className="basket-icon" />
                            </div>
                        </Col>
                        <Col lg={5} className="mt-10 ml-25">
                            <p className="individual-text-summary mb-10">Here’s where the name of this product goes.</p>
                            <span className="basket-increase"> <span><Minus className="basket-icon-extra cursor-pointer" /></span> <span className="basket-order-value">2</span> <span><Plus className="basket-icon-extra cursor-pointer"/></span></span>
                        </Col>
                        <Col lg={4} className="mt-25 text-end">
                            <p className="individual-info">$24.99</p>
                        </Col>
                    </Row>

                    <Divider className="mt-24 mb-30" />

                    <Row className="mt-30">
                        <Col lg={2}>
                            <Watch />

                            <div className="order-image-edit">
                                <Trash className="basket-icon" />
                            </div>
                        </Col>
                        <Col lg={5} className="mt-10 ml-25">
                            <p className="individual-text-summary mb-10">Here’s where the name of this product goes.</p>
                            <span className="basket-increase cursor-pointer"> <span><Minus className="report-icon" /></span> <span className="basket-order-value">1</span> <span><Plus className="basket-icon-extra cursor-pointer"/></span></span>
                        </Col>
                        <Col lg={4} className="mt-25 text-end">
                            <p className="individual-info">$24.99</p>
                        </Col>
                    </Row>

                    <Divider className="mt-24 mb-30" />

                    <Row className="mb-20">
                            <Col lg={6}>
                                <h3 className="individual-summary">Subtotal</h3>
                            </Col>
                            <Col lg={6}>
                            <p className="individual-info">$163.32</p>
                            </Col>
                    </Row>

                    <div className="general-button full-width">
                        Checkout now
                    </div>

                    <div className="mt-10 text-center">
                        <p className="basket-empty-text">
                         Shipping fees and taxes will be calculated at checkout
                        </p>
                    </div>
                </>
                :
                <>
                <div className="text-center mt-100">
                    <Empty />
                </div>
                <div className="text-center mt-10">
                    <p className="basket-empty-text">
                    You’ve not added any item yet.
                    </p>

                    <div className="general-button">
                    Let’s go shopping
                    </div>
                </div>
               </>
            }
            
        </div>
    )
}

export default Basket
