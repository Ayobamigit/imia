import React, { useContext } from 'react';
import EmptyState from '../../EmptyState/EmptyState';
import { BuyerOrdersContext } from './MyOrders';
import Divider from '../../UI/Divider/Divider';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Image} from '../../../assets/icons/shoe.svg';

const Fulfilled = () => {
    const {state:{fulfilledList}, onViewOrder} = useContext(BuyerOrdersContext);
    const id="#23190FHB";
    return (
        <div>
            {
               fulfilledList.length === 0 ?
               <EmptyState 
                    className="padding-100"
                    title = "No orders here yet"
                    text = "You’ve not completed any orders yet. There’s a world of African products waiting for you here."
                    button = "Let’s go shopping"
               />
               :
               <div className="account-order-div mt-40">
                   <Row>
                       <Col lg={1}>
                           <Image />
                       </Col>
                       <Col lg={6} className="order-padding">
                            <h6 className="bold">#23190FHB</h6>
                            <p className="account-order-desc">1 item · Here’s where the details of the products included in this placed order shows up...</p>
                       </Col>
                       <Col lg={3} className="text-end mt-30">
                            <div className="table-paid">
                            Delivered
                            </div>
                       </Col>
                       <Col lg={2} className="mt-30">
                            <div className="transparent-button" onClick={()=>onViewOrder('individual', id, 'fufilled')}>
                            View details
                            </div>
                       </Col>
                   </Row>
                    <Divider />
                    <Row>
                       <Col lg={1}>
                           <Image />
                       </Col>
                       <Col lg={6} className="order-padding">
                            <h6 className="bold">#23190FHB</h6>
                            <p className="account-order-desc">1 item · Here’s where the details of the products included in this placed order shows up...</p>
                       </Col>
                       <Col lg={3} className="text-end mt-30">
                            <div className="table-paid">
                            Picked up
                            </div>
                       </Col>
                       <Col lg={2} className="mt-30">
                            <div className="transparent-button">
                            View details
                            </div>
                       </Col>
                   </Row>
                    <Divider />
                    <Row>
                       <Col lg={1}>
                           <Image />
                       </Col>
                       <Col lg={6} className="order-padding">
                            <h6 className="bold">#23190FHB</h6>
                            <p className="account-order-desc">1 item · Here’s where the details of the products included in this placed order shows up...</p>
                       </Col>
                       <Col lg={3} className="text-end mt-30">
                            <div className="table-paid">
                            Delivered
                            </div>
                       </Col>
                       <Col lg={2} className="mt-30">
                            <div className="transparent-button">
                            View details
                            </div>
                       </Col>
                   </Row>
                    <Divider />
                    <Row>
                       <Col lg={1}>
                           <Image />
                       </Col>
                       <Col lg={6} className="order-padding">
                            <h6 className="bold">#23190FHB</h6>
                            <p className="account-order-desc">1 item · Here’s where the details of the products included in this placed order shows up...</p>
                       </Col>
                       <Col lg={3} className="text-end mt-30">
                            <div className="table-paid">
                            Delivered
                            </div>
                       </Col>
                       <Col lg={2} className="mt-30">
                            <div className="transparent-button">
                            View details
                            </div>
                       </Col>
                   </Row>
               </div>
           }
        </div>
    )
}

export default Fulfilled
