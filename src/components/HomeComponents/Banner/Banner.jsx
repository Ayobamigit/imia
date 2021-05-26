import React from 'react';
import './Banner.scss';
import {ReactComponent as Slider} from '../../../assets/icons/slider.svg';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-info">
                <h3 className="banner-heading">Africa street fashion</h3>
                <p className="banner-text">This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text.</p>
                <div className="banner-button">
                    Shop now
                </div>
            </div>
            <div className="text-center banner-slide">
                <Slider />
            </div>
        </div>
    )
}

export default Banner
