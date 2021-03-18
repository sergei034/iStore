import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';

import './ProductCardIcons.css';

const ProductCardIcons = ({ 
  inWishlist, 
  product, 
  wishlistIconClickHandler, 
  cartIconClickHandler 
}) => (
  <div className="my-4 d-flex justify-content-between">
    {inWishlist ?
      <AiFillHeart size="3em" className="heart-icon ml-5" onClick={(e) => wishlistIconClickHandler(e, product)} /> :
      <AiOutlineHeart size="3em" className="heart-icon ml-5" onClick={(e) => wishlistIconClickHandler(e, product)} />}
    {product?.inStock ?
      // TODO: check if product is already in cart - show different icon
      <IoCartOutline size="3em" className="cart-icon mr-5" onClick={(e) => cartIconClickHandler(e, product)} /> :
      <div className="sold-out-label mr-5">Sold Out</div>}
  </div>
);

ProductCardIcons.propTypes = {
  product: PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      subCategory: PropTypes.string,
      inStock: PropTypes.number,
      inWishlist: PropTypes.bool,
      name: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      description: PropTypes.shape({
        color: PropTypes.string,
        cpu: PropTypes.string,
        display: PropTypes.string,
        memory: PropTypes.string,
      }),
    }).isRequired,
  wishlistIconClickHandler: PropTypes.func.isRequired,
};

export default ProductCardIcons;
