import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {ReactComponent as Icon} from '../../../assets/icons/close.svg';


const AddProductHeader = () => {
    const history = useHistory();
    return (
        <div className="addProduct-header">
            <Row>
                <Col>
                    <Icon onClick={()=>history.goBack()} style={{cursor:'pointer'}} />
                </Col>
                <Col className="text-center">
                    <h4 className="page-name">Product info</h4>
                </Col>
                <Col className="display-flex">
                    <h4 className="addProduct-delete-text">Delete product</h4>
                    <div className="general-button">
                        Save product
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AddProductHeader
