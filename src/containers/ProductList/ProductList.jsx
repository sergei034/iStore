import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router';

import AppSpinner from '../../components/AppSpinner';
import ProductCard from './components/ProductCard';
import ProductDetailsModal from './components/ProductDetailsModal';
import { 
  getProductsRequest as getProductsRequestAction, 
  putToggleWishlistRequest as putToggleWishlistRequestAction, 
} from './actions';
import { filterProductList, findProductById } from './ProductList.helpers';

const ProductList = ({  
  loading, 
  products, 
  getProductsRequest, 
  putToggleWishlistRequest, 
}) => {

  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  // TODO: maybe currentCategory isn't needed anymore in state. Add pathname to localState and inside useEffect()
  const { category } = useParams();
  const { pathname } = useLocation();
  
  useEffect(() => {
    setCurrentCategory(category);
    getProductsRequest(currentCategory);
  }, [getProductsRequest, setCurrentCategory, category, currentCategory]);

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

  return (
    <Container>
      <Row className="justify-content-center">
        {loading ? <AppSpinner  /> : (
          filterProductList(products, currentCategory, pathname)
            ?.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                productClickHandler={productClickHandler}
                toggleWishListHandler={toggleWishListHandler}
              />)
          )
        )}
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
  getProductsRequest: PropTypes.func,
  putToggleWishlistRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
