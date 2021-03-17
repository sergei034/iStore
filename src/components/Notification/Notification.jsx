import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

import './Notification.css';

const Notification = ({ message, type, closeHandler }) => {
  return (
    <Toast className={`${type} notification`} show={true} onClose={closeHandler}>
      <Toast.Header className={`${type} notification-header`}>
        <strong className="mr-auto">{type}</strong>
      </Toast.Header>
      <Toast.Body className={`${type} notification-body`}>
        {message}
      </Toast.Body>
    </Toast>
  )
};

Notification.propTypes = {
  message: PropTypes.string.isRequired, 
  type: PropTypes.oneOf([
    'error',
    'success',
  ]).isRequired,
  closeHandler: PropTypes.func.isRequired,
};

// TODO: remove
Notification.defaultProps = {
  message: 'Done',
  type: 'success',
};

export default Notification;
