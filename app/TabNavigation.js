import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import ToDos from './components/ToDos';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    
      <Tab.Navigator 
        initialRouteName={Home}
        screenOptions={{headerShown: false, tabBarActiveTintColor: '#E76F51'}}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name='home' color={color} size={size} />
            )
          }}
        />

        <Tab.Screen 
          name="Todos" 
          component={ToDos} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name='list' color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    
  );
}