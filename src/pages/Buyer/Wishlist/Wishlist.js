import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout';
import ProductGrid from '../../../components/ProductGrid/ProductGrid';
import {ReactComponent as Copy} from '../../../assets/icons/copy.svg';

const Wishlist = () => {
    return (
        <BuyerLayout>
            <div className="wishlist">
                <Row>
                    <Col>
                    <h1 className="buyer-manage-profile">Wishlist</h1>
                    </Col>
                    <Col className="text-end">
                        <div className="transparent-button">
                       <Copy className="mr-05"/> Copy and share link
                        </div>
                    </Col>
                </Row>
                <ProductGrid />
            </div>
        </BuyerLayout>
    )
}

export default Wishlist
