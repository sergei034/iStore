import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Modal, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Notification from '../../components/Notification';
import AppSpinner from '../../components/AppSpinner';
import { 
  hideAuthModal as hideAuthModalAction,
  clearError as clearErrorAction,
  postLoginRequest as postLoginRequestAction,
  postSignUpRequest as postSignUpRequestAction,
} from './actions';

const AuthModal = ({ 
    error, 
    showAuth, 
    clearError, 
    hideAuthModal,
    loading, 
    postLoginRequest, 
    postSignUpRequest,
  }) => {
  
  const [ showSignUpForm, setShowSignUpForm ] = useState(false);

  const closeAuthModalHandler = () => {
    hideAuthModal();
    setShowSignUpForm(false);
  };

  const loginHandler = (authData) => {
    postLoginRequest(authData);
  };

  const signUpHandler = (authData) => {
    postSignUpRequest(authData);
  };

  return (
    <>
      {error && <Notification message={error} type="error" closeHandler={clearError} />}
      {showAuth && (
        <Container>
          <Modal 
            animation={false} 
            centered 
            show={showAuth} 
            onHide={closeAuthModalHandler}
          >
            <Modal.Header closeButton>
              <Modal.Title className="w-100 text-center">
                { showSignUpForm ? 'Sign Up' : 'Login' }
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="px-5">
              <Row className="justify-content-center">
                {loading && <AppSpinner />}
              </Row>
              {
                showSignUpForm 
                  ? <SignUpForm handleSignUp={signUpHandler} setShowSignUpForm={setShowSignUpForm} /> 
                  : <LoginForm handleLogin={loginHandler} setShowSignUpForm={setShowSignUpForm} /> 
              }
            </Modal.Body>
          </Modal>
        </Container>
      )}
    </>
  )
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
  isLoggedIn: state.auth.token !== null,
  loading: state.auth.loading,
  showAuth: state.auth.showAuthModal,
});

const mapDispatchToProps = {
  clearError: clearErrorAction,
  hideAuthModal: hideAuthModalAction,
  postLoginRequest: postLoginRequestAction,
  postSignUpRequest: postSignUpRequestAction,
};

AuthModal.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.string,
  ]),
  isLoggedIn: PropTypes.bool,
  showAuth: PropTypes.bool.isRequired,
  clearError: PropTypes.func.isRequired,
  hideAuthModal: PropTypes.func.isRequired,
};

AuthModal.defaultProps = {
  error: null,
  isLoggedIn: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
