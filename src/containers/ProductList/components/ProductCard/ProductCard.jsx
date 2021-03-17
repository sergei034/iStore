import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ProductCardIcons from '../../../../components/ProductCardIcons';
import './ProductCard.css';

const ProductCard = ({ 
    product, 
    productClickHandler, 
    wishlistIconClickHandler, 
    cartIconClickHandler 
  }) => (
  <div className="product-card" onClick={() => productClickHandler(product.id)}>
    <Card border="light">
      <Card.Img variant="top" src={product?.image} alt="product-image" className="pt-5" />
      <Card.Body>
        <Card.Title className="text-center">
          {`${product?.name} ${product?.description?.memory} ${product?.description?.color}`}
        </Card.Title>
        <Card.Subtitle className="mt-2 text-center text-muted">
          {`Price: $${product?.price.toFixed(2)}`}
        </Card.Subtitle>
        <ProductCardIcons 
          product={product} 
          wishlistIconClickHandler={wishlistIconClickHandler}
          cartIconClickHandler={cartIconClickHandler}
        />
      </Card.Body>
    </Card>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
      color: PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      inStock: PropTypes.number,
      name: PropTypes.string,
      memory: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  productClickHandler: PropTypes.func.isRequired,
  wishlistIconClickHandler: PropTypes.func.isRequired,
  cartIconClickHandler: PropTypes.func.isRequired,
};

export default ProductCard;
