import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Divider from '../../UI/Divider/Divider'
// import Modal from '../../UI/Modal/Modal'
import SideDrawer from '../../UI/SideDrawer/SideDrawer'
import About from './About/About'
import Address from './Address/Address'
import AddAddress from './Address/AddAddress'
import BusinessInfoTitle from './BusinessInfoTitle/BusinessInfoTitle'
import PayoutBank from './PayoutBank/PayoutBank'
import Website from './Website/Website'

const BusinessInfo = () => {
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
            <AddAddress />
        </SideDrawer>

        <Container className="mt-40">

            {/* About Section */}
            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="About your business"
                        description="Enter your business details"
                    />
                </Col>
                <Col lg={8}>
                    <About/>
                </Col>
            </Row>

            {/* End of about section */}

            <Divider />

            {/* Verification Section */}
            <Row>
                <Col lg={6}>
                    <BusinessInfoTitle
                        title="Verification"
                        description="Upload verification document"
                    />
                </Col>
                <Col lg={6}></Col>
            </Row>

            {/* End of Verification section */}

            <Divider />

            {/* Payout bank Section */}
            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Payout bank account"
                        description="Enter your account details"
                    />
                </Col>
                <Col lg={8}>
                    <PayoutBank />
                </Col>
            </Row>

            {/* End of payout section */}

            <Divider />

            {/* Address Section */}
            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Address"
                        description="Enter your business address"
                    />
                </Col>
                <Col lg={8}>
                    <Address 
                        onClickAdd={onClickAdd}
                    />
                </Col>
            </Row>

            {/* End of Address section */}

            <Divider />

            {/* Website and social media Section */}
            <Row>
                <Col lg={4}>
                    <BusinessInfoTitle
                        title="Website and social media"
                        description="Add links to your website and social profiles"
                    />
                </Col>
                <Col lg={8}>
                    <Website />
                </Col>
            </Row>

            {/* End of about section */}
        </Container>
        </>
    )
}

export default BusinessInfo
