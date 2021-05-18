import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../../UI/Divider/Divider';
import {ReactComponent as Watch} from '../../../../assets/icons/watch.svg';
import { BuyerOrdersContext } from '../MyOrders';

const TrackItem = () => {
    const {state:{deliveryMethod}} = useContext(BuyerOrdersContext);

    return (
        <div className="address-div">
            <Row>
                <Col>
                    <h6 className="sideDrawer-header">Track item</h6>
                </Col>

                <Col className="text-end">
                    <h6 className="individual-summary">Tracking code: <br/> <span className="bold" style={{letterSpacing:'0.5px'}}><u>XGSHR9937899</u></span> </h6>
                </Col>
            </Row>

            <Row className="mt-30">
                <Col lg={2}>
                    <Watch />

                    <div className="order-image-edit">
                        2
                    </div>
                </Col>
                <Col lg={5} className="mt-10 ml-25">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                </Col>
                <Col lg={4} className="mt-25 text-end">
                    <p className="individual-info">$24.99</p>
                </Col>
            </Row>

            <Divider />

            <div className="track-div">
                <div className="display-flex">
                    <label className="checkbox checkbox-lg checkbox-primary">
                        <input type="checkbox" checked/>
                        <span></span>  
                    </label>

                    <div className="ml-15">
                        <h3 className="individual-info bold text-left" style={{lineHeight:'20px'}}>Order placed</h3>
                        <p className="individual-summary">Thu, 01 Aug 2020</p>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="display-flex">
                    <label className="checkbox checkbox-lg checkbox-primary">
                        <input type="checkbox" checked/>
                        <span></span>  
                    </label>

                    <div className="ml-15">
                        <h3 className="individual-info bold text-left" style={{lineHeight:'20px'}}>Confirmed</h3>
                        <p className="individual-summary">Thu, 01 Aug 2020</p>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="display-flex">
                    <label className="checkbox checkbox-lg checkbox-primary">
                        <input type="checkbox"/>
                        <span></span>  
                    </label>

                    <div className="ml-15">
                        <h3 className="individual-info bold text-left text-muted" style={{lineHeight:'20px'}}>
                            {
                                deliveryMethod.toLowerCase() === 'shipping' ?
                                'Shipped'
                                :
                                'Ready for pickup'
                            }
                        </h3>
                        <p className="individual-summary info-text-muted">Mon, 05 Aug 2020 (estimated)</p>
                    </div>
                </div>
                <div className="vl"></div>
                <div className="display-flex">
                    <label className="checkbox checkbox-lg checkbox-primary">
                        <input type="checkbox"/>
                        <span></span>  
                    </label>

                    <div className="ml-15">
                        <h3 className="individual-info text-left bold text-muted" style={{lineHeight:'20px', color:'#737373'}}>
                            {
                                deliveryMethod.toLowerCase() === 'shipping' ?
                                'Delivered'
                                :
                                'Picked up'
                            }
                            
                        </h3>
                        <p className="individual-summary info-text-muted">
                            {
                                deliveryMethod.toLowerCase() === 'shipping' ?
                                'Tue, 06 Aug 2020 (estimated)'
                                :
                                'Once ready, you can pick this up.'
                            }
                            
                        </p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default TrackItem
