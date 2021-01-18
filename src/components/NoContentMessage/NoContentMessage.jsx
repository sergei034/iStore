import React from 'react';
import PropTypes from 'prop-types';

import './NoContentMessage.css';

const NoContentMessage = ({ message }) => (
  <div className="no-content-message text-center my-5">
    {message}
  </div>
);

NoContentMessage.propTypes = {
  message: PropTypes.string,
};

NoContentMessage.defaultProps = {
  message: 'Ups! Nothing to show...',
};

export default NoContentMessage;
