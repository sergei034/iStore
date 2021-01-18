import React from 'react';

import './NoContentMessage.css';

const NoContentMessage = ({ message }) => (
  <div className="no-content-message text-center my-5">
    {message}
  </div>
);

export default NoContentMessage;
