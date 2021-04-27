import React, {createContext, useState} from 'react'
import AccountNav from '../../components/AccountComponents/AccountNav/AccountNav';
import BusinessInfo from '../../components/AccountComponents/BusinessInfo/BusinessInfo';
import Payouts from '../../components/AccountComponents/Payouts/Payouts';
import PlansBillings from '../../components/AccountComponents/PlansBillings/PlansBillings';
import Profile from '../../components/AccountComponents/Profile/Profile';
import ShippingTaxes from '../../components/AccountComponents/ShippingTaxes/ShippingTaxes';
import Layout from '../../components/Layout/Layout'


export const AccountsContext = createContext();


const Account = () => {

    const [state, setState] = useState({
        route : 'business',
        payoutList: [1]
    })

    const {route} = state;

   const onRouteChange = (value) =>{
      setState(state=>({
         ...state,
         route: value
      }))

      //   console.log(route)
   }

   const renderPages = () =>{
      switch(route) {
        case 'business':
            return <BusinessInfo />;
        case 'payouts':
            return <Payouts />;
        case 'plans':
            return <PlansBillings />;
        case 'shipping':
            return <ShippingTaxes />;
        case 'profile':
            return <Profile />;
        default:
            return <BusinessInfo />
      }
   }

    return (
        <Layout
            page = "Manage Account"
        >
            <AccountsContext.Provider value={{
                onRouteChange,
                state
            }}>

                <AccountNav />

                {renderPages()}

            </AccountsContext.Provider>

        </Layout>
    )
}

export default Account
