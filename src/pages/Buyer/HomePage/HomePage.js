import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout'
import Banner from '../../../components/HomeComponents/Banner/Banner'
import SideMenu from '../../../components/HomeComponents/SideMenu/SideMenu'
import ProductGridCopy from '../../../components/ProductGrid/ProductGridCopy'

const HomePage = () => {
    return (
        <BuyerLayout>
            <Banner />
            <div className="general-body">
                <Row>
                    <Col lg={3}>
                        <SideMenu />
                    </Col>
                    <Col lg={9}>
                        <h1 className="buyer-manage-profile">Best Sellers</h1>
                        <ProductGridCopy />

                        <h1 className="buyer-manage-profile">Promotions</h1>
                        <ProductGridCopy />

                        <h1 className="buyer-manage-profile">New Products</h1>
                        <ProductGridCopy />

                        <h1 className="buyer-manage-profile">Under $30</h1>
                        <ProductGridCopy />

                    </Col>
                </Row>
            </div>
        </BuyerLayout>
    )
}

export default HomePage
