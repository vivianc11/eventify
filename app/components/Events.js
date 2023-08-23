import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Events() {
  return (
    <View style={styles.container}>
      <Text>Add your events here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})