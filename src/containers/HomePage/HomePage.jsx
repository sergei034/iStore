import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ProductsCarousel from './components/ProductsCarousel';
import TextContent from './components/TextContent';

const HomePage = () => {  
  return (
    <>
      <ProductsCarousel />
      <Container>
        <Row>
          <TextContent />
        </Row>
      </Container>
    </>
  )
};

export default HomePage;
