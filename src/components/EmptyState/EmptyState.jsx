import React from 'react';
import {ReactComponent as Icon} from '../../assets/icons/empty.svg';
import './EmptyState.scss';


const EmptyState = (props) => {
    return (
        <div className={`empty-state ${props.className ? props.className: ''}`}>
            <Icon />
            <div className="div-header">
                <h6 className="empty-header">{props.title}</h6>
            </div>
            
            <div className="div-text">
                <p className="empty-text">{props.text}</p>
            </div>

            <button className="general-button">
                {props.button}
            </button>
        </div>
    )
}

export default EmptyState
