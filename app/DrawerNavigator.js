import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Home from './components/Home';
import UserProfile from './components/UserProfile';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
  return (
    <View style={styles.drawerContentContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeaderContainer}>
          <View style={styles.drawerHeader}>
            <Text style={styles.fullNameText}>Full Name</Text>
            <Text style={styles.usernameText}>Username</Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dutf462zc/image/upload/v1692120598/64d55e9bcdf66d02d47ff28e_profile.jpg' }}
            style={styles.profileImage}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logout}>
        <Text>Log Out</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        © 2023 Eventify
      </Text>
    </View>
  )
}

export default function DrawerNavigator() {

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: {backgroundColor: 'transparent'},
          headerTitle: ''
        }}
        >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="UserProfile" component={UserProfile} />
      </Drawer.Navigator>
    )
  }

  return <DrawerNavigator />
}

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1
  },
  drawerHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(244, 162, 97, .7)',
    marginBottom: 18,
  },
  drawerHeader: {

  },
  fullNameText:{
    fontSize: 22
  },
  usernameText:{

  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  logout: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(233, 196, 106, .5)',
    padding: 18
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    right: 85
  }
})