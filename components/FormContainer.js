import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const FormContainer = ({ children }) => {

  return (
    <KeyboardAwareScrollView style={styles.container}>
      {children}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
    flex: 1,
  }
})

export default FormContainer;
