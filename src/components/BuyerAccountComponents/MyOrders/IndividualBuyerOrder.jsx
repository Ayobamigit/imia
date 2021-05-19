import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import { BuyerOrdersContext } from './MyOrders';
import {ReactComponent as Watch} from '../../../assets/icons/watch.svg';
import {ReactComponent as Check} from '../../../assets/icons/check.svg';


const IndividualBuyerOrder = () => {
    const {state:{orderId, oldRoute, orderStatus}, onRouteChange, onClickAction} = useContext(BuyerOrdersContext);

    return (
        <div className="buyer-individual-order">
            <p className="buyer-individual-text">
                <span onClick={()=>{onRouteChange(oldRoute)}} className="cursor-pointer">My orders</span> / <span className="bold text-dark">{orderId}</span>
            </p>

            <Row>
                <Col lg={6}>
                    <h1 className="buyer-manage-profile">Order details</h1>
                </Col>
                {
                    orderStatus.toLowerCase() === 'confirmed' ?
                    <Col lg={6} className="text-end">
                        <div className="transparent-button" onClick={()=>onClickAction('cancel')}>Cancel order</div>
                    </Col>
                    : 
                    orderStatus.toLowerCase() === 'delivered' ?
                    <Col lg={6} className="text-end">
                        <p> <span className="edit-remove" onClick={()=>onClickAction('report')}><u>Report Issue</u></span> <span className="transparent-button ml-16" onClick={()=>onClickAction('review')}> Leave review</span></p>
                    </Col>
                    :
                    null
                }
                
            </Row>

            <div className="individual-order-div mt-40">
                <Row>
                    <Col>
                        <h3 className="individual-heading">SUMMARY</h3>
                        <Row className="inmb-10">
                            <Col lg={6}>
                                <h3 className="individual-summary">Order status</h3>
                            </Col>
                            <Col lg={6} className="text-end">
                                {
                                    orderStatus.toLowerCase() === 'delivered' ?
                                    <div className="table-paid">
                                        Delivered
                                    </div>
                                    :
                                    orderStatus.toLowerCase() === 'confirmed' ?
                                    <div className="table-grey">
                                        Confirmed
                                    </div>
                                    :
                                    <div className="table-cancel">
                                        Cancelled
                                    </div>
                                }
                                
                            </Col>
                        </Row>
                        <Divider />

                        <Row className="inmb-10 inmt-15">
                            <Col lg={6}>
                                <h3 className="individual-summary">Delivery method</h3>
                            </Col>
                            <Col lg={6} className="text-end">
                             <p className="individual-info">Shipping (standard)</p>
                            </Col>
                        </Row>
                        <Divider />

                        <Row className="inmb-10 inmt-15">
                            <Col lg={4}>
                                <h3 className="individual-summary">Shipping address</h3>
                            </Col>
                            <Col lg={8} className="text-end">
                                <p className="individual-info mb-02">Anwuli Mariam +234 814 927 4820 </p>
                                <p className="individual-info-info">15a Idejo Street, Victoria Island, LA 100001, Nigeria. </p>
                            </Col>
                        </Row>
                        <Divider />

                        <Row className="inmb-10 inmt-15">
                            <Col lg={4}>
                                <h3 className="individual-summary">Payment method</h3>
                            </Col>
                            <Col lg={8} className="text-end">
                                <p className="individual-info">Pay with Flutterwave </p>
                            </Col>
                        </Row>
                        <Divider />

                        <Row className="inmt-15">
                            <Col>
                                <h3 className="individual-summary">Payment summary</h3>
                            </Col>
                        </Row>

                        <Row className="mt-14">
                            <Col lg={6}>
                                <h3 className="individual-summary">All items</h3>
                            </Col>
                            <Col lg={6}>
                            <p className="individual-info-info">$153.99</p>
                            </Col>
                        </Row>

                        <Row className="mt-14">
                            <Col lg={6}>
                                <h3 className="individual-summary">Shipping</h3>
                            </Col>
                            <Col lg={6}>
                            <p className="individual-info-info">$0.89</p>
                            </Col>
                        </Row>

                        <Row className="mt-14">
                            <Col lg={6}>
                                <h3 className="individual-summary">Taxes & fees</h3>
                            </Col>
                            <Col lg={6}>
                            <p className="individual-info-info">$153.99</p>
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
                    
                    
                    <Col style={{paddingLeft:'45px'}}>
                        <h3 className="individual-heading">ITEMS (3)</h3>
                        <Row className="inmb-10">
                            <Col lg={2}>
                                { 
                                    orderStatus.toLowerCase() === 'delivered' ?
                                        <>
                                            <div className="image-container">

                                                <Watch />  
                                                <div className="overlay">
                                                    <div className="order-delivered">
                                                        <Check />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-image-edit">
                                            2
                                            </div>
                                        </>
                                    :   
                                    <>
                                        <Watch />

                                        <div className="order-image-edit">
                                            2
                                        </div>
                                    </>
                                }
                                
                                  
                                
                                
                            </Col>
                            <Col lg={5} className="mt-10 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                <p className="edit-remove" onClick={()=>onClickAction('track')}><u>Track item</u></p> 
                            </Col>
                            <Col lg={4} className="mt-25 text-end">
                                <p className="individual-info">$24.99</p>
                            </Col>
                        </Row>

                        <Divider /> {/* Pass a className down as a prop setting the margin top and bottom for the divider to overide what is in the divider.scss */}

                        <Row className="inmt-15 inmb-10">
                            <Col lg={2}>
                                { 
                                    orderStatus.toLowerCase() === 'delivered' ?
                                        <>
                                            <div className="image-container">

                                                <Watch />  
                                                <div className="overlay">
                                                    <div className="order-delivered">
                                                        <Check />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-image-edit">
                                             1
                                            </div>
                                        </>
                                    :   
                                    <>
                                        <Watch />

                                        <div className="order-image-edit">
                                            1
                                        </div>
                                    </>
                                }
                            </Col>
                            <Col lg={5} className="mt-10 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                <p className="edit-remove"  onClick={()=>onClickAction('track')}><u>Track item</u></p> 
                            </Col>
                            <Col lg={4} className="mt-25 text-end">
                                <p className="individual-info">$17.42</p>
                            </Col>
                        </Row>

                        <Divider />

                        <Row className="inmt-15 inmb-10">
                            <Col lg={2}>
                                { 
                                    orderStatus.toLowerCase() === 'delivered' ?
                                        <>
                                            <div className="image-container">

                                                <Watch />  
                                                <div className="overlay">
                                                    <div className="order-delivered">
                                                        <Check />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-image-edit">
                                            1
                                            </div>
                                        </>
                                    :   
                                    <>
                                        <Watch />

                                        <div className="order-image-edit">
                                            1
                                        </div>
                                    </>
                                }
                            </Col>
                            <Col lg={5} className="mt-10 ml-25">
                                <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                <p className="edit-remove"  onClick={()=>onClickAction('track')}><u>Track item</u></p> 
                            </Col>
                            <Col lg={4} className="mt-25 text-end">
                                <p className="individual-info">$120.91</p>
                            </Col>
                        </Row>

                        <Divider />

                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default IndividualBuyerOrder
