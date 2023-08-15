import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../components/Home';
import UserProfile from '../components/UserProfile';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
      </Drawer.Navigator>
    )
  }

  return <DrawerNavigator />
}

const styles = StyleSheet.create({})