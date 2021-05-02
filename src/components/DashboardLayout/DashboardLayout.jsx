import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import './DashLayout.scss';

const DashboardLayout = (props) => {
    return (
        <div id="wrapper">

            <div id="header">
                <Header
                    title={props.page}
                    status={props.status}
                 />   
            </div>

            <div id="sidebar">
                <SideBar
                    page={props.page}
                />   
            </div>

            <div id="dashmain">
                {props.children}
            </div>

        </div>
    )
}

export default DashboardLayout
