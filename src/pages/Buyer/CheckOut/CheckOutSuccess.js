import React from 'react';
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout';
import {ReactComponent as Success} from '../../../assets/icons/done.svg';

const CheckOutSuccess = () => {
    return (
        <BuyerLayout>
            <div className="checkout-success">
                <div className="text-center">
                    <Success />
                </div>

                <div className="text-center">
                    <h6 className="empty-header">
                    Your order has been placed!   
                    </h6>
                </div>
                
                <div className="text-center">
                    <p className="empty-text">
                    You’ve successfully completed your order. We’ll proceed to get it ready for you and you can keep track.
                    </p>
                </div>

                <div className=" text-center mt-24">
                    <div className="prev-button mr-16">
                    Shop again
                    </div>
                    <div className="general-button">
                    Track order
                </div>
            </div>
            </div>
        </BuyerLayout>
    )
}

export default CheckOutSuccess
