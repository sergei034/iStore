import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart, AiOutlineHome } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';

// TODO: fix product image
import productImage from '../../assets/images/products/phones/iphone-12-pro-max.png';

const ProductDetails = () => {
  return (
    <Container>
      <Row>
        <Col xs={10} md={6} className="mx-auto my-5 d-flex justify-content-end">
          <img src={productImage} alt="product" className="img-fluid" />
        </Col>
        <Col xs={10} md={6} className="mx-auto my-5">
          <h3 className="mt-3">Product: Name</h3>
          <p className="lead mt-3">Price: Price</p>
          <p className="lead mt-3">CPU: CPU</p>
          <p className="lead mt-3">Display: Display</p>
          <p className="lead mt-3">Dimensions: Dimensions</p>
          <p className="lead mt-3">Weight: Weight</p>
          <div className="my-4 d-flex justify-content-start">
            <Link to="/products">
              <AiOutlineHome size="3em" className="cart-icon mr-4" />
            </Link>
            <AiOutlineHeart size="3em" className="heart-icon mx-4" />
            <IoCartOutline size="3em" className="cart-icon ml-4" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
