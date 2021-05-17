import React, {useContext} from 'react'
import { BuyerOrdersContext } from './MyOrders';
import { NavLink } from 'react-bootstrap';

const OrderNav = () => {
    const { onRouteChange, state:{route}} = useContext(BuyerOrdersContext);

    return (
        <div className="Nav-Bar">
           <div className="nav-navigation">
               <ul className="nav-ul">
                   <li 
                        onClick={()=>onRouteChange('pending')} 
                        className={route === 'pending' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Pending (0)</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('fufilled')} 
                        className={route === 'fufilled' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Fulfilled (0)</NavLink>
                    </li>

                   <li 
                        onClick={()=>onRouteChange('cancelled')} 
                        className= {route === 'cancelled' ? 'nav-li-active' : null}
                    >
                        <NavLink to="#">Cancelled (tre)</NavLink>
                    </li>
               </ul>
            </div> 
        </div>
    )
}

export default OrderNav
