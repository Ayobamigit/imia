import React from 'react';
import {ReactComponent as Divider} from '../../assets/icons/divider.svg';
import './SignInComponents.scss';


const SignInHeader = () => {
    return (
        <div className="signIn-header">
            <h3 className="header-heading"> IMIA <span className="header-divider"><Divider /></span> <span className="header-text">Merchant</span></h3>
        </div>
    )
}

export default SignInHeader
