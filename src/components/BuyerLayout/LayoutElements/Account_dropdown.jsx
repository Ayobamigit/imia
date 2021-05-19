import React from 'react';
import Divider from '../../UI/Divider/Divider';
import {ReactComponent as Orders} from '../../../assets/icons/box.svg';
import {ReactComponent as Profile} from '../../../assets/icons/user-circle.svg';
import {ReactComponent as Logout} from '../../../assets/icons/logout.svg';
import { NavLink, useHistory } from 'react-router-dom';

const Account_dropdown = () => {
    const history = useHistory();
    return (
        <div>
            <div className="account-dropdown-div">
                <ul className="dropdown-list">
                    <li onClick = {()=>history.push("/buyer-account/orders")}>
                        <Orders className="drop-icon" />
                        <NavLink to="#">View & track orders</NavLink>
                    </li>
                    <li onClick = {()=>history.push("/buyer-account/profile")}>
                        <Profile className="drop-icon" />
                        <NavLink to="#">My profile</NavLink>
                    </li>
                </ul>
            </div>
            <Divider className="no-margin" />
            <div>
                <ul className="dropdown-list">
                    <li className="account-dropdown-div">
                        <Logout className="drop-icon"/>
                        <NavLink to="#">Log out</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Account_dropdown
