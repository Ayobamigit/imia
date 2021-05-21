import React, {useContext} from 'react';
import {ReactComponent as Store} from '../../../../assets/icons/store.svg';
import {ReactComponent as Truck} from '../../../../assets/icons/truck.svg';
import { CheckoutContext } from '../../../../pages/Buyer/CheckOut/CheckOut';

const CheckOutMethod = () => {
    const { state:{isPickupAvailable, shipping}, onClickDelivery } = useContext(CheckoutContext)
    return (
        <div className="mt-40">
            <h6 className="checkout-title">Select delivery method</h6>
            <div>
                <button className={` mr-14 ${shipping ? 'ship-button' : 'store-button'}`} onClick={onClickDelivery} >
                    <Truck className={`mr-05 ${shipping? 'basket-icon' : 'report-icon' }`} /> <span>Shipping</span>
                </button>
                <button className={` mr-14 ${!shipping ? 'ship-button' : 'store-button'}`} disabled={!isPickupAvailable} onClick={onClickDelivery}>
                    <Store className={`mr-05 ${!shipping? 'basket-icon' : 'report-icon' }`} /> Store pickup { !isPickupAvailable ? '(not available)' : null}
                </button>
            </div>
        </div>
    )
}

export default CheckOutMethod
