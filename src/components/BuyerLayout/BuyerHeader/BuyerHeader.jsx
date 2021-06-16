import React, {useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import Search from '../../Search/Search';
import './BuyerHeader.scss';
import {ReactComponent as User} from '../../../assets/icons/user-circle.svg';
import {ReactComponent as Down} from '../../../assets/icons/down.svg';
import {ReactComponent as WishList} from '../../../assets/icons/heart.svg';
import {ReactComponent as Basket} from '../../../assets/icons/orders.svg';
import { BuyerLayoutContext } from '../BuyerLayout';
import { Link, useHistory } from 'react-router-dom';


const BuyerHeader = () => {
    const {onClickDropDown, onOpenSideBar, authToken, state:{basketList}} = useContext(BuyerLayoutContext);
    const history = useHistory();
    return (
        <div className="buyer-header">
            <div className="primary-header">
                <h3 className="primary-header-text"><span className=" cursor-pointer"><Link to="vendor-log-in">Vendors portal</Link></span><span className="ml-35 cursor-pointer">Help</span> <span className="ml-35 cursor-pointer" onClick={()=>{onClickDropDown('country')}}>/ English/ USD <Down /></span></h3>
            </div>
            <div className="secondary-header">
                <Row>
                    <Col lg={1}>
                        <h1 className="secondary-header-title  cursor-pointer" onClick={()=>history.push('/home')}>
                            IMIA
                        </h1>
                    </Col>
                    <Col lg={7}>
                        <Search 
                            placeholder="Type product name to search..."
                            className="half-width"
                        />
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col lg={4} 
                                className="display-flex cursor-pointer" onClick={ authToken ? ()=>{onClickDropDown('account')} : ()=>{onOpenSideBar('sign-in')} }>
                                <User className="header-icon" />
                               
                                    {
                                        authToken ?
                                        <h4 className="primary-header-text secondary-header-margin"> Hi, Anwuli<Down /></h4>
                                        
                                        :
                                        <h4 className="primary-header-text secondary-header-margin">My account </h4>
                                    }
                            </Col>
                            <Col lg={4} className="display-flex">
                                <WishList />
                                <h4 className="primary-header-text secondary-header-margin  cursor-pointer"><Link to="wishlist">Wishlist</Link></h4>
                            </Col>
                            <Col lg={4} className="inml-25">
                                <button className="secondary-general-button"  onClick={ ()=>{onOpenSideBar('basket')} }>
                                    <h4 className="mb-0"><span><Basket className="header-icon" /></span><span className="primary-header-text secondary-header-margin ml-05">{ basketList.length ? basketList.length : '0'} Items</span></h4>
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default BuyerHeader
