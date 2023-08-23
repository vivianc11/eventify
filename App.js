import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignNavigator from './app/SignNavigator';
import LoginProvider from './app/context/LoginProvider';



export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <SignNavigator />
      </NavigationContainer>
    </LoginProvider>
  )
}
