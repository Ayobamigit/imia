import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as Help} from '../../../assets/icons/smallhelp.svg';
import {ReactComponent as Upload} from '../../../assets/icons/upload.svg';



const CreateAdvertisement = () => {
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Create advertisement</h6>
                <p className="sideDrawer-subheader">Enter the ad details below</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <label>Type of ad</label>
                            <div className="input-group">
                                <select className="formcontrol">
                                    <option>Choose type of ad</option>
                                    <option>Nigeria</option>
                                    <option>Canada</option>
                                </select>
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

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                            <h6 className="ad-text">
                            Upload your ad below. It should be *px by *px in size and not more than 250kb. JPG, PNG & GIFs accepted.
                            </h6>
                        </Col>
                    </Row>

                    <Row className="formgroup" style={{marginBottom:'12px'}}>
                        <Col>
                        <div className="dropzone dropzone-default dz-clickable " >
                            <div className="dropzone-icon">
                                <Upload />  
                            </div>
                            <div className="dropzone-msg dz-message needsclick">
                                <h3 className="dropzone-msg-title"><u><b>Click to upload</b></u> or drag and drop file here.</h3>
                            </div>
                            <input 
                                className="dropzon"
                                type="file" 
                            />
                        </div>
                        </Col>
                    </Row>
                    
                    <Divider />

                    <Row style={{marginTop:'-20px', marginBottom:'-20px'}}>

                        <Col lg={6}>
                            <h6 className="form-desc" style={{color: '#737373'}}>
                                Ad fee <Help className="ml-07" />
                            </h6>
                        </Col>

                        <Col lg={6}>
                            <h6 className="sideDrawer-header" style={{textAlign: 'right'}}>
                            $5.99
                            </h6>
                        </Col>
                    </Row>

                    <Divider />

                    
                    <Row style={{marginTop:'-17px'}}>
                        <div className="general-button full-width">
                        Pay and create ad
                        </div>
                    </Row>
                    
                    
                </form>
            </div>
        </div>
    )
}

export default CreateAdvertisement
