import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .max(50, 'Email should contain 150 characters or fewer')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 symbols')
    .max(50, 'Too long password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])/,
      "Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special symbol"
    )
    .required('Password is required'),
});

const knownPasswords = [
  '12345678',
  '11111111',
  'password',
  'qwerty123',
  'zxcvbn123',
];

export const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .max(50, 'Email should contain 150 characters or fewer')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 symbols')
    .notOneOf([...knownPasswords], 'Your password is weak')
    .max(50, 'Too long password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])/,
      "Must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special symbol"
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Your passwords should match')
    .required('Please confirm the password'),
});
