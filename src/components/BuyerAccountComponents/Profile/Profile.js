import React, {createContext, useState} from 'react';
import { Col, Row } from 'react-bootstrap'
import Divider from '../../UI/Divider/Divider'
import {ReactComponent as Icon} from '../../../assets/icons/user.svg';
import {ReactComponent as Edit} from '../../../assets/icons/shape.svg';
import {ReactComponent as EyeClosed} from '../../../assets/icons/eye.svg';
import {ReactComponent as EyeOpened} from '../../../assets/icons/eyeOpen.svg';
import DeleteProfile from './DeleteProfile';
import SideDrawer from '../../UI/SideDrawer/SideDrawer';

export const ProfileOrdersContext = createContext();

const Profile = () => {
    const [state, setState] = useState({
        isPasswordShown: true,
        isNewPasswordShown: true,
        deleteProfile: false
    })

    const togglePassword = () =>{
        setState(state=>({
            ...state,
            isPasswordShown  : !isPasswordShown
        }))
    }

    const toggleNewPassword = () =>{
        setState(state=>({
            ...state,
            isNewPasswordShown  : !isNewPasswordShown
        }))
    }

    const onClickDelete = () =>{
        setState(state=>({
            ...state,
            deleteProfile: true
        }))
    }

    const cancelDeleteProfile = () =>{
        setState(state=>({
            ...state,
            deleteProfile: false
        }))
    }

    const {isNewPasswordShown, isPasswordShown, deleteProfile} = state;    
    return (
        <ProfileOrdersContext.Provider value={{
            cancelDeleteProfile
        }}>
            <SideDrawer open ={deleteProfile} closed = {cancelDeleteProfile}>
                <DeleteProfile />
            </SideDrawer>

            <div>
                <h1 className="buyer-manage-profile">Profile</h1>
                <div className="profile-div mt-40">
                    <div className="profile-inner-div">
                        <div>
                            <div className="profile-img">
                                <Icon className="profile-icon" />
                            </div>

                            <div className="profile-edit">
                                <Edit className="edit-icon" />
                            </div>
                        </div>
                        
                        <form className="mt-25">
                            <Row className="formgroup">
                                <Col lg={6}>
                                    <label>First name</label>
                                    <div className="input-group">
                                        <input type="text" className="formcontrol" placeholder="eg. Anwuli" />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <label>Last name (optional)</label>
                                    <div className="input-group">
                                        <input type="text" className="formcontrol" placeholder="eg. Msilanga" />
                                    </div>
                                </Col>
                            </Row>

                            <Row className="formgroup">
                                <Col lg={6}>
                                    <label>Email address</label>
                                    <div className="input-group">
                                        <input type="text" className="formcontrol" placeholder="anwuli.mariam@gmail.com" />
                                    </div>
                                </Col>
                            </Row>

                            <button className="general-button" disabled>
                                Save Changes
                            </button>
                        </form>
                    </div>

                    <Divider />

                    <div className="profile-inner-div">
                        <div className="profile-change">
                            <h2 className="profile-change-heading">CHANGE PASSWORD</h2>
                        </div>
                        <form>
                            <Row className="formgroup">
                                <Col lg={6}>
                                    <label>Current Password</label>
                                    <div className="input-group">
                                        <input type={isPasswordShown ? "text" : "password"}  className="formcontrol" placeholder="Type your current password" />
                                        {
                                            isPasswordShown ?
                                            <EyeClosed className="profile-password-icon" onClick={togglePassword} />
                                            :
                                            <EyeOpened className="profile-password-icon" onClick={togglePassword} />
                                        }
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <label>New password</label>
                                    <div className="input-group">
                                        <input type={isNewPasswordShown ? "text" : "password"}  className="formcontrol" placeholder="Type your new password" />
                                        {
                                            isNewPasswordShown ?
                                            <EyeClosed className="profile-password-icon" onClick={toggleNewPassword} />
                                            :
                                            <EyeOpened className="profile-password-icon" onClick={toggleNewPassword} />
                                        }
                                    </div>
                                </Col>
                            </Row>

                            <button className="general-button" disabled>
                            Change Password
                            </button>
                        </form>
                    </div>

                    <Divider />

                    <div className="profile-delete">
                        <h4 className="profile-delete-text" onClick={onClickDelete}>Delete my account</h4>
                    </div>
                </div>
            </div>
        </ProfileOrdersContext.Provider>
    )
}

export default Profile
