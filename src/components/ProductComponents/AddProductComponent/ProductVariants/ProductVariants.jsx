import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Trash} from '../../../../assets/icons/visibletrash.svg';
import Divider from '../../../UI/Divider/Divider';

const ProductVariants = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Add product variants</label>
                        <p>You can add variants like size, color & more. Separate each variant option with a comma.</p>
                        <Row className="mb-10">
                            <Col lg={5}>
                                <div className="input-group">
                                    <input type="text" className="formcontrol" value="Color" />
                                </div>
                            </Col>
                            <Col lg={6} className="inmg">
                                <div className="input-group">
                                    <input type="text" className="formcontrol" value="blue" />
                                </div>
                            </Col>
                            <Col lg={1} className="mt-05">
                                <Trash />
                            </Col>
                        </Row>

                        <Row className="mb-10">
                            <Col lg={5}>
                                <div className="input-group">
                                    <input type="text" className="formcontrol" placeholder="Variant eg. color"  />
                                </div>
                            </Col>
                            <Col lg={6} className="inmg">
                                <div className="input-group">
                                    <input type="text" className="formcontrol" placeholder="Options eg. red, blue" />
                                </div>
                            </Col>
                            <Col lg={1} className="mt-05">
                                <Trash />
                            </Col>
                        </Row>

                        <p className="add-spec"><u>Add variant</u></p>
                       
                    </Col>
                    
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Price and quantity? </label>
                        <div className="price-quantity mb-15">
                            <input type="text" className="formcontrol price-input" value="blue, XL" disabled />
                            <input type="text" className="formcontrol price-input-two" placeholder="Enter quantity"  />
                            <input type="text" className="formcontrol price-input-three" placeholder="Enter price"  />

                        </div>

                        <div className="price-quantity mb-15">
                            <input type="text" className="formcontrol price-input" value="red, XL" disabled />
                            <input type="text" className="formcontrol price-input-two" placeholder="Enter quantity"  />
                            <input type="text" className="formcontrol price-input-three" placeholder="Enter price"  />

                        </div>

                        <div className="price-quantity mb-15">
                            <input type="text" className="formcontrol price-input" value="blue, XL" disabled />
                            <input type="text" className="formcontrol price-input-two" placeholder="Enter quantity"  />
                            <input type="text" className="formcontrol price-input-three" placeholder="Enter price"  />

                        </div>

                        <div className="price-quantity mb-15">
                            <input type="text" className="formcontrol price-input" value="red, XL" disabled />
                            <input type="text" className="formcontrol price-input-two" placeholder="Enter quantity"  />
                            <input type="text" className="formcontrol price-input-three" placeholder="Enter price"  />

                        </div>
                    </Col>

                    
                </Row>

                <Divider />

                <Row className="inmt-15 inmb-10" >
                    <Col lg={10}>
                        <h6 className="price-heading">List this product</h6>
                    </Col>
                    <Col lg={2}>
                        <div className="switch">
                            <span>
                                <input type="checkbox" checked />
                                <span className={`slider round`}></span>
                                {/* <span className={`slider round ${disableSwitchButton ? 'disabled' : ''}`}></span> */}
                            </span>
                        </div>
                    </Col>
                </Row>

                <Divider />

                <Row className="inmt-15 inmb-10" >
                    <Col lg={10}>
                        <h6 className="price-heading">This product is taxable</h6>
                    </Col>
                    <Col lg={2}>
                        <div className="switch">
                            <span>
                                <input type="checkbox" checked />
                                <span className={`slider round`}></span>
                                {/* <span className={`slider round ${disableSwitchButton ? 'disabled' : ''}`}></span> */}
                            </span>
                        </div>
                    </Col>
                </Row>

                <Divider />

                <Row className="inmt-15">
                    <Col lg={10}>
                        <h6 className="price-heading">Allow customers to buy even when out of stock</h6>
                    </Col>
                    <Col lg={2}>
                        <div className="switch">
                            <span>
                                <input type="checkbox"/>
                                <span className={`slider round disabled `}></span>
                                {/* <span className={`slider round ${disableSwitchButton ? 'disabled' : ''}`}></span> */}
                            </span>
                        </div>
                    </Col>
                </Row>

                
            </form>
        </div>
    )
}

export default ProductVariants
