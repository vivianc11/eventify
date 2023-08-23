import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function ToDos() {
  const [todos, setTodos] = useState([
    { key: '1', text: 'Buy coffee' },
    { key: '2', text: 'Play with Philly' },
    { key: '3', text: 'Mess with Erick' },
    { key: '4', text: 'Take Jackson out'}
  ]);

  return (
    <View style={styles.container}>
      <Text>ToDos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})