import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import AppForm from './components/AppForm';
import ImageUpload from './components/ImageUpload';
import UserProfile from './components/UserProfile';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={AppForm} name='AppForm' />
      <Stack.Screen component={ImageUpload} name='ImageUpload' />
      <Stack.Screen component={UserProfile} name='UserProfile' />
    </Stack.Navigator>
  )
}

export default function SignNavigator() {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigator /> : <StackNavigator /> ;
}

const styles = StyleSheet.create({})