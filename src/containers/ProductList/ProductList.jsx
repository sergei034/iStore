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
import { showAuthModal as showAuthModalAction } from '../AuthModal/actions';
import { filterProductList, findProductById, updateWishlist } from './ProductList.helpers';
import { NO_PRODUCTS_MESSAGE } from './constants';

const ProductList = ({  
  isLoggedIn,
  error,
  loading, 
  products, 
  searchItem,
  successMessage,
  token,
  userId,
  wishlist,
  showAuthModal,
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
    getProductsRequest(userId, token);
  }, [getProductsRequest, category, userId, token]);

  const productClickHandler = (productId) => {
    setCurrentProductId(productId);
    setShowProductDetailsModal(true);
  };

  const wishlistIconClickHandler = (e, product) => {
    e.stopPropagation();
    if (isLoggedIn) {
      const updatedWishlist = updateWishlist(wishlist, product.id);
      putToggleWishlistRequest(updatedWishlist, product, userId, token);
    } else {
      showAuthModal();
    }
  };

  const cartIconClickHandler = (e, product) => {
    // TODO: need refactoring (stopPropagation)
    e.stopPropagation();
    if (isLoggedIn) {
      // TODO: decide whether add productId & qty or the whole product's object to the cart array?
    } else {
      showAuthModal();
    }
  };

  const getContentForRender = (products, wishlist, currentCategory, pathname, searchItem) => {
    const filteredProducts = filterProductList(products, wishlist, currentCategory, pathname, searchItem); 
    return filteredProducts?.length 
      ? filteredProducts.map((product) => (
          <ProductCard 
            key={product.id}
            inWishlist={wishlist.includes(product.id)}
            product={product}
            productClickHandler={productClickHandler}
            wishlistIconClickHandler={wishlistIconClickHandler}
            cartIconClickHandler={cartIconClickHandler}
          />)) 
      : <NoContentMessage message={NO_PRODUCTS_MESSAGE} />
  };

  return (
    <Container className="my-5">
      {error && <Notification message={error} type="error" closeHandler={clearError} />}
      {successMessage && <Notification message={successMessage} type="success" closeHandler={clearSuccess} />}
      <Row className="justify-content-center">
        {loading ? <AppSpinner  /> : getContentForRender(products, wishlist, category, pathname, searchItem)}
      </Row>
      {showProductDetailsModal && 
        <ProductDetailsModal 
          product={findProductById(products, currentProductId)} 
          showModal={showProductDetailsModal} 
          setShowModal={setShowProductDetailsModal} 
          inWishlist={wishlist.includes(currentProductId)}
          wishlistIconClickHandler={wishlistIconClickHandler}
          cartIconClickHandler={cartIconClickHandler}
        />}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.token !== null,
  error: state.products.error,
  loading: state.products.loading,
  products: state.products.products,
  searchItem: state.products.searchItem,
  successMessage: state.products.successMessage,
  token: state.auth.token,
  userId: state.auth.userId,
  wishlist: state.products.wishlist,
});

const mapDispatchToProps = {
  showAuthModal: showAuthModalAction,
  clearError: clearErrorAction,
  clearSuccess: clearSuccessAction,
  getProductsRequest: getProductsRequestAction,
  putToggleWishlistRequest: putToggleWishlistRequestAction,
};

ProductList.propTypes = {
  isLoggedIn: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string,
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
  successMessage: PropTypes.string,
  token: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string,
  ]),
  userId: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string,
  ]),
  wishlist: PropTypes.array,
  clearError: PropTypes.func.isRequired,
  clearSuccess: PropTypes.func.isRequired,
  getProductsRequest: PropTypes.func.isRequired,
  putToggleWishlistRequest: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  isLoggedIn: false,
  products: null,
  successMessage: '',
  userId: null,
  wishlist: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
