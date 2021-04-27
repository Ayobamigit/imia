import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Promotion} from '../../assets/icons/promotion.svg';
import {ReactComponent as Percent} from '../../assets/icons/percentage.svg';
import {ReactComponent as Product} from '../../assets/icons/product.svg';

const CreatePromotion = (props) => {
    return (
        <div className="create-promotion">
            <Row>
                <Col lg={4}>
                    <div className="create-promotion-option" onClick={()=>props.onClickOption('advertisement')}>
                        <Promotion className="promotionIcons" /> 
                        <h6 className="promotion-option-title">Advertisement</h6>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="create-promotion-option" onClick={()=>props.onClickOption('discount')}>
                        <Percent className="promotionIcons" /> 
                        <h6 className="promotion-option-title">Discount</h6>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="create-promotion-option" onClick={()=>props.onClickOption('coupon')}>
                        <Product className="promotionIcons" /> 
                        <h6 className="promotion-option-title">Coupon code</h6>
                    </div>
                </Col>
            </Row>
            <div className="create-promotion-desc">
                <p>
                    This is dummy copy, it is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text
                </p>
            </div>

            <div className="text-right">
                <div className="general-button">
                    Create
                </div>
            </div>
            
        </div>
    )
}

export default CreatePromotion
