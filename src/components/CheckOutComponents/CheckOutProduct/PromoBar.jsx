import React from 'react';
import './Promo.scss';

const PromoBar = (props) => {
    return (
        <div className="promo-wrapper">
            <div className="promo">
                <input type="text" className="promo-input" placeholder="Enter discount code" name="discountCode" onChange={props.onChange} value={props.discountCode}/>
                {
                    props.discount ?
                    <p className="inline-input inline-input-promo" onClick = {props.removeDisount}><u>Remove</u></p>
                    :
                    null
                }
                <button className="promo-button" onClick = {props.onApplyCode} disabled={props.discountButton}>
                    {
                        props.discount ?
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
