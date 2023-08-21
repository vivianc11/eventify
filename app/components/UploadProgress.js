import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Progress from 'react-native-progress';

export default function UploadProgress({ process }) {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Progress.Bar
        style={styles.bar}
        progress={process}
        width={240}
        height={10}
        borderRadius={8}
        showsText={true}
        color='rgb(231, 111, 81)'
        borderWidth={2}
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
    bar: {
      position: 'absolute',
      top: 503,
      left: 79,
    }
})