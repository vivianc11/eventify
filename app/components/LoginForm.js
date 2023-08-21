import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import client from '../api/client';
import { useLogin } from '../context/LoginProvider';
import { signIn } from '../api/user';

const LoginForm = () => {
  const { setIsLoggedIn, setProfile, setLoginPending } = useLogin();

  const userInfo = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().min(8, 'Password must be at least 8 characters').required('Password is required'),
  })

  const login = async (values, formikActions) => {
    setLoginPending(true);
    try {
      setTimeout(async() => {
        const res = await signIn(values.email, values.password);
        // console.log(res.data);
  
        if (res.data.success) {
          formikActions.resetForm();
          formikActions.setSubmitting(false);
          setProfile(res.data.user)
          setIsLoggedIn(true);
        }
      },2000)
      setLoginPending(false);
    } catch (error) {
      console.log('error inside of login', error);
    }
  }

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={login}
      >
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => {

          const { email, password } = values;

          return <>
            <FormInput
              value={email}
              label='Email'
              error={touched.email && errors.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize='none'
              placeholder='bigolas@email.com'
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
