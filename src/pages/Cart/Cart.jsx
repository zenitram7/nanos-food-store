import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';
import '../Cart/cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className='cartItems'>
                {PRODUCTS.map((Product) => {
                    if (cartItems[Product.id] !== 0) {
                        return (
                            <CartItem data={Product} />
                        )
                    }
                })}
            </div>
            <div className='checkout'>
                <p><b>Subtotal: </b> ${totalAmount}</p>
                <button onClick={() => navigate('/nanos-food-store')}> Continue Shopping</button>

                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart; 
