import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AppSpinner from '../../components/AppSpinner';
import ProductCard from './components/ProductCard';
import { getProductsRequest as getProductsRequestAction } from './actions';

const ProductList = ({ getProductsRequest, loading, products }) => {

  useEffect(() => {
    getProductsRequest()
  }, [getProductsRequest]);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {loading ? <AppSpinner  /> : (
          products?.map(({ color, id, image, inStock, inWishList, memory, name, price }) => (
            <ProductCard 
              color={color}
              id={id}
              image={image}
              inStock={inStock}
              inWishList={inWishList}
              key={id}
              memory={memory}
              name={name}
              price={price}
            />)
          )
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  loading: state.products.loading,
  products: state.products.products,
});

const mapDispatchToProps = {
  getProductsRequest: getProductsRequestAction,
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
      inWishList: PropTypes.bool,
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
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
