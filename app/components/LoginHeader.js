import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const LoginHeader = ({ leftHeading, rightHeading, subHeading, leftHeaderTranslateX, rightHeaderTranslateY, rightHeaderOpacity }) => {
  return (
    <>
      <View style={styles.textBox}>
        <Animated.Text style={[styles.headerText, {transform: [{translateX: leftHeaderTranslateX}]}]}>
          {leftHeading}
        </Animated.Text>
        <Animated.Text style={[styles.headerText, {opacity: rightHeaderOpacity, transform: [{translateY: rightHeaderTranslateY}]}]}>
          {rightHeading}
        </Animated.Text>
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
