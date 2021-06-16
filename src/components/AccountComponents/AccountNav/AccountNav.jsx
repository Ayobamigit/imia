import React, {useContext} from 'react';
// import { NavLink } from 'react-bootstrap';
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
                        Business info
                    </li>

                   <li 
                        onClick={()=>onRouteChange('payouts')} 
                        className={route === 'payouts' ? 'nav-li-active' : null}
                    >
                        Payouts
                    </li>

                   <li 
                        onClick={()=>onRouteChange('plans')} 
                        className= {route === 'plans' ? 'nav-li-active' : null}
                    >
                        Plans & Billing
                    </li>

                    <li 
                        onClick={()=>onRouteChange('shipping')} 
                        className= {route === 'shipping' ? 'nav-li-active' : null}
                    >
                        Shipping & taxes
                    </li>

                    <li 
                        onClick={()=>onRouteChange('profile')} 
                        className= {route === 'profile' ? 'nav-li-active' : null}
                    >
                        Profile
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default AccountNav
