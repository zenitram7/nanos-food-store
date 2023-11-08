import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react'
import '../components/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32} />
                </Link>
                <div className='hamburger-icon'>
                    <a href='bar'>Shop</a>
                    <a href='bar'>Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 
