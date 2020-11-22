import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import img from '../../../../assets/images/products/phones/iphone-12-pro-max.png'
import './ProductCard.css';

const ProductCard = ({ color, id, image, memory, name, price }) => (
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
          <FontAwesomeIcon icon={faHeart} size="3x" className="heart-icon" />
          <FontAwesomeIcon icon={faCartPlus} size="3x" className="cart-icon" />
        </div>
      </Card.Body>
    </Card>
  </div>
);

ProductCard.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  memory: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
