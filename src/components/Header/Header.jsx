import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Header.scss';

const Header = (props) => {
    return (
        <div className="Header">
            <Row className="header-row">
                <Col lg={9} sm={6}>
                <h1 className="page-name">{props.title}</h1> 
                </Col>

                {
                    props.value ?
                    <Col lg={3} sm={6}>
                        <div className="header-button" onClick={props.click}>
                           {props.value}
                        </div>
                    </Col>
                    :
                    null
                }

                {
                    props.status ?
                    <Col lg={3} sm={6}>
                        <div className="header-control">
                            <div className="switch mr-08">
                                <span>
                                    <input type="checkbox" disabled readOnly />
                                    <span className={`slider round disabled `}></span>
                                    {/* <span className={`slider roucnd ${disableSwitchButton ? 'disabled' : ''}`}></span> */}

                                </span>
                            </div>
                            {props.status}
                        </div>
                    </Col>
                    :
                    null
                }

                
            

            </Row>
        </div>
    )
}

export default Header
