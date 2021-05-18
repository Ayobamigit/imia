import React, {createContext, useState} from 'react'
import Fufilled from './Fulfilled';
import Cancelled from './Cancelled';
import Pending from './Pending';
import OrderNav from './OrderNav';
import IndividualBuyerOrder from './IndividualBuyerOrder';
import CancelOrder from './Actions/CancelOrder';
import TrackItem from './Actions/TrackItem';
import ReportOrder from './Actions/ReportOrder';
import ReviewVendor from './Actions/ReviewVendor';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';
import ReportSuccess from './Actions/ReportSuccess';

export const BuyerOrdersContext = createContext();

const MyOrders = () => {

    const [state, setState] = useState({
        route: 'pending',
        pendingList: [1, 3, 4, 4],
        fulfilledList: [2, 2, 2, 2],
        cancelledList: [2, 2, 2, 2],
        orderId: '',
        oldRoute:'',
        action:'',
        addAction:'',
        orderStatus: 'delivered',
        deliveryMethod:'shipping'
     })
     const {route, addAction, action} = state;
  
     const onRouteChange = (value) =>{
        setState(state=>({
           ...state,
           route: value
        }))  
    }

    const onClickAction = (value) =>{
        setState(state=>({
            ...state,
            action: value,
            addAction: true
         }))  
    }

    const cancelClickAction = () =>{
        setState(state=>({
          ...state,
          addAction: false
        }))
      }

    const onViewOrder = (value, id, text) =>{
        setState(state=>({
           ...state,
           route: value,
           orderId: id,
           oldRoute: text
        }))  

        getOrderDetails();
    }

    const getOrderDetails = () =>{
        console.log('this is a function to get the details of an order')
    }

    const onSubmitReport = () =>{
        setState(state=>({
            ...state,
            action: 'success'
          }))
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

     const actionRenderer = () =>{
        switch(action) {
           case 'cancel':
              return <CancelOrder />;
           case 'report':
              return <ReportOrder/>;
           case 'track':
              return <TrackItem />;
           case 'review':
              return <ReviewVendor />;
           case 'success':
              return <ReportSuccess />;
           default:
              return null
        }
    }
    return (
        <BuyerOrdersContext.Provider value={{
            onRouteChange,
            onViewOrder,
            onClickAction,
            cancelClickAction,
            onSubmitReport,
            state
        }}>
             <SideDrawer open={addAction} closed={cancelClickAction} >
                {actionRenderer()}
            </SideDrawer>
            {
                route === 'individual' ?
                <IndividualBuyerOrder />
                    :
                <div>
                    <h1 className="buyer-manage-profile">My orders</h1>
                    <OrderNav />
                        <div>
                            {renderPages()}
                        </div>
                </div>
            }
        </BuyerOrdersContext.Provider>
       
    )
}

export default MyOrders
