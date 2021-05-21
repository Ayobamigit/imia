import React, {useContext} from 'react';
import { CheckoutContext } from '../../../../pages/Buyer/CheckOut/CheckOut';
import AddCheckoutAddress from './AddCheckoutAddress';
import PickupAddress from './PickupAddress';
import SavedAddress from './SavedAddress';

const CheckOutDelivery = () => {
    const { state:{shipping, address}, authToken } = useContext(CheckoutContext)
    return (
        <div className="mt-40">
            <h6 className="checkout-title">
                {
                    shipping ?
                        'Shipping address'
                        :
                        'Pickup location'
                }
            </h6>

            {
                shipping ?
                    authToken && address ?
                        <SavedAddress />
                    :
                        <AddCheckoutAddress />
                :
                <PickupAddress />  
            }
            
        </div>
    )
}

export default CheckOutDelivery
