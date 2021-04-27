import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Model} from '../../../../assets/icons/base.svg';
import {ReactComponent as Picture} from '../../../../assets/icons/picture.svg';
import {ReactComponent as Trash} from '../../../../assets/icons/trash.svg';
import {ReactComponent as Add} from '../../../../assets/icons/add.svg';


const ProductDetails = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Product name</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter product name (tip: make it descriptive)" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Category</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Select category</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Product details </label>
                        <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-bg" placeholder="Enter product details here. Share details that will give buyers all the information they need."/>
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Product images </label>
                        <div className="display-flex">
                            <div className="add-image mr-15">
                                <Add />
                            </div>

                            <div className="mr-15">
                                <Model />
                        
                                <div className="product-image-delete">
                                    <Trash />
                                </div>
                            </div>

                            <div className="mr-15">
                                <Picture />
                        
                                <div className="product-image-delete">
                                    <Trash />
                                </div>
                            </div>
                        </div>
                        
                    </Col>
                </Row>

            </form>
        </div>
    )
}

export default ProductDetails
