import React, {createContext, useState} from 'react'
import Fufilled from './Fulfilled';
import Cancelled from './Cancelled';
import Pending from './Pending';
import OrderNav from './OrderNav';

export const BuyerOrdersContext = createContext();

const MyOrders = () => {

    const [state, setState] = useState({
        route: 'pending',
        orderList : [1]
     })
     const {route, orderList} = state;
  
     const onRouteChange = (value) =>{
        setState(state=>({
           ...state,
           route: value
        }))
  
        //   console.log(route)
    }

    const renderPages = () =>{
        switch(route) {
           case 'pending':
              return <Pending />;
           case 'fufilled':
              return <Fufilled />;
           case 'cancelled':
              return <Cancelled />;
           default:
              return <Pending />
        }
     }
    return (
        <BuyerOrdersContext.Provider value={{
            onRouteChange,
            state
        }}>
            <div>
                <h1 className="buyer-manage-profile">My orders</h1>
                <OrderNav />
                {
                    orderList.length === 0 ?
                    'No result'
                    :
                    <div>
                        {renderPages()}
                    </div>
                }
            </div>
        </BuyerOrdersContext.Provider>
       
    )
}

export default MyOrders
