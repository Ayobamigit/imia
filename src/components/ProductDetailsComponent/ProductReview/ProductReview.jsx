import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';
import './ProductReview.scss';
import {ReactComponent as Star} from '../../../assets/icons/star.svg';
import {ReactComponent as Down} from '../../../assets/icons/down-half.svg';



const ProductReview = () => {
    return (
        <div className="about-product">
            <h1 className="buyer-manage-profile">Customer reviews and ratings</h1>
            <Row className="mt-25">
                <Col lg={2} className="mt-30">
                    <h2 className="review-header"><span className="bold">4.4</span>/5</h2>
                    
                    <div>
                        <Star className="star star-active" />
                        <Star className="star star-active" />
                        <Star className="star star-active" />
                        <Star className="star star-active" />
                        <Star className="star" />
                    </div>
                    <p className="bar-text mt-14">240 ratings</p>
                </Col>
                <Col lg={5}>
                    {/* <Row>
                        <Col><p>5 stars</p></Col>
                        <Col><ProgressBar now={60} bsPrefix="progress"/></Col>   
                        <Col><p>156</p></Col>   
                    </Row> */}
                    
                    <div className="review">
                        <p className="bar-text text-darker">5 stars</p>
                        <ProgressBar now={80} bsPrefix="progress" className="mt-05"/>
                        <p className="bar-text">156</p>
                    </div>

                    <div className="review">
                        <p className="bar-text text-darker">4 stars</p>
                        <ProgressBar now={30} bsPrefix="progress" className="mt-05"/>
                        <p className="bar-text">68</p>
                    </div>

                    <div className="review">
                        <p className="bar-text text-darker">3 stars</p>
                        <ProgressBar now={20} bsPrefix="progress" className="mt-05"/>
                        <p className="bar-text">11</p>
                    </div>

                    <div className="review">
                        <p className="bar-text text-darker">2 stars</p>
                        <ProgressBar now={15} bsPrefix="progress" className="mt-05"/>
                        <p className="bar-text">3</p>
                    </div>

                    <div className="review">
                        <p className="bar-text text-darker">1 star &nbsp;</p>
                        <ProgressBar now={10} bsPrefix="progress" className="mt-05"/>
                        <p className="bar-text">2</p>
                    </div>
                      
                </Col>
            </Row>

            <div className="review-amount mt-30">
                <h5 className="review-title-text">98 reviews</h5>
                <div className="transparent-button">
                    Most relevant <Down className="ml-07" />
                </div>
            </div>

            <div className="review-content">
                <p className="review-content-heading">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" /><span className="bold ml-15">Warm and cozy</span>
                </p>

                <p className="review-content-review">
                    This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. 
                    These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation...<span className="bold">read more</span>
                </p>

                <p className="review-content-review">
                    <span className="bold">01 Aug 2019 by Emmanuel Reniwa</span> | <span className="review-content-verify">Verified purchase</span>
                </p>
            </div>

            <div className="review-content">
                <p className="review-content-heading">
                    <Star className="star star-active" />
                    <Star className="star " />
                    <Star className="star " />
                    <Star className="star" />
                    <Star className="star" /><span className="bold ml-15">Worse than I hoped</span>
                </p>

                <p className="review-content-review">
                It breaks up the intimidating blocks of text and makes the page more inviting to read, which is again ironic, considering this is dummy copy.
                </p>

                <p className="review-content-review">
                    <span className="bold">22 Jan 2020 by Adekunle Msilanga</span>
                </p>
            </div>

            <div className="review-content">
                <p className="review-content-heading">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star" /><span className="bold ml-15">Transformational!</span>
                </p>

                <p className="review-content-review">
                It is not meant to be read. Someday this space will be occupied by real copy that is meant to be read. What other form of filler would dare be so politically incorrect? 
                This is dummy copy. It is not meant to be read. Good thing this has been stated already.
                </p>

                <p className="review-content-review">
                    <span className="bold">07 May 2020 by Mariam Usman</span> | <span className="review-content-verify">Verified purchase</span>
                </p>
            </div>
            
            <p className="review-content-review cursor-pointer mt-30"><u>Show more reviews</u></p>
        </div>
    )
}

export default ProductReview