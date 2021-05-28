import React from 'react'
// import { Col, div } from 'react-bootstrap'

const ProductSpec = () => {
    return (
        <>
        <div className="spec-row">
            <div lg={4} className="spec-col">
                <p className="product-text">Features</p> 
            </div>
            <div lg={8} className="spec-col">
                <p className="product-text">That being the case, there is really no point in your continuing to read them. After all, you have many other things you should be doing.</p>
            </div>
        </div>

        <div className="spec-row">
            <div lg={4} className="spec-col">
                <p className="product-text">Brand</p> 
            </div>

            <div lg={8} className="spec-col">
                <p className="product-text">Steflon</p>
            </div>
        </div>

        <div className="spec-row">
            <div lg={4} className="spec-col">
                <p className="product-text">Manufacturer</p> 
            </div>

            <div lg={8} className="spec-col">
                <p className="product-text">Here’s where it goes.</p>
            </div>
        </div>
        </>
    )
}

export default ProductSpec
