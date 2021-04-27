import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BusinessInfoTitle from '../../AccountComponents/BusinessInfo/BusinessInfoTitle/BusinessInfoTitle'
import Divider from '../../UI/Divider/Divider'
import AdditionalDetails from './AdditionalDetails/AdditionalDetails'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductVariants from './ProductVariants/ProductVariants'

const AddProductComponent = () => {
    return (
        <Container className="mt-40 mb-120">
            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Product details"
                        description="Enter the product details" 
                    />
                </Col>
                <Col lg={8}>
                    <ProductDetails />
                </Col>
            </Row>

            <Divider/>

            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Additional details"
                        description="Enter additional details for this product" 
                    />
                </Col>
                <Col lg={8}>
                    <AdditionalDetails />
                </Col>
            </Row>

            <Divider/>

            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Price, quantity and variants"
                        description="Enter the price details for this product." 
                    />
                </Col>
                <Col lg={8}>
                    <ProductVariants />
                </Col>
            </Row>

            
        </Container>
    )
}

export default AddProductComponent
