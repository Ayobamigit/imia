import React from 'react';
import './Payouts.scss';
import {ReactComponent as Hint} from '../../../assets/icons/bulb.svg';
import {ReactComponent as Help} from '../../../assets/icons/smallhelp.svg';


const PayoutInfo = (props) => {
    return (
        <div className="payout-info">
            <h3 className="payout-text"><span className="hint-span"><Hint /></span>{props.text} <span className="help-span"><Help /></span></h3> 
        </div>
    )
}

export default PayoutInfo
