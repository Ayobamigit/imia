import React, {useContext} from 'react'
import { BuyerOrdersContext } from './MyOrders';

const OrderNav = () => {
    const { onRouteChange, state:{route, pendingList, cancelledList, fulfilledList}} = useContext(BuyerOrdersContext);

    return (
        <div className="Order-Nav-Bar">
           <div>
               <ul className="Order-nav-ul">
                   <li 
                        onClick={()=>onRouteChange('pending')} 
                        className={route === 'pending' ? 'nav-li-active' : ""}
                    >
                        Pending (
                            {
                                pendingList.length ?
                                pendingList.length
                                :
                                '0'
                            }
                        )
                    </li>

                   <li 
                        onClick={()=>onRouteChange('fufilled')} 
                        className={route === 'fufilled' ? 'nav-li-active' : ""}
                    >
                        Fulfilled (
                            {
                                fulfilledList.length ?
                                fulfilledList.length
                                :
                                '0'
                            }
                        )
                    </li>

                   <li 
                        onClick={()=>onRouteChange('cancelled')} 
                        className= {route === 'cancelled' ? 'nav-li-active' : ""}
                    >
                        Cancelled (
                            {
                                cancelledList.length ?
                                cancelledList.length
                                :
                                '0'
                            }
                        )
                    </li>
               </ul>
               <div className="border-ash"></div>
            </div> 
        </div>
    )
}

export default OrderNav
