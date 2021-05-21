import React, { createContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CheckOutDetails from '../../../components/CheckOutComponents/CheckOutDetails/CheckOutDetails';
import CheckOutProduct from '../../../components/CheckOutComponents/CheckOutProduct/CheckOutProduct';

export const CheckoutContext = createContext();

const CheckOut = () => {

    const authToken = false;
    const [state, setState] = useState({
        shipping: true,
        discount: false,
        discountCode:'',
        discountButton: true,
        shippingCost :'',
        taxValue:'',
        isPickupAvailable: true,
        address: true,
        checked: false,
        addNewAddress: false
    })

    const {shipping, isPickupAvailable, checked, addNewAddress} = state

    const onApplyCode = () =>{
        setState(state=>({
            ...state,
            discount: true,
            discountButton: true
        }))
    }

    const onChange =(e)=>{
        setState(state=>({
            ...state,
           [ e.target.name]: e.target.value
        }))

        if(e.target.name === 'discountCode'){
            setState(state=>({
                ...state,
                discountButton: false
            }))
        }
    }

    const removeDisount = () =>{
        console.log('clicked')
        setState(state=>({
            ...state,
            discountCode:'',
            discountButton: true,
            discount: false
        }))
    }

    const onClickDelivery = () =>{
        if(isPickupAvailable){
            setState(state=>({
                ...state,
                shipping: !shipping
            }))
        }else{
            setState(state=>({
                ...state,
                shipping: true
            }))
        }
        
    }

    const onChangeCheckBox = () =>{
        setState(state=>({
            ...state,
            checked : !checked
        }))
    }

    const onClickCheckBox = () =>{
        setState(state=>({
            ...state,
            addNewAddress : true
            // addNewAddress : !addNewAddress
        }))
    }

    const displayAddress = () =>{
        if(addNewAddress){
            setState(state=>({
                ...state,
                address: false
            }))
        }
        // else{
        //     setState(state=>({
        //         ...state,
        //         address: true
        //     }))
        // }
    }
// This runs whenever the use new address button is clicked. Display address chows the shipping address form
    useEffect(() => {
        displayAddress()
    }, [addNewAddress])


    return (
        <CheckoutContext.Provider value={{
            onApplyCode,
            onChange,
            removeDisount,
            onClickDelivery,
            onChangeCheckBox,
            onClickCheckBox,
            authToken,
            state
        }}>
        <Row>
            <Col lg={7} style={{backgroundColor: '#fff', padding :'0px'}}>
                <CheckOutDetails />
            </Col>
            <Col lg={5}>
                <CheckOutProduct />
            </Col>
        </Row>
        </CheckoutContext.Provider>
    )
}

export default CheckOut
