import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Close from '../Close/Close';
import './SideDrawer.scss';


const SideDrawer = (props) => {
    let attachedClasses = ['SideDrawer' , 'Close']
    if (props.open){
        attachedClasses = ['SideDrawer', 'Open']
    }
    
    return (
        <>
            <Backdrop show = {props.open} clicked = {props.closed} />

            <div>
                <Close show = {props.open} clicked = {props.closed} className="close-side"/>

                <div className = {attachedClasses.join(' ')}>
                    {props.children}
                </div>
            </div>

            
        </>
    )
}

export default SideDrawer
