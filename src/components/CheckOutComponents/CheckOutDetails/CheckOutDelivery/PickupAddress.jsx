import React from 'react';
import Divider from '../../../UI/Divider/Divider';

const PickupAddress = () => {
    return (
        <div className="saved-address">
            <div className="inner-saved-address">
                <label className="container-round">
                    <label className="FormCheck" >
                        <h6 className="bold">Main Office</h6>
                        <p className="account-order-desc mb-0">15a Idejo Street, Victoria Island, LA 100001, Nigeria · 2 - 3 days</p>
                    </label>
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                                    
            </div>

            <Divider className="mb-0 mt-0" />

            <div className="inner-saved-address">
                <label className="container-round">
                    <label className="FormCheck" >
                        <h6 className="bold">Package Pooling Station</h6>
                        <p className="account-order-desc mb-0">2 Deji Olamiju Street, Medina Estate, Gbagada, LA 100234, Nigeria · 2 - 3 days</p>
                    </label>
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>

    )
}

export default PickupAddress
