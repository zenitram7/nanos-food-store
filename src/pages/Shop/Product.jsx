import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);


    const cartItemAmount = cartItems[id]
    return (
        <div className='product'>
            <img src={productImage}
                alt='healthfoods'
            />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Product
