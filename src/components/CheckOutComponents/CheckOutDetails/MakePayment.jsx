import React, {useContext} from 'react';
import Divider from '../../UI/Divider/Divider';
import { DetailsCheckout } from './CheckOutDetails';

const MakePayment = () => {
    const {onReturnShipping, onReturnPersonal, shipping, onCheckOut} = useContext(DetailsCheckout);
    return (
        <div className="mt-40">
            <h6 className="checkout-title">Select a payment method</h6>

            <div className="saved-address">
                <div className="inner-saved-address">
                    <label className="container-round">
                        <label className="FormCheck" >
                            <h6 className="bold">Pay securely with Flutterwave</h6>
                            <p className="account-order-desc mb-0">All major credit/ATM cards accepted i.e. Visa, Mastercard etc.</p>
                        </label>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                                        
                </div>

                <Divider className="mb-0 mt-0" />

                <div className="inner-saved-address">
                    <label className="container-round">
                        <label className="FormCheck" >
                            <h6 className="bold">Paypal</h6>
                            <p className="account-order-desc mb-0">You can pay quickly using your Paypal account</p>
                        </label>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>

                <Divider className="mb-0 mt-0" />

                <div className="inner-saved-address">
                    <label className="container-round">
                        <label className="FormCheck" >
                            <h6 className="bold">Cryptocurrency</h6>
                            <p className="account-order-desc mb-0">Pay using digital currencies like Bitcoin, Ethereum etc.</p>
                        </label>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className="mt-40">
                <h6 className="checkout-title">Billing address</h6>
            </div>
            <div className="mt-21">
                <label className="container">
                    <label className="FormCheck" >Same as shipping address</label>
                    <input type="checkbox" checked/>
                    <span className="checkmark"></span>
                </label>
            </div>
        
            <div className="text-end mt-24">
                <div className="prev-button mr-16" onClick={shipping ? onReturnShipping : onReturnPersonal}>
                   Previous step
                </div>
                <div className="general-button" onClick={onCheckOut}>
                Pay and complete order
                </div>
            </div>
        </div>
    )
}

export default MakePayment
