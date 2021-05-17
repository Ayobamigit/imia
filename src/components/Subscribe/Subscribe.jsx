import React from 'react';
import './Subscribe.scss';

const Subscribe = (props) => {
    return (
        <div className="subscribe-wrapper">
            <div className="subscribe">
                <input type="text" className="subscribe-input" placeholder={props.placeholder}/>
                <button className="subscribe-button">
                    Subscribe
                </button>
            </div>
            
        </div>
    )
}

export default Subscribe
