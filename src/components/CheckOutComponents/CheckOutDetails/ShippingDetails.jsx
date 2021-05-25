import React, { useContext } from 'react';
import Divider from '../../UI/Divider/Divider';
import { Col, Row } from 'react-bootstrap';
import { DetailsCheckout } from './CheckOutDetails';

const ShippingDetails = () => {
    const {onClickPayment, onReturnPersonal, onShippingChange, shipType} = useContext(DetailsCheckout);
    const options = [
        { label: "Standard shipping", value: "Arrives in 4 - 5 days after order confirmation", price:"$24.99"},
        { label: "Express shipping", value: "Arrives the next day after order confirmation", price:"$54.99" }
      ];
    return (
        <div className="mt-40">
            <h6 className="checkout-title">Select a shipping method</h6>

            <div className="saved-address">
                {
                    options.map((option, i) =>{
                        return (
                            <>
                                <Row className="inner-saved-address">
                                    <Col lg={10}>
                                        <label className="container-round">
                                            <label className="FormCheck" >
                                                <h6 className="bold">{option.label}</h6>
                                                <p className="account-order-desc mb-0">{option.value}</p>
                                            </label>
                                            <input 
                                                type="checkbox" 
                                                onChange={() =>onShippingChange(option.label, option.price)}
                                                checked={shipType === option.label}
                                            />
                                            <span className="checkmark"></span>
                                        </label>
                                    </Col>
                                    
                                    <Col lg={2} className="text-end">
                                        <p className="individual-info">{option.price}</p>
                                    </Col>                   
                                </Row>
                                <Divider className="mb-0 mt-0" />
                                </>
                        )
                    })
                }
                


                {/* <Row className="inner-saved-address">
                    <Col lg={10}>
                        <label className="container-round">
                            <label className="FormCheck" >
                                <h6 className="bold">Express shipping</h6>
                                <p className="account-order-desc mb-0">Arrives the next day after order confirmation</p>
                            </label>
                            <input type="checkbox" onChange ={()=>calculateShipping('$50.32')}/>
                            <span className="checkmark"></span>
                        </label>
                    </Col>

                    <Col lg={2} className="text-end">
                        <p className="individual-info">$50.32</p>
                    </Col>  
                </Row> */}
            </div>
        
            <div className="text-end mt-24">
                <div className="prev-button mr-16" onClick={onReturnPersonal}>
                   Previous step
                </div>
                <div className="general-button" onClick={onClickPayment}>
                    Continue to payment
                </div>
            </div>
        </div>
    )
}

export default ShippingDetails
