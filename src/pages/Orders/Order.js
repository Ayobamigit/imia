import React from 'react'
import { Container } from 'react-bootstrap'
import { useRouteMatch } from 'react-router'
import Layout from '../../components/Layout/Layout'
import IndividualOrder from '../../components/OrderComponents/IndividualOrder'

const Order = () => {
    const match = useRouteMatch();
    const orderId = match.params.id
    return (
        <Layout
        page = "Orders"
        >
            <Container>
               <div className="mt-40" >
                    <h3 className="individual-id">Orders / <span className="individual-dark">#{orderId}</span> </h3>
               </div> 

               <IndividualOrder />
            </Container>

        </Layout>
    )
}

export default Order
