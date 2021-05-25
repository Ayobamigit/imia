import React, {useContext} from 'react';
import Divider from '../../../UI/Divider/Divider';
import { CheckoutContext } from '../../../../pages/Buyer/CheckOut/CheckOut';

const SavedAddress = () => {
    const { state:{addNewAddress}, onClickCheckBox } = useContext(CheckoutContext)
    return (
        <>
            <div className="saved-address">
                <div className="inner-saved-address">
                    <label className="container-round">
                        <label className="FormCheck" >
                            <h6 className="bold">Anwuli Mariam +234 814 927 4820</h6>
                            <p className="account-order-desc mb-0">15a Idejo Street, Victoria Island, LA 100001, Nigeria.</p>
                        </label>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                                        
                </div>

                <Divider className="mb-0 mt-0" />

                <div className="inner-saved-address">
                    <label className="container-round">
                        <label className="FormCheck" >
                            <h6 className="bold">Anwuli Mariam +234 814 927 4820</h6>
                            <p className="account-order-desc mb-0">333 Fremont Street, San Francisco, CA 94105, United States.</p>
                        </label>
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>

            <div className="mt-21">
                <label className="container">
                    <label className="FormCheck" >Use a new address</label>
                    <input type="checkbox" onChange={onClickCheckBox} value={addNewAddress}/>
                    <span className="checkmark"></span>
                </label>
            </div>
        </>
    )
}

export default SavedAddress
