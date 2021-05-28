import React from 'react'
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout'
import AboutProduct from '../../../components/ProductDetailsComponent/ProductAbout/AboutProduct'
import ProductImage from '../../../components/ProductDetailsComponent/ProductImage/ProductImage'
import ProductReview from '../../../components/ProductDetailsComponent/ProductReview/ProductReview'
import ProductGrid from '../../../components/ProductGrid/ProductGridCopy'

const ProductDetails = () => {
    return (
        <BuyerLayout>
            <div className="wishlist">
                <ProductImage />
                <AboutProduct />
                <h1 className="buyer-manage-profile">You might also like</h1>
                <ProductGrid className="mb-0" />
                <ProductReview />
                <h1 className="buyer-manage-profile">Also by this seller</h1>
                <ProductGrid />
            </div>

        </BuyerLayout>
    )
}

export default ProductDetails
