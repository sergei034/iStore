import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AppSpinner from '../../components/AppSpinner';

const ProductList = (props) => {
  const {
    loading,
    products,
  } = props;

  return (
    <Container className="h-100">
      <Row className="h-100 d-flex justify-content-center">
        {loading ? <AppSpinner /> : (
          {/* products.map(product => <ProductItem /> */}
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
  // TODO: add action creators here
};

ProductList.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.array, // TODO: replace with "PropTypes.arrayOf" and add PropTypes.shape({})
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
