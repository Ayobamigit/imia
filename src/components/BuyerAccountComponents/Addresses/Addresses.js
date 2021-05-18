import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import Divider from '../../UI/Divider/Divider'
import SideDrawer from '../../UI/SideDrawer/SideDrawer'
import AddBuyerAddress from './AddBuyerAddress'

const Addresses = () => {
    const [state, setState] = useState({
        addAddress: false
    })

    const onClickAdd = () =>{
        setState(state=>({
            ...state,
            addAddress: true
        }))
    }

    const cancelAddAddress = () =>{
        setState(state=>({
            ...state,
            addAddress: false
        }))
    }

    const {addAddress} = state;
    return (
        <>
            <SideDrawer open ={addAddress} closed = {cancelAddAddress}>
                <AddBuyerAddress />
            </SideDrawer>
            <div>
                <h1 className="buyer-manage-profile">Addresses</h1>
                <div className="profile-div mt-40 pb-20">
                    <div className="address-inner-div">
                        <div className="transparent-button" onClick={onClickAdd}>
                            Add address
                        </div>
                    </div>
                    <Divider />
                    <div className="address-inner-div">
                        <Row style={{marginTop:'-30px', marginBottom:'-20px'}}>
                            <Col lg={10}>
                                <h6 className="bold">Anwuli Mariam +44 245 345 901</h6>
                                <p className="account-order-desc" style={{color: '#737373'}}>333 Fremont Street, San Francisco, CA 94105, United States.</p>
                            </Col>
                            <Col lg={1} className="text-end">
                                <p className="edit-remove"><u>Edit</u></p>   
                            </Col>
                            <Col lg={1} className="text-end">
                                <p className="edit-remove"><u>Remove</u></p>   
                            </Col>
                        </Row>
                    </div>
                    <Divider />
                    <div className="address-inner-div">
                        <Row style={{marginTop:'-30px'}}>
                            <Col lg={10}>
                                <h6 className="bold">Anwuli Mariam +234 814 927 4820</h6>
                                <p className="account-order-desc" style={{color: '#737373'}}>15a Idejo Street, Victoria Island, LA 100001, Nigeria.</p>
                            </Col>
                            <Col lg={1} className="text-end">
                                <p className="edit-remove"><u>Edit</u></p>   
                            </Col>
                            <Col lg={1} className="text-end">
                                <p className="edit-remove"><u>Remove</u></p>   
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addresses
