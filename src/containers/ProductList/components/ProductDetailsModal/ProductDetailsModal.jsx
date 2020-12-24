import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoCartOutline, IoCart } from 'react-icons/io5';
import { Modal } from 'react-bootstrap';

// TODO: fix product image
import productImage from '../../../../assets/images/products/phones/iphone-12-pro-max.png';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, showModal, setShowModal }) => (
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
        <Row>
          <Col sm={7}>
            <img src={productImage} alt="product" className="img-fluid" />
          </Col>
          <Col sm={5}>
            <span className="product-details d-block">Color: {product?.color}</span>
            <span className="product-details d-block">Memory: {product?.memory}</span>
            <span className="product-details d-block">Display: {product?.display}"</span>
            <span className="product-details d-block">Camera: {product?.camera}</span>
            <span className="product-details d-block">Price: ${product?.price?.toFixed(2)}</span>
            <div className="mb-4">
              {product?.inWishlist ?
                <AiFillHeart size="3em" className="heart-icon mr-5" /> :
                <AiOutlineHeart size="3em" className="heart-icon mr-5" />}
              {product?.inStock ?
                <IoCartOutline size="3em" className="cart-icon" /> :
                <span className="sold-out-label">Sold Out</span>}
            </div>
          </Col>
        </Row>
        </Modal.Body>
      </Modal>
  </Container>
);

// TODO: Add PropTypes

export default ProductDetailsModal;
