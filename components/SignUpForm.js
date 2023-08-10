import React from 'react';
import { StyleSheet } from 'react-native';
import FormContainer from './FormContainer';
import { Formik } from 'formik';
import FormSubmitButton from './FormSubmitButton';
import FormInput from './FormInput';
import * as Yup from 'yup';

import client from '../api/client';


const SignUpForm = () => {

  const userInfo = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    fullname: Yup.string().trim().matches(/^[A-Z][a-z]+\s[a-zA-Z\s\.]+/, 'Invalid full name').required('Name is required'),
    username: Yup.string().trim().min(3, 'Username must have at least 3 characters').required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().equals([Yup.ref('password'), null], 'Passwords do not match')
  })

  const signUp = async (values, formikActions) => {
      const res = await client.post('/create-user', { ...values });
      console.log(res);
      formikActions.resetForm();
      formikActions.setSubmitting(false)
    };

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => {

          const { fullname, username, email, password, confirmPassword } = values;

          return <>
            <FormInput 
              value={fullname}
              label='Full Name'
              error={touched.fullname && errors.fullname}
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              placeholder='John Doe'
            />
            <FormInput 
              value={username}
              label='Username'
              error={touched.username && errors.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholder='Bigolas Dickolas'
            />
            <FormInput 
              value={email}
              label='Email'
              error={touched.email && errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder='example@email.com'
            />
            <FormInput 
              value={password}
              label='Password'
              error={touched.password && errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder='********'
            />
            <FormInput 
              value={confirmPassword}
              label='Confirm Password'
              error={touched.confirmPassword && errors.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              placeholder='********'
            />
            <FormSubmitButton 
              submitting={isSubmitting} 
              onPress={handleSubmit} 
              title='Sign Up' 
            />
          </>
        }}

      </Formik>
    </FormContainer>
  );
}

const styles = StyleSheet.create({

})

export default SignUpForm;
