import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import PropTypes from 'prop-types';

// import img from '../../../../assets/images/products/phones/iphone-12-pro-max.png';
import './ProductCard.css';

const ProductCard = ({ product, clickHandler }) => {
  
  const img = require('../../../../assets/images/products/phones/iphone-12-pro-max.png');

  return (
    <div className="product-card" onClick={() => clickHandler(product)}>
      <Card border="light">
        <Card.Img variant="top" src={img} alt="product-image" />
        <Card.Body>
          <Card.Title className="text-center">
            {`${product?.name} ${product?.memory} ${product?.color}`}
          </Card.Title>
          <Card.Subtitle className="mt-2 text-center text-muted">
            {`Price: $${product?.price.toFixed(2)}`}
          </Card.Subtitle>
          <div className="my-4 d-flex justify-content-around" onClick={(e) => {e.stopPropagation()}}>
            {product?.inWishList ?
              <AiFillHeart size="3em" className="heart-icon" /> :
              <AiOutlineHeart size="3em" className="heart-icon" />}
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
  color: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  inStock: PropTypes.number,
  name: PropTypes.string,
  memory: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
