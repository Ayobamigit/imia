import React, {createContext, useState} from 'react';
import './BuyerAccount.scss';
import { Container } from 'react-bootstrap';
import AccountBar from '../../../components/BuyerAccountComponents/AccountLayout/AccountBar';
import Addresses from '../../../components/BuyerAccountComponents/Addresses/Addresses';
import MyOrders from '../../../components/BuyerAccountComponents/MyOrders/MyOrders';
import Profile from '../../../components/BuyerAccountComponents/Profile/Profile';
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout';



export const BuyerAccountsContext = createContext();

const BuyerAccount = () => {
    const [state, setState] = useState({
        route : 'orders',
    })

    const {route} = state;

   const onRouteChange = (value) =>{
      setState(state=>({
         ...state,
         route: value
      }))
   }

   const renderPages = () =>{
    switch(route) {
      case 'orders':
          return <MyOrders/>;
      case 'addresses':
          return <Addresses />;
      case 'profile':
          return <Profile />;
      default:
          return <MyOrders />
    }
 }
    return (
        <BuyerLayout>
            <BuyerAccountsContext.Provider value={{
                onRouteChange,
                state
            }}>
                <Container fluid className="padding-size">
                    <div id="general">
                        <div id="bar">
                            <AccountBar />
                        </div>

                        <div id="child">
                            {renderPages()}
                        </div>
                    </div>
                </Container>

            </BuyerAccountsContext.Provider>
        </BuyerLayout>
    )
}

export default BuyerAccount
