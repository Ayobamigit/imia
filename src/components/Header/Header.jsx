import React from 'react';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
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
            

            </Row>
        </div>
    )
}

export default Header
