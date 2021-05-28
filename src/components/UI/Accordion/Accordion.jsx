import React from 'react';
import Divider from '../Divider/Divider';
import './Accordion.scss';
import {ReactComponent as Minus} from '../../../assets/icons/minus.svg';
import {ReactComponent as Plus} from '../../../assets/icons/plus.svg';

const Accordion = (props) => {
    // let attachedClasses = ['SideDrawer' , 'Close']
    // if (props.show){
    //     attachedClasses = ['SideDrawer', 'Open']
    // }
    return (
        <div className="accordion-div">
            <div className="accordion-title" onClick={props.clicked}>
                <h5 className="accordion-title-text">{props.title}</h5>
                {
                    props.show ? 
                        <Minus className="accordion-icon" />
                    :
                        <Plus className="accordion-icon" />
                }
            </div>
            <Divider className="mt-24 mb-24" />
            {
                props.show ?
                    <div className="accordion-content">
                        {props.children}
                        <Divider className="mt-24 mb-24" />
                    </div>
                :
                null
            }
            
        </div>
    )
}

export default Accordion
