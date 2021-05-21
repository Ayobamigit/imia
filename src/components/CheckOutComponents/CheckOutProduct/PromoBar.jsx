import React, {useContext} from 'react';
import './Promo.scss';
import { CheckoutContext } from '../../../pages/Buyer/CheckOut/CheckOut';

const PromoBar = () => {
    const {onApplyCode, onChange, removeDisount, state:{discount, discountButton, discountCode}} = useContext(CheckoutContext)
    return (
        <div className="promo-wrapper">
            <div className="promo">
                <input type="text" className="promo-input" placeholder="Enter discount code" name="discountCode" onChange={onChange} value={discountCode}/>
                {
                    discount ?
                    <p className="inline-input inline-input-promo" onClick = {removeDisount}><u>Remove</u></p>
                    :
                    null
                }
                <button className="promo-button" onClick = {onApplyCode} disabled={discountButton}>
                    {
                        discount ?
                        'Applied'
                        :
                        'Apply code'
                    }
                </button>
            </div>
            
        </div>
    )
}

export default PromoBar
