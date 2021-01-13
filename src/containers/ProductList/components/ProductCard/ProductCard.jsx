import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ProductCardIcons from '../../../../components/ProductCardIcons';
import './ProductCard.css';
// import img from '../../../../assets/images/products/phones/iphone-12-pro-max.png';

const ProductCard = ({ product, productClickHandler, toggleWishListHandler }) => {
  
  const img = require('../../../../assets/images/products/phones/iphone-12-pro-max.png');

  return (
    <div className="product-card" onClick={() => productClickHandler(product.id)}>
      <Card border="light">
        <Card.Img variant="top" src={img} alt="product-image" />
        <Card.Body>
          <Card.Title className="text-center">
            {`${product?.name} ${product?.description?.memory} ${product?.description?.color}`}
          </Card.Title>
          <Card.Subtitle className="mt-2 text-center text-muted">
            {`Price: $${product?.price.toFixed(2)}`}
          </Card.Subtitle>
          {/* TODO refactor e.stopPropagation() */}
          <ProductCardIcons product={product} toggleWishListHandler={toggleWishListHandler}/>
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
