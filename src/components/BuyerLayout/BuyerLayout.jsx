import React from 'react';
import BuyerFooter from './BuyerFooter/BuyerFooter';
import BuyerHeader from './BuyerHeader/BuyerHeader';
import './BuyerLayout.scss';

const BuyerLayout = (props) => {
    return (
        <div id="buyer-wrapper">
            <div id="buyer-header">
                <BuyerHeader />
            </div>

            <div id="main-children">
                {props.children}
            </div>
            <div id="buyer-footer">
                <BuyerFooter />
            </div>
            
        </div>
    )
}

export default BuyerLayout
