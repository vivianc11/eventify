import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const LoginSelectorButton = ({title}) => {
  return (
    <TouchableWithoutFeedback>
        <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
        </View>
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
