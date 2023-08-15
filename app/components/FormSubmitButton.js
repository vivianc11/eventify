import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({title, onPress, submitting}) => {

  const backgroundColor = submitting ? 'rgba(244, 162, 97, 0.4)' : 'rgba(244, 162, 97, 1)'

  return (
    <TouchableOpacity onPress={submitting ? null : onPress} style={[styles.container, {backgroundColor}]}>
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
    color: 'white'
  }
})

export default FormSubmitButton;
