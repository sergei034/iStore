import React from 'react';
import { Link } from 'react-router-dom'; 
import { Carousel } from 'react-bootstrap';

// TODO: needs refactoring (image loading)

const ProductsCarousel = ({ carouselItems }) => (
  <Carousel indicators={false}>
    {carouselItems.map(carouselItem => (
      <Carousel.Item key={carouselItem?.category}>
        <Link to={`/products/${carouselItem?.category}`}>
          <img
            className="d-block w-100"
            src={carouselItem?.src}
            alt={carouselItem?.category}
          />
        </Link>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default ProductsCarousel;
