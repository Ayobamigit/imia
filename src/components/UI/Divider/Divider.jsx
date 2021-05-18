import React from 'react';
import './Divider.scss';

const Divider = (props) => {
    return (
        <div className={`divider ${props.className ? props.className : ''}`}></div>
    )
}

export default Divider
