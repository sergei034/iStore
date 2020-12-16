import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import PropTypes from 'prop-types';

// import img from '../../../../assets/images/products/phones/iphone-12-pro-max.png';
import './ProductCard.css';

const ProductCard = ({ color, id, image, inStock, inWishList, memory, name, price }) => {
  
  const img = require('../../../../assets/images/products/phones/iphone-12-pro-max.png');

  return (
    <div className="product-card">
      <Card border="light">
        <Card.Img variant="top" src={img} alt="product-image" />
        <Card.Body>
          <Card.Title className="text-center">
            {`${name} ${memory} ${color}`}
          </Card.Title>
          <Card.Subtitle className="mt-2 text-center text-muted">
            {`Price: $${price.toFixed(2)}`}
          </Card.Subtitle>
          <div className="my-4 d-flex justify-content-around">
            {inWishList ?
              <AiFillHeart size="3em" className="heart-icon" /> :
              <AiOutlineHeart size="3em" className="heart-icon" />}
            {inStock ?
              <IoCartOutline size="3em" className="cart-icon" /> :
              <span className="sold-out-label">Sold Out</span>}
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
