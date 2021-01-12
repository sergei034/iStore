import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import PropTypes from 'prop-types';

// import img from '../../../../assets/images/products/phones/iphone-12-pro-max.png';
import './ProductCard.css';

const ProductCard = ({ product, productClickHandler, toggleWishListHandler }) => {
  
  const img = require('../../../../assets/images/products/phones/iphone-12-pro-max.png');

  return (
    <div className="product-card" onClick={() => productClickHandler(product.id)}>
      <Card border="light">
        <Card.Img variant="top" src={img} alt="product-image" />
        <Card.Body>
          <Card.Title className="text-center">
            {`${product?.name} ${product?.memory} ${product?.color}`}
          </Card.Title>
          <Card.Subtitle className="mt-2 text-center text-muted">
            {`Price: $${product?.price.toFixed(2)}`}
          </Card.Subtitle>
          {/* TODO refactor e.stopPropagation() */}
          <div className="my-4 d-flex justify-content-around" onClick={(e) => {e.stopPropagation()}}>
            {product?.inWishlist ?
              <AiFillHeart size="3em" className="heart-icon" onClick={() => toggleWishListHandler(product)} /> :
              <AiOutlineHeart size="3em" className="heart-icon" onClick={() => toggleWishListHandler(product)} />}
            {product?.inStock ?
              <IoCartOutline size="3em" className="cart-icon" /> :
              <div className="sold-out-label">Sold Out</div>}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    color: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    inStock: PropTypes.number,
    name: PropTypes.string,
    memory: PropTypes.string,
    price: PropTypes.number,
  }),
  productClickHandler: PropTypes.func,
  toggleWishListHandler: PropTypes.func,
};

export default ProductCard;
