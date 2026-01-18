import * as yup from 'yup';

export const signupSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Minimum 3 characters')
    .required('Name is required'),

  email: yup.string().email('Invalid email').required('Email is required'),

  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
});
