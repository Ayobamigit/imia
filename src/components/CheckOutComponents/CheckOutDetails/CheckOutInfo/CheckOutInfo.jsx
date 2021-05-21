import React, { useContext } from 'react';
import { CheckoutContext } from '../../../../pages/Buyer/CheckOut/CheckOut';

const CheckOutInfo = () => {
    const { authToken } = useContext(CheckoutContext)
    return (
        <div className="mt-30">
            <h6 className="checkout-title">Your information</h6>
            {
                !authToken ?
                    <p className="checkout-desc">
                        <u className="bold text-dark">Log in</u> or <u className="bold text-dark">Sign up</u>  to use your saved details and checkout faster. Alternatively, just enter your email address to checkout as a guest. 
                    </p>
                :
                null
            }
            <form>
                {
                    authToken ?
                        <div className="mt-15" >    
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder={`Hi, ${'Anwuli'}. You’re logged in.`} disabled />
                                <p className="inline-input inline-input-info">anwuli.mariam@gmail.com</p>
                            </div>
                        </div>
                    :
                        <div className="formgroup" >
                            <label>Email address</label>
                            <div className="input-group">
                                <input type="text" className="formcontrol" placeholder="eg. anwuli@gmail.com" />
                            </div>
                        </div>
                }
                

                
            </form>
        </div>
    )
}

export default CheckOutInfo
