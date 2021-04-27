import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as Trash} from '../../../../assets/icons/visibletrash.svg';


const AdditionalDetails = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col>
                        <label>Specifications</label>
                        <Row className="mb-10">
                            <Col lg={5}>
                                <div className="input-group">
                                    <input type="text" className="formcontrol" value="Brand" />
                                </div>
                            </Col>
                            <Col lg={6} className="inmg">
                                <div className="input-group">
                                    <input type="text" className="formcontrol" value="Gucci" />
                                </div>
                            </Col>
                            <Col lg={1} className="mt-05">
                                <Trash />
                            </Col>
                        </Row>

                        <Row className="mb-10">
                            <Col lg={5}>
                                <div className="input-group">
                                    <input type="text" className="formcontrol" placeholder="Enter title eg. brand"  />
                                </div>
                            </Col>
                            <Col lg={6} className="inmg">
                                <div className="input-group">
                                    <input type="text" className="formcontrol" placeholder="Enter description eg. Louis Vuitton" />
                                </div>
                            </Col>
                            <Col lg={1} className="mt-05">
                                <Trash />
                            </Col>
                        </Row>

                        <p className="add-spec"><u>Add another specification</u></p>
                       
                    </Col>
                    
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>What’s in the box? </label>
                        <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-sm" placeholder="Give a quick overview of what’s packed in the box with this item" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Weight</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter weight" />
                        </div>
                        
                    </Col>
                </Row>

                <Row className="formgroup">
                    <Col>
                        <label>Warranty details (optional) </label>
                        <div className="input-group">
                            <textarea type="text-area" className="formcontrol formcontrol-sm" placeholder="Explain the warranty on this product if it applies." />
                        </div>
                    </Col>
                </Row>

                
            </form>
        </div>
    )
}

export default AdditionalDetails
