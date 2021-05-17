import React, { useContext } from 'react';
import './AccountBar.scss';
import {ReactComponent as Orders} from '../../../assets/icons/box.svg';
import {ReactComponent as Address} from '../../../assets/icons/map.svg';
import {ReactComponent as Profile} from '../../../assets/icons/user-circle.svg';
import {ReactComponent as Logout} from '../../../assets/icons/logout.svg';
import { BuyerAccountsContext } from '../../../pages/Buyer/BuyerAccount/BuyerAccount';


const AccountBar = () => {
    const {onRouteChange, state:{route}} = useContext(BuyerAccountsContext);
    return (
        <div className="account-bar">
            <div className="account-heading">
                <h5 className="account-heading-text">ACCOUNT</h5>
            </div>
            
            <div className="account-navigation">
                <ul className="account-navigation-list">
                    <li 
                        onClick= {()=>onRouteChange('orders')}
                        className={ route === 'orders' ? "account-navigation-active" : "account-navigation-item"}> 
                        <Orders className={ route === 'orders' ? "account-navigation-icon-active" : "account-navigation-icon"}/> My Orders
                    </li>
                    
                    <li 
                        onClick= {()=>onRouteChange('addresses')}
                        className={ route === 'addresses' ? "account-navigation-active" : "account-navigation-item"}> 
                        <Address className={ route === 'addresses' ? "account-navigation-icon-active" : "account-navigation-icon"}/> Addresses
                    </li>

                    <li 
                        onClick= {()=>onRouteChange('profile')}
                        className={ route === 'profile' ? "account-navigation-active" : "account-navigation-item"}> 
                        <Profile className={ route === 'profile' ? "account-navigation-icon-active" : "account-navigation-icon"}/> Profile
                    </li>

                    <li className="account-navigation-item"> 
                        <Logout className="account-navigation-icon"/> Log out
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountBar
