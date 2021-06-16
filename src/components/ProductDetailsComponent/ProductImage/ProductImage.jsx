import React from 'react';
import './ProductImage.scss';
import BigImage from '../../../assets/img/imagebig.png'
import First from '../../../assets/img/imagesmall.png'
import Second from '../../../assets/img/imagesmaller.png'
import Third from '../../../assets/img/imagesmalls.png'
import { Row, Col } from 'react-bootstrap';
import {ReactComponent as Star} from '../../../assets/icons/star.svg';
import {ReactComponent as WishList} from '../../../assets/icons/heart.svg';
import {ReactComponent as Minus} from '../../../assets/icons/minus.svg';
import {ReactComponent as Plus} from '../../../assets/icons/plus.svg';


const ProductImage = () => {
    return (
        <Row className="product-image">
            <Col xl={6} lg={12} md={12} className="product-image-grid">
                <div className="main-image">
                    <img src={BigImage} alt="img" />
                </div>

                <div className="mt-40">
                <img src={First} alt="img" className="mr-12" />
                <img src={Second} alt="img"  className="mr-12" />
                <img src={Third} alt="img"  className="mr-12" />
                </div>
            </Col>
            <Col xl={6} lg={12} md={12} className="product-details-grid">
                <div className="vendor-wish">
                  <p className="vendor-country"> <span className="bottom">Trails Couture, Uganda </span><Star className="star star-active ml-10" /> <span className="bottom">4.9</span></p>
                    <WishList />
                </div>
                
                <h1 className="buyer-manage-profile small-font">Mystik coat</h1>

                <div className="mb-30">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" /> 
                    <span className="vendor-country ml-10 bottom">(240 ratings)</span>
                </div>

                <div className="mb-30">
                  <h1 className="buyer-manage-profile">$450.99</h1>
                    <p className="discount-text inline">$750.99</p>
                    <div className="general-button discount-button ml-10">
                        - 50%
                    </div>
                </div>

                <div className="mb-30">
                    <p  className="vendor-country text-dark bold">Select Color</p>
                    <div className="transparent-button">Blue</div>
                    <div className="ship-button color-button ml-16">Red</div>
                    <div className="transparent-button ml-16">Grey</div>
                </div>

                <div className="vendor-wish mb-30">
                    <div>
                        <p className="vendor-country text-dark bold">Select Size</p>
                        <div className="ship-button color-button">XXL</div>
                        <div className="transparent-button ml-16">XL</div>
                    </div>

                    <div>
                        <p className="vendor-country"><span className="bottom">View size guide</span></p>
                    </div>

                </div>

                <div>
                    <div className="curved-button">
                       <Minus className="basket-icon-extra mr-20 cursor-pointer" /> 2 <Plus className="basket-icon-extra ml-20 cursor-pointer"/>
                    </div>
                    <div className="general-button gen">
                        Add to basket
                    </div>
                    <div className="prev-button ml-14">
                        Buy now
                    </div>
                </div>

            </Col>
        </Row>
    )
}

export default ProductImage
