import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function UserProfile() {
  return (
    <View>
      <Text style={styles.container}>UserProfile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})