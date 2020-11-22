import React from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import AppSpinner from '../../components/AppSpinner';
import ProductCard from './components/ProductCard';

const ProductList = ({ loading, products }) => {

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {loading ? <AppSpinner  /> : (
          products.map(({ color, id, image, memory, name, price }) => (
            <ProductCard 
              color={color}
              id={id}
              image={image}
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
  // TODO: add action creators here
};

ProductList.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.arrayOf(PropTypes.shape({
      categoryId: PropTypes.number,
      camera: PropTypes.string,
      color: PropTypes.string,
      cpu: PropTypes.string,
      display: PropTypes.number,
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      memory: PropTypes.string,
      price: PropTypes.number,
      size: PropTypes.string,
      weight: PropTypes.string,
    })),
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
