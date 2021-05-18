import React, {useContext} from 'react';
import { OrdersContext } from '../../../pages/Merchant/Orders/Orders';

const OrderNav = () => {
    const { onRouteChange, state:{route}} = useContext(OrdersContext);
    return (
        <div className="Nav-Bar">
           <div className="nav-navigation">
               <ul className="nav-ul">
                   <li 
                        onClick={()=>onRouteChange('pending')} 
                        className={route === 'pending' ? 'nav-li-active' : null}
                    >
                       Pending (120)
                    </li>

                   <li 
                        onClick={()=>onRouteChange('fufilled')} 
                        className={route === 'fufilled' ? 'nav-li-active' : null}
                    >
                        Fulfilled (99)
                    </li>

                   <li 
                        onClick={()=>onRouteChange('cancelled')} 
                        className= {route === 'cancelled' ? 'nav-li-active' : null}
                    >
                        Cancelled (14)
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default OrderNav