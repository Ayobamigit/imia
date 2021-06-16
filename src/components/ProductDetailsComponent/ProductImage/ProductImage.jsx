import React from 'react';
import './ProductImage.scss';
import BigImage from '../../../assets/img/imagebig.png'
import First from '../../../assets/img/imagesmall.png'
import Second from '../../../assets/img/imagesmaller.png'
import Third from '../../../assets/img/imagesmalls.png'
import { Row, Col } from 'react-bootstrap';
import {ReactComponent as Star} from '../../../assets/icons/star.svg';


const ProductImage = () => {
    return (
        <Row className="product-image">
            <Col lg={6} className="product-image-grid">
                <div>
                    <img src={BigImage} alt="img" />
                </div>

                <div className="mt-40">
                <img src={First} alt="img" className="mr-12" />
                <img src={Second} alt="img"  className="mr-12" />
                <img src={Third} alt="img"  className="mr-12" />
                </div>
            </Col>
            <Col lg={6} className="product-details-grid">
                <p>Trails Couture, Uganda <Star className="star star-active" /> 4.9</p>
                <h1 className="buyer-manage-profile">Mystik coat</h1>

                <div>
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star" /> 240 ratings
                </div>

                <div>
                  <h1 className="buyer-manage-profile">$450.99</h1>
                  <p>$750.99</p>
                  <div className="general-button">
                    50%
                  </div>
                </div>

                <div>
                    <p>Select Color</p>
                    <div className="transparent-button">Blue</div>
                    <div className="ship-button">Red</div>
                    <div className="transparent-button">Grey</div>
                </div>

                <div>
                    <div>
                        <p>Select Size</p>
                        <div className="ship-button">XXL</div>
                        <div className="transparent-button">XL</div>
                    </div>

                    <div>
                        <p>View size guide</p>
                    </div>

                </div>

                <div>
                    <div className="general-button">
                       - 2 +
                    </div>
                    <div className="general-button">
                        Add to basket
                    </div>
                    <div className="prev-button">
                        Buy now
                    </div>
                </div>

            </Col>
        </Row>
    )
}

export default ProductImage
