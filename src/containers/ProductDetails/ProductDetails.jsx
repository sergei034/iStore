import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';

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
              <FontAwesomeIcon icon={faHome} size="3x" className="cart-icon mr-4" />
            </Link>
            <FontAwesomeIcon icon={faHeart} size="3x" className="heart-icon mx-4" />
            <FontAwesomeIcon icon={faCartPlus} size="3x" className="cart-icon ml-4" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
