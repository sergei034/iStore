import React from 'react';
import { Link } from 'react-router-dom'; 
import { Carousel } from 'react-bootstrap';

// TODO: make reusable + needs refactoring
const ProductsCarousel = () => (
  <Carousel indicators={false}>
    <Carousel.Item>
      <Link to="/products/mac">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fmac-img.jpg?alt=media&token=7f174508-19c0-4b6b-8bf3-0344598880c1"
          alt="mac"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/iphone">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fiphone-img.jpg?alt=media&token=e6850ca4-4c6c-4d56-9cbe-ed82e53ad022"
          alt="iphone"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/ipad">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fipad-img.jpg?alt=media&token=1839bde9-a774-4a59-ab48-fa74e9278701"
          alt="ipad"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/apple-watch">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fwatch-img.jpg?alt=media&token=30d1ae29-4a9d-436b-88d9-67eeb9022efd"
          alt="apple-watch"
        />
      </Link>
    </Carousel.Item>
  </Carousel>
);

export default ProductsCarousel;
