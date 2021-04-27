import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

const Modal = (props) => {
    return (
        <>
            <Backdrop show = {props.open} clicked = {props.modalClosed} />
            <div 
                className="Modal"
                style = {{
                    transform:props.open ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.open ? '1' :'0'
                }}
            >
                {props.children}
            </div>
        </>
    )
}

export default Modal
