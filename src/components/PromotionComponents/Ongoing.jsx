import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Divider from '../UI/Divider/Divider'
import {ReactComponent as Percent} from '../../assets/icons/percentage.svg';
import {ReactComponent as Product} from '../../assets/icons/product.svg';
import {ReactComponent as Promotion} from '../../assets/icons/promotion.svg';
import {ReactComponent as Banner} from '../../assets/icons/banner.svg';


const Ongoing = () => {
    return (
        <Row>
            <Col lg={4}>
                <div className="promotion-type-div">
                    <div className="promotion-title-div inmb-5">
                        <h3 className="promotion-title">Black Friday Sales</h3>
                        <button className="promotion-title-button">
                            50% · 24 products
                        </button>
                    </div>
                    <Divider />
                    <div className="promotion-footer-div inmt-22">
                       <Percent className="mr-10" /> 
                       <h3 className="promotion-footer-text">Discount · ends 22 Jan 2021</h3>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div className="promotion-type-div">
                    <div className="promotion-title-div inmb-23">
                        <h3 className="promotion-title">Ad 001</h3>
                        <Banner />
                    </div>
                    <Divider />
                    <div className="promotion-footer-div inmt-22">
                       <Promotion className="mr-10 promotionIcons" /> 
                       <h3 className="promotion-footer-text">Advertisement · ends 09 Feb 2021</h3>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div className="promotion-type-div">
                    <div className="promotion-title-div inmb-5">
                        <h3 className="promotion-title">BXGK8903</h3>
                        <button className="promote-button">
                        Copy code
                        </button>
                    </div>
                    <Divider />
                    <div className="promotion-footer-div inmt-22">
                       <Product className="mr-10 promotionIcons" /> 
                       <h3 className="promotion-footer-text">Coupon · ends 18 Jan 2021</h3>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Ongoing
