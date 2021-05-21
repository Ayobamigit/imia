import React from 'react';
import CheckOutNav from './CheckOutNav/CheckOutNav';
import PersonalDetails from './PersonalDetails';

const CheckOutDetails = () => {
    return (
        <div className="checkout-details-div">
            <h1 className="secondary-header-title cursor-pointer">
                IMIA
            </h1>
            <CheckOutNav />

            <PersonalDetails />
           
        </div>
    )
}

export default CheckOutDetails
