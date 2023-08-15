import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppForm from '../components/AppForm';
import ImageUpload from '../components/ImageUpload';
import UserProfile from '../components/UserProfile';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function SignNavigator() {

  const StackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={AppForm} name='AppForm' />
        <Stack.Screen component={ImageUpload} name='ImageUpload' />
        <Stack.Screen component={UserProfile} name='UserProfile' />
      </Stack.Navigator>
    )
  }
  return <StackNavigator />;
}

const styles = StyleSheet.create({})