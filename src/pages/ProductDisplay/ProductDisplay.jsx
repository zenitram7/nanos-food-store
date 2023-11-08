import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import '../ProductDisplay/productDisplay.css';
import { ShopContext } from '../../context/ShopContext';



const ProductDisplay = (props) => {
    const { addToCart, cartItems, removeFromCart, cartItemAmount } = useContext(ShopContext);

    const { productId } = useParams();

    const product = PRODUCTS.find((p) => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not available</div>
    }

    return (
        <div className='productDisplay-title'>
            <h1>{product.productName}</h1>
            <img src={product.productImage} alt='healthfood' />
            <div className='product-description'>
                <p>{product.productDescription}</p>
                <p><b>${product.price}</b></p>
                {cartItems[product.id] > 0 && (
                    <button className='removeFromCartBttn'
                        onClick={() => removeFromCart(product.id)}
                    >
                        Remove from Cart
                    </button>
                )}
                <button
                    className='addToCartBttnDisplay'
                    onClick={() => addToCart(product.id)}
                >
                    {cartItems[product.id] > 0
                        ? `Add To Cart (${cartItems[product.id]})`
                        : 'Add To Cart'}
                </button>
            </div>
        </div>
    )
}

export default ProductDisplay; 
