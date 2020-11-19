import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const AppSpinner = () => (
  <Spinner animation="border" className="align-self-center">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default AppSpinner;
