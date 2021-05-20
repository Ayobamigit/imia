import React, { createContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import CheckOutProduct from '../../../components/CheckOutComponents/CheckOutProduct/CheckOutProduct';

export const CheckoutContext = createContext();

const CheckOut = () => {
    const [state, setState] = useState({
        deliveryMethod: 'shipping',
        discount: false,
        discountCode:'',
        discountButton: true,
        shippingCost :'',
        taxValue:''
    })

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
    return (
        <CheckoutContext.Provider value={{
            onApplyCode,
            onChange,
            removeDisount,
            state
        }}>
        <Row>
            <Col lg={7} style={{backgroundColor: '#fff'}}></Col>
            <Col lg={5}>
                <CheckOutProduct />
            </Col>
        </Row>
        </CheckoutContext.Provider>
    )
}

export default CheckOut
