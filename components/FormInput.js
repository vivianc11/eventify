import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const FormInput = (props) => {

    const { placeholder, label } = props;
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
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      },
      emailLabel: {
        fontWeight: 'bold'
      },
      emailInput: {
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
