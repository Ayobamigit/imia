import React, {useContext} from 'react';
import { NavLink } from 'react-bootstrap';
import { OrdersContext } from '../../../pages/Orders/Orders';

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
                        <NavLink to="#">Pending (120)</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('fufilled')} 
                        className={route === 'fufilled' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Fulfilled (99)</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('cancelled')} 
                        className= {route === 'cancelled' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Cancelled (14)</NavLink>
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default OrderNav