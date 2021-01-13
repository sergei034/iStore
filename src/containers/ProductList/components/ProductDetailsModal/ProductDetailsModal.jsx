import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

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

// TODO: Add PropTypes

export default ProductDetailsModal;
