import React from 'react';
import './ProductGrid.scss';
import {ReactComponent as Shoe} from '../../assets/icons/snickers.svg';
import {ReactComponent as Star} from '../../assets/icons/star.svg';
import Fruit from '../../assets/img/fruit.png';
import Pan from '../../assets/img/pan.png';
import Watch from '../../assets/img/watch.png';
import { useHistory } from 'react-router-dom';
// import Ring from '../../assets/img/ring.png';
// import Brown from '../../assets/img/brown-shoe.png';
// import White from '../../assets/img/white.png';
// import Cream from '../../assets/img/cream.png';
// import Okro from '../../assets/img/okro.png';
// import Balm from '../../assets/img/balm.png';
// import Tissue from '../../assets/img/tissue.png';
// import Phone from '../../assets/img/phone.png';
// import Heels from '../../assets/img/heels.png';
// import Pawpaw from '../../assets/img/pawpaw.png';
// import Akara from '../../assets/img/akara.png';
// import Black from '../../assets/img/black.png';

const ProductGrid = (props) => {
    const history = useHistory();
    return (
        <div className={`grid-container ${props.className ? props.className : ''}`}>
            <div className="grid-item" onClick={()=>history.push('/product-details')}>
                <div className="product">
                    <Shoe />
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 
            <div className="grid-item" onClick={()=>history.push('/product-details')}>
                <div className="product">
                    {/* <Fruit /> */}
                    <img src={Fruit} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div>   
            <div className="grid-item" onClick={()=>history.push('/product-details')}>
                <div className="product">
                    {/* <Shoe /> */}
                    <img src={Pan} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 
            <div className="grid-item" onClick={()=>history.push('/product-details')}>
                <div className="product">
                    {/* <Shoe /> */}
                    <img src={Watch} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            {/* <div className="grid-item">
                <div className="product">
                    <img src={Cream} alt="Profile"/>

                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div>  */}

            {/* <div className="grid-item">
                <div className="product">
                    <img src={White} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Brown} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Ring} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Okro} alt="Profile"/>

                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Balm} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Tissue} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Phone} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Heels} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Pawpaw} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Akara} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div> 

            <div className="grid-item">
                <div className="product">
                    <img src={Black} alt="Profile"/>
                </div>

                <div className="name-price">
                    <p className="individual-text-summary">Here’s where the name of this product goes.</p>
                    <p className="price bold">$450.99</p>
                </div>

                <div className="ratings">
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <Star className="star star-active" />
                    <span className="quantity">(240)</span>
                </div>
            </div>  */}

        </div>
    )
}

export default ProductGrid
