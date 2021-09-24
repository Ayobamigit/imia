import React, {useState, createContext} from 'react';
import DropDown from '../UI/DropDown/DropDown';
import SideDrawer from '../UI/SideDrawer/SideDrawer';
import BuyerFooter from './BuyerFooter/BuyerFooter';
import BuyerHeader from './BuyerHeader/BuyerHeader';
import './BuyerLayout.scss';
import AccountDropdown from './LayoutElements/Account_dropdown';
import CountryDropdown from './LayoutElements/Country_dropdown';
import SignIn from './LayoutElements/Sign_in';
import SignUp from './LayoutElements/Sign_up';
import ResetPassword from './LayoutElements/Reset_password';
import CreatePassword from './LayoutElements/Create_password';
import Basket from './LayoutElements/Basket';

export const BuyerLayoutContext = createContext();

const BuyerLayout = (props) => {
    const authToken = false;
    const [state, setState] = useState({
        dropElement: '',
        sideElement:'',
        showSideBar: false,
        showDropDown: false,
        isPasswordShown: true,
        basketList:[2,2]
     })
     const {dropElement, showDropDown, isPasswordShown, sideElement, showSideBar} = state;

     const sendCode = () =>{
        setState(state=>({
            ...state,
            sideElement: 'new-password'
         }))  
    }
     const onClickDropDown = (value) =>{
        setState(state=>({
            ...state,
            dropElement: value,
            showDropDown: true
            // showDropDown: !showDropDown
         }))  
    }

    const onOpenSideBar = (value) =>{
        setState(state=>({
            ...state,
            sideElement: value,
            showSideBar: true
            // showDropDown: !showDropDown
         }))  
    }

    const cancelSideDrawer= () =>{
        setState(state=>({
            ...state,
            showSideBar: false
            }))
    }

    const cancelDropDown= () =>{
        /** cancelDropDown is passed to the <div id="buyer-wrapper"> ,
        so that when anywhere in the broswer body is clicked, 
        the dropdown closes  This block of code only executes when drop down is showing **/
        
        if(showDropDown === true){
            setState(state=>({
                ...state,
                showDropDown: false
              }))
        }
        // console.log(showDropDown)
    }

    const dropDownRenderer = () =>{
        switch(dropElement) {
           case 'country':
              return <CountryDropdown />;
           case 'account':
              return <AccountDropdown/>;
           default:
              return null
        }
    }

    const sideBarRenderer = () =>{
        switch(sideElement) {
           case 'sign-in':
              return <SignIn />;
           case 'sign-up':
              return <SignUp />;
            case 'forgot':
                return <ResetPassword />;
            case 'new-password':
                return <CreatePassword />;
            case 'basket':
                return <Basket />
           default:
               return null
        }
    }

    const togglePassword = () =>{
        setState(state=>({
            ...state,
            isPasswordShown  : !isPasswordShown
        }))
    }
    return (
        <BuyerLayoutContext.Provider value={{
            onClickDropDown,
            togglePassword,
            onOpenSideBar,
            sendCode,
            authToken,
            state
        }}>

            <DropDown open={showDropDown} className={`${dropElement === 'country' ? 'country-drop' : dropElement === 'account' ? 'account-drop' : '' }`}>
                    {dropDownRenderer()}
            </DropDown>

            <div id="buyer-wrapper" onClick={cancelDropDown}>
                <SideDrawer open={showSideBar} closed={cancelSideDrawer}>
                    {sideBarRenderer()}
                </SideDrawer>

                
                <div id="buyer-header">
                    <BuyerHeader />
                </div>

                <div id="main-children">
                    {props.children}
                </div>
                <div id="buyer-footer">
                    <BuyerFooter />
                </div>
                
            </div>
        </BuyerLayoutContext.Provider>
        
    )
}

export default BuyerLayout
