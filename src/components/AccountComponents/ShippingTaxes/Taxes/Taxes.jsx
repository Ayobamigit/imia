import React from 'react';
import { Col, Row } from 'react-bootstrap'


const Taxes = () => {
    return (
        <>
            <div className="info-div">
                <Row style={{marginBottom: '-20px'}}>
                    <Col lg={10}>
                        <h6 className="title-heading-height">All taxes are included in my prices</h6>
                        <p className="title-body">If you turn this on, an additional amount of tax won't be added to checkout</p>
                    </Col>
                    <Col lg={2} className="mt-18">
                        <div className="switch">
                            <span>
                                <input type="checkbox" checked/>
                                <span className={`slider round`}></span>
                                {/* <span className={`slider round ${disableSwitchButton ? 'disabled' : ''}`}></span> */}
                            </span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="info-footer">
                <p className="title-desc">We calculate the percentage of tax to charge at checkout based on official rates in the country where your business is located. <u>Learn more.</u></p>
            </div>
        </>
    )
}

export default Taxes
