import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import * as Progress from 'react-native-progress';

export default function UploadProgress({ process }) {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <Progress.Circle
        progress={process}
        width={200}
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