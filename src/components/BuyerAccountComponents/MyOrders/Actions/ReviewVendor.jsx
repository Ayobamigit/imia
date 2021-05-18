import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Divider from '../../../UI/Divider/Divider';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';
import {ReactComponent as Vendor} from '../../../../assets/icons/yelp.svg';
import {ReactComponent as Top} from '../../../../assets/icons/top.svg';



const ReviewVendor = () => {
    return (
        <div>
            <div className="address-div">
                <div>
                    <h6 className="sideDrawer-header">Leave review</h6>
                    <p className="sideDrawer-subheader">Rate each seller in this order and their respective products below.</p>
                </div>

                <div className="mt-24">
                    <h6 className="sideDrawer-header" style={{fontSize:'18px'}}>Name of seller</h6>
                </div>

                <Row className="mb-30">
                    <Col lg={3}>
                        <div className="profile-img">
                            <Vendor className="mt-16" />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="mb-13">
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                        </div>
                        <div className="mb-10">
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="What do you think about this seller?" />
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-sm" placeholder="Give more details about your experience buying from this seller." />
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row className="mb-30">
                    <Col lg={3}>
                        <Top/>
                    </Col>
                    <Col lg={9}>
                        <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                        <div className="mb-13">
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                            <Star className="star" />
                        </div>
                        <div className="mb-10">
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="What do you think about this product?" />
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-sm" placeholder="Give more details" />
                            </div>
                        </div>

                    </Col>
                </Row>

                <Row className="mb-30">
                    <Col lg={3}>
                        <Top/>
                    </Col>
                    <Col lg={9}>
                        <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                        <div className="mb-13">
                            <Star className="star star-active" />
                            <Star className="star star-active" />
                            <Star className="star star-active" />
                            <Star className="star star-active" />
                            <Star className="star" />
                        </div>
                        <div className="mb-10">
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="What do you think about this product?" />
                            </div>
                        </div>

                        <div className="mb-10">
                            <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-sm" placeholder="Give more details" />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>

            <Divider />
            <Row>
                <div className="general-button full-width font">
                Save reviews
                </div>
            </Row>
        </div>
    )
}

export default ReviewVendor
