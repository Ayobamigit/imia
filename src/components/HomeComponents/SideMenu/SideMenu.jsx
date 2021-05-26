import React from 'react';
import './SideMenu.scss';
import {ReactComponent as Face} from '../../../assets/icons/face.svg';
import {ReactComponent as Package} from '../../../assets/icons/package.svg';
import {ReactComponent as Hanger} from '../../../assets/icons/hanger.svg';
import {ReactComponent as Beauty} from '../../../assets/icons/beauty.svg';
import {ReactComponent as Chair} from '../../../assets/icons/chair.svg';
import {ReactComponent as Dish} from '../../../assets/icons/dish.svg';
import {ReactComponent as Book} from '../../../assets/icons/book.svg';
import {ReactComponent as Gift} from '../../../assets/icons/gift.svg';


const SideMenu = () => {
    return (
        <div className="side-menu">
            <div>
                <h5 className="sidemenu-heading-text">SHOP BY DEPARTMENT</h5>
            </div>

            <div className="side-navigation">
                <ul className="sidemenu-list">
                    <li><Hanger className="side-navigation-icon" /> Fashion</li>
                    <li><Beauty className="side-navigation-icon" />Bath & Beauty</li>
                    <li><Chair className="side-navigation-icon" />Home & Furnishings</li>
                    <li><Dish className="side-navigation-icon" />Food & Grocery</li>
                    <li><Book className="side-navigation-icon" />Books</li>
                    <li><Gift className="side-navigation-icon" />Gifts & Gift sets</li>
                    <li><Face className="side-navigation-icon" />Baby and children</li>
                    <li><Package className="side-navigation-icon" />Commodities</li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu
