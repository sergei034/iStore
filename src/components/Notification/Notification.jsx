import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

import './Notification.css';

const Notification = ({ message, style, closeHandler }) => {
  return (
    <Toast className={`${style} notification`} show={true} onClose={closeHandler}>
      <Toast.Header className={`${style} notification-header`}>
        <strong className="mr-auto">{style}</strong>
      </Toast.Header>
      <Toast.Body className={`${style} notification-body`}>
        {message}
      </Toast.Body>
    </Toast>
  )
};

Notification.propTypes = {
  message: PropTypes.string.isRequired, 
  style: PropTypes.oneOf([
    'error',
    'success',
  ]).isRequired,
  closeHandler: PropTypes.func.isRequired,
};

// TODO: remove
Notification.defaultProps = {
  message: 'Done',
  style: 'success',
};

export default Notification;
