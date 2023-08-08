import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';

const LoginSelectorButton = ({ title, style, backgroundColor, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.button, style, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'black'
  },
  button: {
    height: 45,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default LoginSelectorButton;
