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
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fmac.jpg?alt=media&token=b6deb532-26fd-4006-a7b8-e60398927207"
          alt="mac"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/iphone">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fiphone.jpg?alt=media&token=da4dc3b6-3b58-4623-a52a-e5c851594d99"
          alt="iphone"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/ipad">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fipad.jpg?alt=media&token=28b7ed4b-1d8d-4bb3-8d4a-a4af6c0d7dec"
          alt="ipad"
        />
      </Link>
    </Carousel.Item>

    <Carousel.Item>
      <Link to="/products/apple-watch">
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fwatch.jpg?alt=media&token=3e7e467f-4f13-499f-9c6d-85a5c4262208"
          alt="apple-watch"
        />
      </Link>
    </Carousel.Item>
  </Carousel>
);

export default ProductsCarousel;
