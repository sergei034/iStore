import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';

import './ProductCardIcons.css';

const ProductCardIcons = ({ product, toggleWishListHandler }) => (
  <div className="my-4 d-flex justify-content-between">
    {product?.inWishlist ?
      <AiFillHeart size="3em" className="heart-icon ml-5" onClick={(e) => toggleWishListHandler(e, product)} /> :
      <AiOutlineHeart size="3em" className="heart-icon ml-5" onClick={(e) => toggleWishListHandler(e, product)} />}
    {product?.inStock ?
      <IoCartOutline size="3em" className="cart-icon mr-5" /> :
      <div className="sold-out-label mr-5">Sold Out</div>}
  </div>
);

export default ProductCardIcons;
