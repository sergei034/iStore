import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AppSpinner from '../../components/AppSpinner';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import { 
  getProductsRequest as getProductsRequestAction, 
  putToggleWishlistRequest as putToggleWishlistRequestAction, 
} from './actions';

const ProductList = ({ loading, products, getProductsRequest, putToggleWishlistRequest }) => {

  
  useEffect(() => {
    getProductsRequest()
  }, [getProductsRequest]);
  
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const productClickHandler = (product) => {
    setCurrentProduct(product);
    setShowProductDetailsModal(true);
  };

  const toggleWishListHandler = (product) => {
    // TODO: needs refactoring
    // TODO: page refreshing doesn't work!
    const updatedProduct = { ...product, inWishlist: !product?.inWishlist };
    putToggleWishlistRequest(product?.id, updatedProduct);
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {loading ? <AppSpinner  /> : (
          products?.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              clickHandler={productClickHandler}
              toggleWishListHandler={toggleWishListHandler}
              />)
              )
              )}
      </Row>
      {showProductDetailsModal && 
        <ProductDetailsModal 
        product={currentProduct} 
        showModal={showProductDetailsModal} 
        setShowModal={setShowProductDetailsModal} 
        toggleWishListHandler={toggleWishListHandler}
        />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  products: state.products.products,
});

const mapDispatchToProps = {
  getProductsRequest: getProductsRequestAction,
  putToggleWishlistRequest: putToggleWishlistRequestAction,
};

ProductList.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      category: PropTypes.string,
      subCategory: PropTypes.string,
      inStock: PropTypes.number,
      inWishlist: PropTypes.bool,
      name: PropTypes.string,
      memory: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.number,
      camera: PropTypes.string,
      cpu: PropTypes.string,
      display: PropTypes.number,
      image: PropTypes.string,
      size: PropTypes.string,
      weight: PropTypes.string,
    })),
  ]),
  getProductsRequest: PropTypes.func,
  putToggleWishlistRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
