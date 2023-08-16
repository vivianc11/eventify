import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

export default function AppLoader() {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView 
        source={require('../../assets/loading.json')}
        autoPlay 
        loop 
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
      backgroundColor: 'rgba(142, 154, 175, 0.3)'
    },
})