import React from 'react';
import { Link } from 'react-router-dom'; 
import { Carousel } from 'react-bootstrap';

const ProductsCarousel = () => {
  // TODO: make reusable + needs refactoring

  // TODO: fix pictures
  const mac = require('../../../../assets/images/homepage/mac.jpg');
  const iphone = require('../../../../assets/images/homepage/iphone.jpg');
  const ipad = require('../../../../assets/images/homepage/ipad.jpg');
  const watch = require('../../../../assets/images/homepage/watch.jpg');

  return (
    <Carousel indicators={false}>
      <Carousel.Item>
        <Link to="/products/mac">
          <img
            className="d-block w-100"
            src={mac}
            alt="mac"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/products/iphone">
          <img
            className="d-block w-100"
            src={iphone}
            alt="iphone"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/products/ipad">
          <img
            className="d-block w-100"
            src={ipad}
            alt="ipad"
          />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/products/apple-watch">
          <img
            className="d-block w-100"
            src={watch}
            alt="apple-watch"
          />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductsCarousel;
