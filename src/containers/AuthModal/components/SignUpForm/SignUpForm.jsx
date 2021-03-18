import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Form , Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

import { signUpValidationSchema } from '../../validation-schemas';
import './SignUpForm.css';

const SignUpForm = ({ handleSignUp, setShowSignUpForm }) => (
  <Formik
    initialValues={{ email: '', password: '', confirmPassword: '' }}
    onSubmit={(values) => handleSignUp(values)}
    validationSchema={signUpValidationSchema}
  >
    {({ values, touched, isValid, dirty, errors, handleChange, handleBlur, handleSubmit }) => (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email" className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              autoFocus
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

          <Form.Group controlId="password" className="mb-4">
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

          <Form.Group controlId="confirmPassword" className="mb-5">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              className={`${
                touched.confirmPassword && errors.confirmPassword ? 'input-state-danger' : ''
              }`}
              placeholder="Enter your password again" 
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              name="confirmPassword"
              render={(msg) => <div className="input-validation-message">{msg}</div>}
            />
          </Form.Group> 

          <Button 
            type="submit"
            variant="dark" 
            className="w-100 mb-4"
            disabled={!(isValid && dirty)}
          >
            Sign Up
          </Button>
        </Form>
        <div className="d-flex justify-content-center mb-4">
          <Button variant="link" onClick={() => setShowSignUpForm(false)}>Login</Button>
        </div>
      </div>
    )}
  </Formik>
);

SignUpForm.propTypes = {
  // handleSignUp: PropTypes.func.isRequired,
  setShowSignUpForm: PropTypes.func.isRequired,
};

export default SignUpForm;
