import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../assets/cart-icon.svg'
import wishlistIcon from '../assets/wishlist.png'
import { useSelector } from 'react-redux';

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  console.log('Cart Items:', cartItems);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          
          <div className="cart-items-count">{cartItems.reduce((acc,curr)=>acc+curr.quantity,0)}</div>
        </Link>
        {/* <Link className="cart-icon" to="/wishlist">
      
          <img src={wishlistIcon} alt="cart-icon"/>
          <div className="cart-items-count">{cartItems.reduce((acc,curr)=>acc+curr.quantity,0)}</div>
        </Link> */}
      </div>
    </header>
  )
}