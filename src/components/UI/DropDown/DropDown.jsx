import React from 'react';
import './DropDown.scss';

const DropDown = (props) => {
    return( 
        props.open ? 
            <div className={`Drop-down ${props.className ? props.className : ''}`}>
                {props.children} 
            </div>
        : 
        null
    )
}

export default DropDown
