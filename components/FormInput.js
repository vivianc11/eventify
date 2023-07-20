import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInput = (props) => {

    const { placeholder, label, error } = props;
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      </View>
      <TextInput
        {...props}
        style={styles.input} 
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      },
      label: {
        fontWeight: 'bold'
      },
      errorMessage: {
        color: 'red',
        fontSize: 16
      },
      input: {
        borderWidth: 1,
        borderColor: '#F4A261',
        height: 35,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 10,
        marginBottom: 20,
      }
})

export default FormInput;
