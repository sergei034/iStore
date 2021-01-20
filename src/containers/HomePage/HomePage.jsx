import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ProductsCarousel from './components/ProductsCarousel';
import TextContent from './components/TextContent';

const HomePage = () => {

  const carouselItems = [
    {
      category: 'mac',
      src: 'https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fmac-img.jpg?alt=media&token=7f174508-19c0-4b6b-8bf3-0344598880c1',
    },
    {
      category: 'iphone',
      src: 'https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fiphone-img.jpg?alt=media&token=e6850ca4-4c6c-4d56-9cbe-ed82e53ad022',
    },
    {
      category: 'ipad',
      src: 'https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fipad-img.jpg?alt=media&token=1839bde9-a774-4a59-ab48-fa74e9278701',
    },
    {
      category: 'apple-watch',
      src: 'https://firebasestorage.googleapis.com/v0/b/istore-react.appspot.com/o/homepage%2Fcarousel%2Fwatch-img.jpg?alt=media&token=30d1ae29-4a9d-436b-88d9-67eeb9022efd',
    },
  ];

  return (
    <>
      <ProductsCarousel carouselItems={carouselItems} />
      <Container>
        <Row>
          <TextContent />
        </Row>
      </Container>
    </>
  )
};

export default HomePage;
