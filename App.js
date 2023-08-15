import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppForm from './app/components/AppForm';
import ImageUpload from './app/components/ImageUpload';
import UserProfile from './app/components/UserProfile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './app/utils/DrawerNavigator';



export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})