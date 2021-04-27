import React from 'react';
import { Col, Row } from 'react-bootstrap'

const Website = () => {
    return (
        <div className="info-div">
            <form>
                <Row className="formgroup">
                    <Col>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="www.storename.com" />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup">
                    <Col>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="twitter.com/username" />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup">
                    <Col>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="instagram.com/username" />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup">
                    <Col>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="facebook.com/username" />
                        </div>
                    </Col>
                </Row>

                <div className=" general-button ml-70">
                    Save details
                </div>
                
            </form>
        </div>
    )
}

export default Website
