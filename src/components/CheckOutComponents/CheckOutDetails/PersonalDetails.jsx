import React from 'react';
import CheckOutDelivery from './CheckOutDelivery/CheckOutDelivery'
import CheckOutInfo from './CheckOutInfo/CheckOutInfo'
import CheckOutMethod from './CheckOutMethod/CheckOutMethod'

const PersonalDetails = () => {
    return (
        <>
            <CheckOutInfo />

            <CheckOutMethod />

            <CheckOutDelivery /> 

            <div className="text-end mt-24">
                <div className="general-button">
                    Continue to shipping method
                </div>
            </div>
        </>
    )
}

export default PersonalDetails
