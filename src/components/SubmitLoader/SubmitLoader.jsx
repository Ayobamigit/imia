import React from 'react';
import './SubmitLoader.scss';

const SubmitLoader = () => {
    return (
		<div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default SubmitLoader
