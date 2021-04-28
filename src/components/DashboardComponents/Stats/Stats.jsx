import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Stats.scss';

const Stats = () => {
    return (
        <div className="stats">
            <div className="stats-title">
                <h6 className="stats-title-header">Hey there, Mariam 👋🏻</h6>
                <Row>
                    <Col lg={10}>
                        <p className="stats-title-desc">Here’s how your business is doing today.</p>
                    </Col>

                    <Col lg={2}>
                        <select className="stat-formcontrol">
                            <option>Last 30 days</option>
                            <option>Last 20 days</option>
                            <option>Last 10 days</option>
                        </select>
                    </Col>
                </Row>
                
            </div>
            <div className="stats-chart">
fff
            </div>
        </div>
    )
}

export default Stats
