import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const LoginForm = () => {

  const userInfo = {
    username: '',
    password: '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().trim().min(3, 'Username must have at least 3 characters').required('Username is required'),
    password: Yup.string().trim().min(8, 'Password must be at least 8 characters').required('Password is required'),
  })

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit=''
      >
        {({ values, errors, touched}) => {

          const { username, password } = values;

          return <>
            <FormInput 
              value={username}
              label='Username'
              placeholder='Bigolas Dickolas'
            />
            <FormInput 
              value={password}
              label='Password'
              placeholder='********'
              autoCapitalize='none'
              secureTextEntry
            />
            <FormSubmitButton 
              title='Login'
            />
          </>
        }}

      </Formik>
    </FormContainer>
  );
}

const styles = StyleSheet.create({

})

export default LoginForm;
