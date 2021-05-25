import React from 'react';
import BuyerLayout from '../../../components/BuyerLayout/BuyerLayout';
import ProductGrid from '../../../components/ProductGrid/ProductGrid';

const Wishlist = () => {
    return (
        <BuyerLayout>
            <div className="wishlist">
                <ProductGrid />
            </div>
        </BuyerLayout>
    )
}

export default Wishlist
