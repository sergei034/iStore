import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ProductCardIcons from '../../../../components/ProductCardIcons';
import { capitalize } from '../../ProductList.helpers';

// TODO: fix product image
import productImage from '../../../../assets/images/products/phones/iphone-12-pro-max.png';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, showModal, setShowModal, toggleWishListHandler }) => (
  <Container>
    <Modal 
      animation={false} 
      centered 
      dialogClassName="product-modal" 
      show={showModal} 
      onHide={() => setShowModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center">{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="my-5">
          <Col sm={6}>
            <img src={productImage} alt="product" className="img-fluid" />
          </Col>
          <Col sm={5} className="mr-5">
            {Object.keys(product?.description).map(descriptionItem => (
              <span key={descriptionItem} className="product-details d-block ml-5">
                {capitalize(descriptionItem)}: {product?.description[descriptionItem]}
              </span>
            ))}
            {/* TODO: move price to the description block */}
            <span className="product-details d-block ml-5">Price: ${product?.price?.toFixed(2)}</span>
            <ProductCardIcons product={product} toggleWishListHandler={toggleWishListHandler}/>
          </Col>
        </Row>
        </Modal.Body>
      </Modal>
  </Container>
);

ProductDetailsModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    subCategory: PropTypes.string,
    inStock: PropTypes.number,
    inWishlist: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.shape({
      color: PropTypes.string,
      cpu: PropTypes.string,
      display: PropTypes.string,
      memory: PropTypes.string,
    }),
  }).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  toggleWishListHandler: PropTypes.func.isRequired,
};

export default ProductDetailsModal;
