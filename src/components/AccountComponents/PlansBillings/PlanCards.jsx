import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Divider from '../../UI/Divider/Divider'
import {ReactComponent as Icon} from '../../../assets/icons/leave.svg';
import {ReactComponent as Check} from '../../../assets/icons/greencheck.svg';


const PlanCards = () => {
    return (
        <div className="plan-cards">
            <div className="plan-body">
                <Row className="mb-20">
                    <Col lg={6}>
                        <Icon />
                    </Col>
                    <Col lg={6}>
                        <div className="grey-button ml-19">
                            Default Plan
                        </div>
                    </Col>
                </Row>

                <h3 className="plan-title">Basic</h3>

                <h6  className="plan-details mt-14"><span><Check  className="plan-check" /></span>Free product placement for 2 years.</h6>
                <h6  className="plan-details mt-14"><span><Check  className="plan-check" /></span>*/month after 2 years.</h6>
                <h6  className="plan-details mt-14"><span><Check  className="plan-check" /></span>*% commission charged on total sales weekly.</h6>
            </div>
            <Divider />
            <div className="plan-div-footer">
                <h6 className="plan-footer">On this plan since 22 Jan 2021</h6>
            </div>
        </div>
    )
}

export default PlanCards
