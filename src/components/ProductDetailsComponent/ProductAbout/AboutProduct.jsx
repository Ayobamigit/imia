import React, { useState } from 'react'
import ProductSpec from './ProductSpec';
import './About.scss';
import Accordion from '../../UI/Accordion/Accordion';
import ProductDesc from './ProductDesc';

const AboutProduct = () => {
    const [state, setState] = useState({
        isDetailsActive: true,
        isSpecActive: true,
        isBoxActive: true,
        isWarActive: false,
    })

    const onShowSpec = () =>{
        setState(state=>({
            ...state,
            isSpecActive: !isSpecActive
        }))
    }

    const onShowDetails = () =>{
        setState(state=>({
            ...state,
            isDetailsActive: !isDetailsActive
        }))
    }

    const onShowBox = () =>{
        setState(state=>({
            ...state,
            isBoxActive: !isBoxActive
        }))
    }

    const onShowWarranty = () =>{
        setState(state=>({
            ...state,
            isWarActive: !isWarActive
        }))
    }

    const {isDetailsActive, isSpecActive, isBoxActive, isWarActive} = state
    return (
        <div className="about-product">
            <h1 className="buyer-manage-profile">About this item</h1>
            <div className="mt-40">
                <Accordion title="Product details" clicked={onShowDetails} show={isDetailsActive}>
                    <ProductDesc/>
                </Accordion>
                <Accordion title="Specifications" clicked={onShowSpec} show={isSpecActive}>
                    <ProductSpec />   
                    {/* <ProductDesc/> */}
                </Accordion>
                <Accordion title="What’s in the box" clicked={onShowBox} show={isBoxActive}>
                    <ProductDesc/>
                </Accordion>
                <Accordion title="Warranty" clicked={onShowWarranty} show={isWarActive}>
                    <ProductDesc/>
                </Accordion>
            </div>
           
        </div>
    )
}

export default AboutProduct
