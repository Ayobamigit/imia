import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as Image} from '../../../assets/icons/Image.svg';
import {ReactComponent as SearchIcon} from '../../../assets/icons/greysearch.svg';
import {ReactComponent as Percent} from '../../../assets/icons/percentage.svg';


const CreateDiscount = () => {
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Discount for products</h6>
                <p className="sideDrawer-subheader">Enter the discount details below</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Name this discount</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="eg. Black Friday Sales" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Enter percentage discount</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="Enter percentage off" />
                                <Percent className="profile-password-icon"/>
                            </div>
                        </Col>
                    </Row>

                    <Row className="formgroup">
                        <Col>
                            <label>Duration</label>
                            <div className="input-group">
                                <input type="date" className="formcontrol" placeholder="Select end date" />
                            </div>
                        </Col>
                    </Row>

                    <div className="pt-02">
                        <h6 className="sideDrawer-header" style={{fontSize:'18px'}}>Choose products (1)</h6>
                    </div>

                    <Row className="formgroup">
                        <Col>
                            <SearchIcon className="profile-search-icon" />
                            <input type="text" className="formcontrol formcontrol-extra" placeholder="Enter product name to search" />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={2}>
                            <Image />
                        </Col>
                        <Col lg={10} style={{marginLeft :"-16px"}}>
                            <Row className="inmb-30">
                                <Col lg={8} style={{paddingRight:'40px'}}>
                                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                </Col>
                                <Col lg={2} style={{marginLeft :"55px"}}>
                                    <label className="checkbox checkbox-lg checkbox-primary">
                                        <input type="checkbox" checked/>
                                        <span></span>  
                                    </label>
                                </Col>
                            </Row>
                         <Divider />

                        </Col>
                    </Row>

                    <Row className="inmt-25">
                        <Col lg={2}>
                            <Image />
                        </Col>
                        <Col lg={10} style={{marginLeft :"-16px"}}>
                            <Row className="inmb-30">
                                <Col lg={8} style={{paddingRight:'40px'}}>
                                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                </Col>
                                <Col lg={2} style={{marginLeft :"55px"}}>
                                    <label className="checkbox checkbox-lg checkbox-primary">
                                        <input type="checkbox"/>
                                        <span></span>  
                                    </label>
                                </Col>
                            </Row>
                         <Divider />

                        </Col>
                    </Row>

                    <Row className="inmt-25">
                        <Col lg={2}>
                            <Image />
                        </Col>
                        <Col lg={10} style={{marginLeft :"-16px"}}>
                            <Row className="inmb-30">
                                <Col lg={8} style={{paddingRight:'40px'}}>
                                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                                </Col>
                                <Col lg={2} style={{marginLeft :"55px"}}>
                                    <label className="checkbox checkbox-lg checkbox-primary">
                                        <input type="checkbox"/>
                                        <span></span>  
                                    </label>
                                </Col>
                            </Row>
                         <Divider />

                        </Col>
                    </Row>
                    

                    
                    <Row style={{marginTop:'-17px'}}>
                        <div className="general-button full-width">
                        Save
                        </div>
                    </Row>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default CreateDiscount
