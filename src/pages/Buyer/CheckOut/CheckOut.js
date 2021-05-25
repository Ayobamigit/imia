import React, { createContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import CheckOutDetails from '../../../components/CheckOutComponents/CheckOutDetails/CheckOutDetails';
import CheckOutProduct from '../../../components/CheckOutComponents/CheckOutProduct/CheckOutProduct';

export const CheckoutContext = createContext();

const CheckOut = () => {

    const authToken = true;
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
        addNewAddress: false,
        shipType:''
    })

    const history = useHistory();

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

    const onShippingChange = (label, price) =>{
        setState(state=>({
            ...state,
            shipType: label,
            shippingCost: price
        }))
    }

// This runs whenever the use new address button is clicked. Display address shows the shipping address form
    useEffect(() => {
        displayAddress()
    }, [addNewAddress])

    const onCheckOut = () =>{
        history.push('/checkout-success')
    }

    return (
        <CheckoutContext.Provider value={{
            onApplyCode,
            onChange,
            removeDisount,
            onClickDelivery,
            onChangeCheckBox,
            onClickCheckBox,
            onCheckOut,
            onShippingChange,
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
