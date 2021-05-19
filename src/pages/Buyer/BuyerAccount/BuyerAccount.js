import React, {createContext, useState, useEffect} from 'react';
import './BuyerAccount.scss';
import { Container } from 'react-bootstrap';
import AccountBar from '../../../components/BuyerAccountComponents/AccountLayout/AccountBar';
import Addresses from '../../../components/BuyerAccountComponents/Addresses/Addresses';
import MyOrders from '../../../components/BuyerAccountComponents/MyOrders/MyOrders';
import Profile from '../../../components/BuyerAccountComponents/Profile/Profile';
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout';
import { useRouteMatch } from 'react-router';



export const BuyerAccountsContext = createContext();

const BuyerAccount = () => {
    const [state, setState] = useState({
        route : '',
    })

    const {route} = state;

    const match = useRouteMatch();
    const prevRoute = match.params.id;
    // console.log('prev', prevRoute)
    // console.log('ro', route)

    /** This block on code ensures that on loading this page, 
        the route is set to the previous route which 
        is gotten from the url clicked from the My account dropdown.
        But if it's loaded directly using the exact url to the page, it should set route to orders **/
    
    useEffect(() => {
        setState(state=>({
            ...state,
            route: prevRoute ? prevRoute : 'orders'
         }))
    }, [prevRoute])



   const onRouteChange = (value) =>{
       //Updating match.params.id to ensure that the prevRoute value is always the same as the route value
      match.params.id = value;
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
