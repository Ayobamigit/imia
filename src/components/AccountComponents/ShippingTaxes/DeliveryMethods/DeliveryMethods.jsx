import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Divider from '../../../UI/Divider/Divider'

const DeliveryMethods = (props) => {
    return (
        <>
            <div className="info-div">
                <Row style={{marginBottom: '-20px'}}>
                    <Col lg={10}>
                        <h6 className="title-heading-height">Shipping</h6>
                        <p className="title-body">Buyers can have their orders shipped to them</p>
                    </Col>
                    <Col lg={2} className="mt-18">
                        <div className="switch">
                            <span>
                                <input type="checkbox" checked />
                                <span className={`slider round`}></span>
                                {/* <span className={`slider round ${disableSwitchButton ? 'disabled' : ''}`}></span> */}
                            </span>
                        </div>
                    </Col>
                </Row>

                <Divider />

                <Row style={{marginTop: '-10px'}}>
                    <Col lg={10}>
                        <h6 className="title-heading-height">Pickup</h6>
                        <p className="title-body">Buyers can pickup their orders from any of your locations</p>
                    </Col>
                    <Col lg={2} className="mt-18">
                        <div className="switch">
                            <span onClick = {props.onClickAdd}>
                                <input type="checkbox" disabled readOnly />
                                <span className={`slider round disabled `}></span>
                                {/* <span className={`slider roucnd ${disableSwitchButton ? 'disabled' : ''}`}></span> */}

                            </span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="info-footer">
                <p className="title-desc">We partner with third-party logistics companies to get your orders to buyers. <u>Learn more.</u></p>
            </div>
        </>
    )
}

export default DeliveryMethods
