import React from 'react';
import {ReactComponent as Success} from '../../../../assets/icons/done.svg';


const ReportSuccess = () => {
    return (
        <div className="address-div">
            <div className="text-center mt-100">
                <Success />
            </div>

            <div className="text-center">
                <h6 className="empty-header">
                We’ve received your report    
                </h6>
            </div>
            
            <div className="text-center">
                <p className="empty-text">
                Apologies for any inconvenience caused. We hold our merchants to high standards. Be rest assured that we will look into this and get back to you over email.
                </p>
            </div>
        </div>
    )
}

export default ReportSuccess
