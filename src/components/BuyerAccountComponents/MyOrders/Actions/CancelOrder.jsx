import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { BuyerOrdersContext } from '../MyOrders';
import Divider from '../../../UI/Divider/Divider'


const CancelOrder = () => {
    const {cancelClickAction} = useContext(BuyerOrdersContext);
    return (
        <div className="address-div">
            <div>
                <h6 className="sideDrawer-header">Cancel order</h6>
                <p className="sideDrawer-subheader">Are you sure you want to cancel? This action is permanent and cannot be reversed.</p>
            </div>
            <div>
                <form>
                    <Row className="formgroup">
                        <Col>
                            <label>Why are you cancelling?</label>
                            <div className="input-group">
                                <select className="formcontrol">
                                    <option>Select reason</option>
                                    <option>Nigeria</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <div className="danger-button full-width">
                        Yes, cancel
                        </div>
                    </Row>
                    
                <Divider /> 
                <div className="text-center inmt-15">
                    <p className="text-delete">Don’t want to cancel? <span className="bold cursor-pointer" onClick={cancelClickAction}><u>Go back safely </u> </span></p>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CancelOrder
