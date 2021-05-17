import React, {useContext} from 'react';
import { NavLink } from 'react-bootstrap';
import { AccountsContext } from '../../../pages/Merchant/Account/Account';

const AccountNav = () => {
    const { onRouteChange, state:{route}} = useContext(AccountsContext);

    return (
        <div className="Nav-Bar">
           <div className="nav-navigation">
               <ul className="nav-ul">
                   <li 
                        onClick={()=>onRouteChange('business')} 
                        className={route === 'business' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Business info</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('payouts')} 
                        className={route === 'payouts' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Payouts</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('plans')} 
                        className= {route === 'plans' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Plans & Billing</NavLink>
                    </li>

                    <li 
                        onClick={()=>onRouteChange('shipping')} 
                        className= {route === 'shipping' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Shipping & taxes</NavLink>
                    </li>

                    <li 
                        onClick={()=>onRouteChange('profile')} 
                        className= {route === 'profile' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Profile</NavLink>
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default AccountNav
