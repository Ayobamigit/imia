import React from 'react';
import './CheckOutNav.scss'

const CheckOutNav = () => {
    return (
        <div className="check-nav">
            <ul className="check-nav-list">
                <li className="check-nav-active">Personal details</li>
                <li className="check-nav-item">Shipping method</li>
                <li className="check-nav-item">Make payment</li>
            </ul>
            
        </div>
    )
}

export default CheckOutNav
