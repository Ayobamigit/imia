import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as Shoe} from '../../../assets/icons/shoe.svg';
import {ReactComponent as Help} from '../../../assets/icons/help-sm.svg';
import PromoBar from './PromoBar';
import { CheckoutContext } from '../../../pages/Buyer/CheckOut/CheckOut';


const CheckOutProduct = () => {
    const {onApplyCode, onChange, removeDisount, state:{discount, discountButton, discountCode, deliveryMethod, shippingCost, taxValue}} = useContext(CheckoutContext)
    return (
        <div className="checkout-product-div">
            <Row>
                <Col lg={2}>
                    <Shoe />

                    <div className="order-image-edit">
                        2
                    </div>
                </Col>

                <Col lg={5} className="mt-15 ml-25">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                </Col>
                <Col lg={4} className="mt-25 text-end">
                    <p className="individual-info">$24.99</p>
                </Col>

            </Row>

            <Divider className="mt-16 mb-24" /> 
            <Row>
                <Col lg={2}>
                    <Shoe />

                    <div className="order-image-edit">
                        2
                    </div>
                </Col>

                <Col lg={5} className="mt-15 ml-25">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                </Col>
                <Col lg={4} className="mt-25 text-end">
                    <p className="individual-info">$24.99</p>
                </Col>

            </Row>

            <Divider className="mt-16 mb-24" /> 
            <Row>
                <Col lg={2}>
                    <Shoe />

                    <div className="order-image-edit">
                        2
                    </div>
                </Col>

                <Col lg={5} className="mt-15 ml-25">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                </Col>
                <Col lg={4} className="mt-25 text-end">
                    <p className="individual-info">$24.99</p>
                </Col>

            </Row>

            <Divider className="mt-16 mb-24" /> 

            <PromoBar 
                onChange={onChange}
                onApplyCode={onApplyCode} 
                discountButton={discountButton}
                discount = {discount}
                removeDisount={removeDisount}
                discountCode={discountCode}
            />

            <Divider className="mt-24" />

            <Row className="mt-14">
                <Col lg={6}>
                    <h3 className="individual-summary">Subtotal</h3>
                </Col>
                <Col lg={6}>
                <p className="individual-info">$163.32</p>
                </Col>
            </Row>

            <Row className="mt-14">
                <Col lg={6}>
                    {
                        deliveryMethod.toLowerCase() === 'shipping' ?
                        <h3 className="individual-summary">Shipping</h3>
                        :
                        <h3 className="individual-summary">Pickup</h3>
                    }
                </Col>
                <Col lg={6}>
                    <h3 className="individual-info">
                        {
                           deliveryMethod.toLowerCase() === 'shipping' ?
                            shippingCost ? 
                              '$10.86'
                            :
                          <p className="individual-info-info">Calculated at next step</p>
                           :
                            'Free'
                        }
                    </h3>

                    {
                        

                    }
                </Col>
            </Row>

            <Row className="mt-14">
                <Col lg={6}>
                    <h3 className="individual-summary">Taxes & fees<Help className="ml-10" /></h3>
                </Col>
                <Col lg={6}>
                    {
                        taxValue ?
                        <p className="individual-info">$5.99</p>
                        :
                        <p className="individual-info-info">Calculated at next step</p>
                    }
                </Col>
            </Row>
            <Divider className="mt-25 mb-26" />
            {
                discount ?
                <>
                    <Row className="mt-14">
                        <Col lg={6}>
                            <h3 className="individual-summary">Discount code (10% off)</h3>
                        </Col>
                        <Col lg={6}>
                        <p className="individual-info">- $3.00</p>
                        {/* <p className="individual-info-info">Calculated at next step</p> */}
                        </Col>
                    </Row>
                    <Divider className="mt-25 mb-26" />
                </>
                :
                null
            }
            
            <Row className="mt-14 inmb-10">
                <Col lg={6}>
                    <h3 className="individual-summary">Total</h3>
                </Col>
                <Col lg={6}>
                <p className="individual-info bold" style={{fontSize: '20px'}}>$163.32</p>
                </Col>
            </Row>

        </div>
    )
}

export default CheckOutProduct
