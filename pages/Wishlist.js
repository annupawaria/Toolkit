import React from 'react';
import { useSelector } from 'react-redux';
// import wishList from '../components/CartItem';
import WishlistItem from '../components/WishlistItem';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist || []);
    // Correct state
  console.log(wishlistItems)
  return (
    <div className="cart-container">
      <h2>Your Wishlist Items</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
        </div>
        {wishlistItems.map(({ productId, title, imageUrl, rating }) => (
          <WishlistItem
            key={productId}
            productId={productId}
            title={title}
            imageUrl={imageUrl}
            rating={rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
