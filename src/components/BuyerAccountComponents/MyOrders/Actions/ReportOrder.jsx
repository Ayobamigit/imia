import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Divider from '../../../UI/Divider/Divider';
import { BuyerOrdersContext } from '../MyOrders';
import {ReactComponent as Top} from '../../../../assets/icons/top.svg';
import {ReactComponent as Trash} from '../../../../assets/icons/bin.svg';


const ReportOrder = () => {
    const {onSubmitReport} = useContext(BuyerOrdersContext);
    return (
        <div className="address-div">
        <div>
            <h6 className="sideDrawer-header">Report issue</h6>
            <p className="sideDrawer-subheader">Have any issue with your order? We can help.</p>
        </div>
        <div>
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>What’s the issue?</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Select reason</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Select the affected items<span className="forgot-password" style={{marginLeft:'90px'}}><u>Select entire order</u></span></label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Select</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Divider className="mt-24 mb-30" />

                <Row>
                    <Col lg={3}>
                        <Top/>
                        <div className="order-image-edit">
                            1
                        </div>
                    </Col>
                    <Col lg={9}>
                        <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                        <Row className="mb-10">
                            <Col lg={7} className="pr-0">
                                <div className="input-group">
                                    <select className="formcontrol">
                                        <option>Select problem</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={5} className="pl-8 pr-0 display-flex">
                                <div className="input-group pr-10">
                                    <select className="formcontrol">
                                        <option>1 item</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>

                                <Trash className="mt-10 report-icon cursor-pointer visibility-hidden" />

                            </Col>

                        </Row>
                        <p className="edit-remove"><u>Add another problem</u></p>

                    </Col>
                </Row>

                <Divider className="mt-10 mb-24"  />

                <Row>
                    <Col lg={3}>
                        <Top/>
                        <div className="order-image-edit">
                            1
                        </div>
                    </Col>
                    <Col lg={9}>
                        <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                        <Row className="mb-10">
                            <Col lg={7} className="pr-0">
                                <div className="input-group">
                                    <select className="formcontrol">
                                        <option>Select problem</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={5} className="pl-8 pr-0 display-flex">
                                <div className="input-group pr-10">
                                    <select className="formcontrol">
                                        <option>1 item</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>

                                <Trash className="mt-10 report-icon cursor-pointer visibility-hidden" />

                            </Col>

                        </Row>
                        <Row className="mb-10">
                            <Col lg={7} className="pr-0">
                                <div className="input-group">
                                    <select className="formcontrol">
                                        <option>Select problem</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={5} className="pl-8 pr-0 display-flex">
                                <div className="input-group pr-10">
                                    <select className="formcontrol">
                                        <option>1 item</option>
                                        <option>Nigeria</option>
                                        <option>Canada</option>
                                    </select>
                                </div>

                                <Trash className="report-icon mt-10 cursor-pointer" />

                            </Col>

                            {/* <Col lg={1} className="mt-05">
                            </Col> */}

                        </Row>
                        <p className="edit-remove"><u>Add another problem</u></p>

                    </Col>
                </Row>

                <Divider className="mt-10 mb-24"  />

                <Row>
                    <div className="general-button full-width" onClick={onSubmitReport}>
                    Report issue
                    </div>
                </Row>
                
            </form>
        </div>
    </div>
    )
}

export default ReportOrder
