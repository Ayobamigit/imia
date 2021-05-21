import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { CheckoutContext } from '../../../../pages/Buyer/CheckOut/CheckOut';

const AddCheckoutAddress = () => {
    const { state:{checked}, onChangeCheckBox } = useContext(CheckoutContext)
    return (
        <div>
            <form>
                <Row className="formgroup mb-15">
                    <Col lg={6}>
                        <label>First name</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="eg Oluwaseun" />
                        </div>
                    </Col>

                    <Col lg={6}>
                        <label>Last name (optional)</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="eg. Msilanga" />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup mb-15">
                    <Col lg={6}>
                        <label>Phone number (in case of delivery questions)</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="+234 000 000 0000" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <label>Street address</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="eg. 15a Idejo Street, Victoria Island" />
                        </div>
                    </Col>
                </Row>
                <Row className="formgroup mb-15">
                    <Col lg={8}>
                        <label>Apt, suite etc (optional)</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter additional address details" />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <label>City</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter city" />
                        </div>
                    </Col>
                </Row>

                <Row className="formgroup mb-15">
                    <Col lg={4}>
                        <label>Country</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Choose</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <label>State</label>
                        <div className="input-group">
                            <select className="formcontrol">
                                <option>Choose</option>
                                <option>Nigeria</option>
                                <option>Canada</option>
                            </select>
                        </div>
                        
                    </Col>
                    <Col lg={4}>
                        <label>Postal code</label>
                        <div className="input-group">
                            <input type="text" className="formcontrol" placeholder="Enter postal code" />
                        </div>
                    </Col>
                </Row>

                <div className="mt-21">
                    <label className="container">
                        <label className="FormCheck" >Save and use later</label>
                        <input type="checkbox" onChange={onChangeCheckBox} value={checked}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </form>
            
        </div>
    )
}

export default AddCheckoutAddress
