import React, { useContext } from 'react';
import CheckOutDelivery from './CheckOutDelivery/CheckOutDelivery'
import { DetailsCheckout } from './CheckOutDetails';
import CheckOutInfo from './CheckOutInfo/CheckOutInfo'
import CheckOutMethod from './CheckOutMethod/CheckOutMethod'

const PersonalDetails = () => {
    const {onClickShipping, shipping, onClickPayment} = useContext(DetailsCheckout)
    return (
        <>
            <CheckOutInfo />

            <CheckOutMethod />

            <CheckOutDelivery /> 

            <div className="text-end mt-24">
                {
                    shipping ?
                        <div className="general-button" onClick={onClickShipping}>
                            Continue to shipping method
                        </div>
                    :
                        <div className="general-button" onClick={onClickPayment}>
                            Continue to payment
                        </div>
                }
            </div>
        </>
    )
}

export default PersonalDetails
