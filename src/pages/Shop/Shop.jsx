import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
import './shop.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { Trash } from 'phosphor-react';

const Shop = () => {

    const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);


    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Nanos Natural Foods</h1>
                <p>Making the world healthier one item at a time</p>
            </div>
            <div className='products'>
                {PRODUCTS.map((product) =>
                (
                    <div key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <Product data={product} />
                        </Link>
                        <div className="addToCartContainer">
                            <button
                                className='addToCartBttn'
                                onClick={() => addToCart(product.id)}
                            >
                                {cartItems[product.id] > 0
                                    ? `Add To Cart (${cartItems[product.id]})`
                                    : 'Add To Cart'}
                            </button>
                            {cartItems[product.id] > 0 && (
                                <Trash size={25}
                                    color='red'
                                    className='TrashIcon'
                                    onClick={() => removeFromCart(product.id)}
                                />
                            )}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop; 
