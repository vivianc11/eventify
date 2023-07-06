import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginHeader = ({ leftHeading, rightHeading, subHeading }) => {
  return (
    <>
      <View style={styles.textBox}>
        <Text style={styles.headerText}>
          {leftHeading}
        </Text>
        <Text style={styles.headerText}>{rightHeading}</Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  textBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba(231, 111, 81, 1)'
  },
  subHeading: {
    fontSize: 18,
    color: '#e9c46a',
    textAlign: 'center'
  }
})

export default LoginHeader;
