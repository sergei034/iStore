import React from 'react';
import { Spinner } from 'react-bootstrap';

const AppSpinner = () => (
  <Spinner animation="border" className="mt-5 mx-auto">
    <span className="sr-only">Loading...</span>
  </Spinner>
);

export default AppSpinner;
