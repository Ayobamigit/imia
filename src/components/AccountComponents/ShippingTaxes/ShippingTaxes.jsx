import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Divider from '../../UI/Divider/Divider'
import SideDrawer from '../../UI/SideDrawer/SideDrawer'
import BusinessInfoTitle from '../BusinessInfo/BusinessInfoTitle/BusinessInfoTitle'
import AddPickUp from './DeliveryMethods/AddPickUp'
import DeliveryMethods from './DeliveryMethods/DeliveryMethods.jsx'
import Taxes from './Taxes/Taxes'

const ShippingTaxes = () => {
    const [state, setState] = useState({
        addPickup: false
    })

    const cancelAddPickUp = () =>{
        setState(state=>({
            ...state,
            addPickup: false
        }))
    }

    const onClickAdd = ()=>{
        setState(state=>({
            ...state,
            addPickup: true
        }))
    }

    const {addPickup} = state;
    return (
        <>
            <SideDrawer open ={addPickup} closed = {cancelAddPickUp}>
                <AddPickUp />
            </SideDrawer>

            <Container className="mt-40">
                <Row>
                    <Col lg={4}>
                        <BusinessInfoTitle 
                            title="Delivery Methods"
                            description="Setup delivery methods for your store"
                        />
                    </Col>
                    <Col lg={8}>
                        <DeliveryMethods
                            onClickAdd ={onClickAdd}
                        />
                    </Col>
                </Row>

                <Divider />
                
                <Row>
                    <Col lg={4}>
                        <BusinessInfoTitle 
                            title="Taxes"
                            description="Configure your taxes"
                        />
                    </Col>
                    <Col lg={8}>
                        <Taxes />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ShippingTaxes
