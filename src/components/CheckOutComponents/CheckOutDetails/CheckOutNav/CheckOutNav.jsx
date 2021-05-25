import React, { useContext } from 'react';
import { DetailsCheckout } from '../CheckOutDetails';
import './CheckOutNav.scss'

const CheckOutNav = () => {
    const {state:{route}, shipping} = useContext(DetailsCheckout);
    return (
        <div className="check-nav">
            <ul className="check-nav-list">
                <li className={route === 'personal' ? 'check-nav-active' : 'check-nav-item'}>Personal details</li>
                {
                    shipping ?
                    <li className={route === 'ship' ? 'check-nav-active' : 'check-nav-item'}>Shipping method</li>
                    :
                    null
                }
                <li className={route === 'payment' ? 'check-nav-active' : 'check-nav-item'}>Make payment</li>
            </ul>
            
        </div>
    )
}

export default CheckOutNav
