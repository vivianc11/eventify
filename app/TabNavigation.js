import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import ToDos from './components/ToDos';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Todos" component={ToDos} />
      </Tab.Navigator>
    
  );
}