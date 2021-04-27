import React from 'react'
import { NavLink } from 'react-router-dom';
import './SideBar.scss';
import {ReactComponent as Promotion} from '../../assets/icons/promotion.svg';
import {ReactComponent as Dash} from '../../assets/icons/dash.svg';
import {ReactComponent as Help} from '../../assets/icons/help.svg';
import {ReactComponent as Logout} from '../../assets/icons/logout.svg';
import {ReactComponent as Manage} from '../../assets/icons/manage.svg';
import {ReactComponent as Product} from '../../assets/icons/product.svg';
import {ReactComponent as Order} from '../../assets/icons/orders.svg';


const SideBar = (props) => {
    return (
        <div className="SideBar">
            <div className = "Logo">
                    <h1 className="logo-tag">IMIA</h1> 
                    <span className="inline-divider"></span> 
                    <h3 className="logo-text">Merchant</h3>
            </div>

            <div className="sidebar-divider"></div>

            <div className="navigation-section">
                <ul className={props.page === 'Dashboard' ? 'navigation-active' : 'navigation-item'}>
                    <li>
                     <Dash className={props.page === 'Dashboard' ? 'activeIcon' : 'sideIcons'} />
                     <NavLink to="/dashboard">Dashboard </NavLink> 
                    </li>
                </ul>
                
                <ul className={props.page === 'Products' ? 'navigation-active' : 'navigation-item'}>
                    <li>
                     <Product className={props.page === 'Products' ? 'activeIcon' : 'sideIcons'} />
                     <NavLink to="/products">Products </NavLink>
                    </li>
                </ul>

                <ul className={props.page === 'Orders' ? 'navigation-active' : 'navigation-item'}>
                    <li>
                    <Order className={props.page === 'Orders' ? 'activeIcon' : 'sideIcons'} />
                       <NavLink to="/orders">Orders</NavLink> 
                    </li>
                </ul>

                <ul className={props.page === 'Promotions' ? 'navigation-active' : 'navigation-item'}>
                    <li>
                        <Promotion className={props.page === 'Promotions' ? 'activeIcon' : 'sideIcons'}/>
                        <NavLink to = "promotions">Promotions</NavLink> 
                    </li>
                </ul>

                <ul className={props.page === 'Manage Account' ? 'navigation-active' : 'navigation-item'}>
                    <li>
                       <Manage className={props.page === 'Manage Account' ? 'activeIcon' : 'sideIcons'} />
                        <NavLink to="manage-account">Manage account</NavLink>
                    </li>
                </ul>

                <ul className="navigation-item">
                    <li>
                    <Help className="sideIcons" />
                        <NavLink to="/">Help Center</NavLink>
                    </li>
                </ul>
            </div>

            <div className="logout-section">
                <ul className="navigation-item">
                    <li>
                       <Logout className="sideIcons" />
                       <NavLink to="/login">Log out</NavLink> 
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default SideBar
