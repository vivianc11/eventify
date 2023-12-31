import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('')

  const changeHandler = (value) => {
    setText(value)
  }

  return (
    <View>
      <TextInput
        style={styles.input} 
        placeholder='new todo...'
        onChangeText={changeHandler}
        ref={input => {this.textInput = input}}
      />
      <Button onPress={() => {submitHandler(text); this.textInput.clear()} } title='add todo' color='coral' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});