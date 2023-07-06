import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInput = ({ label, placeholder}) => {
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.emailLabel}>{label}</Text>
      </View>
      <TextInput
        style={styles.emailInput} 
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({

})

export default FormInput;
