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
        onSubmit={(values, formikActions) => {
          setTimeout(() => {
            console.log(values)
            formikActions.resetForm();
            formikActions.setSubmitting(false)
          }, 2000)
        }}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => {

          const { username, password } = values;

          return <>
            <FormInput 
              value={username}
              label='Username'
              error={touched.username && errors.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholder='Bigolas Dickolas'
            />
            <FormInput 
              value={password}
              label='Password'
              error={touched.password && errors.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder='********'
              autoCapitalize='none'
              secureTextEntry
            />
            <FormSubmitButton 
              submitting={isSubmitting}
              onPress={handleSubmit}
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
