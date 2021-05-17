import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Search from '../../Search/Search';
import './BuyerHeader.scss';
import {ReactComponent as User} from '../../../assets/icons/user-circle.svg';
import {ReactComponent as WishList} from '../../../assets/icons/heart.svg';
import {ReactComponent as Basket} from '../../../assets/icons/orders.svg';


const BuyerHeader = () => {
    return (
        <div className="buyer-header">
            <div className="primary-header">
                <h3 className="primary-header-text">Vendors<span className="ml-35">Help</span> <span className="ml-35">/ English/ USD</span></h3>
            </div>
            <div className="secondary-header">
                <Row>
                    <Col lg={1}>
                        <h1 className="secondary-header-title">
                            IMIA
                        </h1>
                    </Col>
                    <Col lg={7}>
                        <Search 
                            placeholder="Type product name to search..."
                            className="half-width"
                        />
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={4} className="display-flex">
                                <User className="header-icon" />
                                <h4 className="primary-header-text secondary-header-margin">My account</h4>
                            </Col>
                            <Col lg={4} className="display-flex">
                                <WishList />
                                <h4 className="primary-header-text secondary-header-margin">Wishlist</h4>
                            </Col>
                            <Col lg={4} className="inml-25">
                                <button className="secondary-general-button">
                                    <h4 className="mb-0"><span><Basket className="header-icon" /></span><span className="primary-header-text secondary-header-margin ml-05">0 Items</span></h4>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BuyerHeader
