import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import AppSpinner from '../../components/AppSpinner';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import NoContentMessage from '../../components/NoContentMessage';
import Notification from '../../components/Notification';
import { 
  clearError as clearErrorAction, 
  clearSuccess as clearSuccessAction, 
  getProductsRequest as getProductsRequestAction, 
  putToggleWishlistRequest as putToggleWishlistRequestAction, 
} from './actions';
import { filterProductList, findProductById } from './ProductList.helpers';
import { NO_PRODUCTS_MESSAGE } from './constants';

const ProductList = ({  
  error,
  loading, 
  products, 
  searchItem,
  success,
  successMessage,
  clearError, 
  clearSuccess, 
  getProductsRequest, 
  putToggleWishlistRequest, 
}) => {

  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const { category } = useParams();
  const { pathname } = useLocation();
  
  useEffect(() => {
    getProductsRequest();
  }, [getProductsRequest, category]);

  const productClickHandler = (productId) => {
    setCurrentProductId(productId);
    setShowProductDetailsModal(true);
  };

  const toggleWishListHandler = (e, product) => {
    // TODO: need refactoring (stopPropagation)
    e.stopPropagation();
    const updatedProduct = { ...product, inWishlist: !product?.inWishlist };
    putToggleWishlistRequest(product?.id, updatedProduct);
  };

  const getContentForRender = (products, currentCategory, pathname, searchItem) => {
    const filteredProducts = filterProductList(products, currentCategory, pathname, searchItem);
    return filteredProducts?.length ? 
      filteredProducts.map((product) => (
        <ProductCard 
          key={product.id}
          product={product}
          productClickHandler={productClickHandler}
          toggleWishListHandler={toggleWishListHandler}
        />)) :
      <NoContentMessage message={NO_PRODUCTS_MESSAGE} />
  };

  return (
    <Container className="my-5">
      {error && <Notification message={error} style='error' closeHandler={clearError} />}
      {success && <Notification message={successMessage} style='success' closeHandler={clearSuccess} />}
      <Row className="justify-content-center">
        {loading ? <AppSpinner  /> : getContentForRender(products, category, pathname, searchItem)}
      </Row>
      {showProductDetailsModal && 
        <ProductDetailsModal 
          product={findProductById(products, currentProductId)} 
          showModal={showProductDetailsModal} 
          setShowModal={setShowProductDetailsModal} 
          toggleWishListHandler={toggleWishListHandler}
        />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  error: state.products.error,
  loading: state.products.loading,
  products: state.products.products,
  searchItem: state.products.searchItem,
  success: state.products.success,
  successMessage: state.products.successMessage,
});

const mapDispatchToProps = {
  clearError: clearErrorAction,
  clearSuccess: clearSuccessAction,
  getProductsRequest: getProductsRequestAction,
  putToggleWishlistRequest: putToggleWishlistRequestAction,
};

ProductList.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
  ]),
  loading: PropTypes.bool.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.arrayOf(
      PropTypes.shape({
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
    })),
  ]),
  searchItem: PropTypes.string,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  clearError: PropTypes.func.isRequired,
  clearSuccess: PropTypes.func.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
  putToggleWishlistRequest: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  products: null,
  successMessage: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
