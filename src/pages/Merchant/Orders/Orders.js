import React, { useState, createContext } from 'react'
import {Container} from 'react-bootstrap';
import EmptyState from '../../../components/EmptyState/EmptyState';
import Layout from '../../../components/Layout/Layout';
import CancelledOrders from '../../../components/OrderComponents/CancelledOrders';
import FufilledOrders from '../../../components/OrderComponents/FufilledOrders';
import OrderNav from '../../../components/OrderComponents/OrderNav/OrderNav';
import PendingOrderTable from '../../../components/OrderComponents/PendingOrderTable';
import Search from '../../../components/Search/Search';

export const OrdersContext = createContext();


const Orders = () => {
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
            return <PendingOrderTable />;
         case 'fufilled':
            return <FufilledOrders />;
         case 'cancelled':
            return <CancelledOrders />;
         default:
            return <PendingOrderTable />
      }
   }

   return (
      <Layout
         page = "Orders"
      >
         <OrdersContext.Provider value={{
            onRouteChange,
            state
         }}>
            {
               orderList.length === 0 ?
               
                  <Container fluid>
                     <EmptyState
                        title = "No orders yet"
                        text = "You've not received any order from customers yet. When you do, they'll appear here for you to fulfill."
                     />
                  </Container>

                  :
                  <>
                     <OrderNav/>

                     <Container fluid>

                     <div className = "ml-40 mt-40">
                        <Search 
                           placeholder="Type to search orders..."
                        />
                     </div>

                     {renderPages()}

                     </Container>
                  </>   
            }
            
         </OrdersContext.Provider>
       
      </Layout>
   )
}

export default Orders
