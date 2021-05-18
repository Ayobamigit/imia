import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Divider from '../../UI/Divider/Divider'
import { ProfileOrdersContext } from './Profile';

const DeleteProfile = () => {
    const {cancelDeleteProfile} = useContext(ProfileOrdersContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Delete account</h6>
                <p className="sideDrawer-subheader">Are you sure you want to delete your account? This action is permanent and cannot be reversed.</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup">
                        <Col>
                            <label>Why are you deleting your account?</label>
                            <div className="input-group">
                                <select className="formcontrol">
                                    <option>Select reason</option>
                                    <option>Nigeria</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <div className="danger-button full-width">
                        Yes, delete
                        </div>
                    </Row>
                    
                   <Divider /> 
                   <div className="text-center inmt-15">
                       <p className="text-delete">Don’t want to delete? <span className="bold cursor-pointer" onClick={cancelDeleteProfile}><u>Go back safely </u> </span></p>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default DeleteProfile
