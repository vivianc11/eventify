import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'black'
  }
})

export default FormSubmitButton;
