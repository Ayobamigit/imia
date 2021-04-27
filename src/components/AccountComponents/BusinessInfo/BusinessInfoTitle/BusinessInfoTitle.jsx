import React from 'react';

const BusinessInfoTitle = (props) => {
    return (
        <div className="info-title">
           <h6 className="title-heading">{props.title}</h6> 
           <p className="title-desc">{props.description}</p>
        </div>
    )
}

export default BusinessInfoTitle
