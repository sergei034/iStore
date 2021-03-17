import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Form , Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { loginValidationSchema } from '../../validation-schemas';
import './LoginForm.css';

const LoginForm = ({ handleLogin, setShowSignUpForm }) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values) => handleLogin(values)}
    validationSchema={loginValidationSchema}
  >
    {({ values, touched, isValid, dirty, errors, handleChange, handleBlur, handleSubmit }) => (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              autoComplete="off" 
              type="email" 
              className={`${
                touched.email && errors.email ? 'input-state-danger' : ''
              }`}
              placeholder="Enter your email" 
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="input-validation-message">{msg}</div>}
            />
          </Form.Group> 

          <Form.Group controlId="password" className="mb-5">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              className={`${
                touched.password && errors.password ? 'input-state-danger' : ''
              }`}
              placeholder="Enter your password" 
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="input-validation-message">{msg}</div>}
            />
          </Form.Group> 

          <Button 
            type="submit"
            variant="dark" 
            className="w-100 mb-4"
            disabled={!(isValid && dirty)}
          >
            Login
          </Button>
        </Form>
        <div className="d-flex justify-content-center mb-4">
          <Button variant="link" onClick={() => setShowSignUpForm(true)}>Sign Up</Button>
        </div>
      </div>
    )}
  </Formik>
);

LoginForm.propTypes = {
  // handleLogin: PropTypes.func.isRequired,
  setShowSignUpForm: PropTypes.func.isRequired,
};

export default LoginForm;
