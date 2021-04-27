import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './Layout.scss';

const Layout = (props) => {
    return (
        <div id="wrapper">

            <div id="header">
                <Header
                    title={props.page}
                    value={props.value}
                    click={props.click}
                 />   
            </div>

            <div id="sidebar">
                <SideBar
                    page={props.page}
                />   
            </div>

            <div id="main">
                {props.children}
            </div>

        </div>
    )
}

export default Layout
