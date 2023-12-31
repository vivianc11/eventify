import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { useLogin } from './context/LoginProvider';
import AppLoader from './components/AppLoader';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={ImageUpload} name='ImageUpload' />
    </Stack.Navigator>
  )
}

export default function SignNavigator() {
  const { isLoggedIn, loginPending } = useLogin();
  return isLoggedIn ? 
    <>
    <DrawerNavigator /> 
    {loginPending ? <AppLoader /> : null}
    </>
    : <StackNavigator /> ;
}

const styles = StyleSheet.create({})