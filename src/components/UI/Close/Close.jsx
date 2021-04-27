import React from 'react';
import './Close.scss';
import {ReactComponent as Icon} from '../../../assets/icons/close.svg';


const Close = (props) => {
    return props.show ? <div className={`close-sideDrawer ${props.className}`} onClick={props.clicked}><span className="close-icon"><Icon style={{marginTop: '1px'}} /></span></div> : null
}

export default Close
