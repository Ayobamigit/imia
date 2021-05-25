import React, { createContext, useContext, useState } from 'react';
import { CheckoutContext } from '../../../pages/Buyer/CheckOut/CheckOut';
import CheckOutNav from './CheckOutNav/CheckOutNav';
import MakePayment from './MakePayment';
import PersonalDetails from './PersonalDetails';
import ShippingDetails from './ShippingDetails';

export const DetailsCheckout = createContext();

const CheckOutDetails = () => {
    const {state:{shipping, shipType}, onCheckOut, onShippingChange} = useContext(CheckoutContext);

    const [state, setState] = useState({
        route: 'personal'
    })

    const {route} = state;

   const onClickShipping = () =>{
        setState(state=>({
            ...state,
            route:'ship'
        }))
    }

    const onClickPayment = () =>{
        setState(state=>({
            ...state,
            route:'payment'
        }))
    }

    const onReturnPersonal = () =>{
        setState(state=>({
            ...state,
            route:'personal'
        }))
    }

    const onReturnShipping = () =>{
        setState(state=>({
            ...state,
            route:'ship'
        }))
    }

    const renderPages = () =>{
        switch(route) {
            case 'personal':
                return <PersonalDetails/>;
            case 'ship':
                return <ShippingDetails />;
            case 'payment':
                return <MakePayment />;
            default:
                return <PersonalDetails />
          }
    }
    return (
        <DetailsCheckout.Provider value={{
            state,
            shipping,
            shipType,
            onClickShipping,
            onClickPayment,
            onReturnPersonal,
            onReturnShipping,
            onShippingChange,
            onCheckOut
        }}>
            <div className="checkout-details-div">
                <h1 className="secondary-header-title cursor-pointer">
                    IMIA
                </h1>
                <CheckOutNav />

                {renderPages()}
           
            </div>
        </DetailsCheckout.Provider>
        
    )
}

export default CheckOutDetails
