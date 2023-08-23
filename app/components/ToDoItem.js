import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TodoItem({ item, pressHandler }) {
  return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <Text>{item.text}</Text>
          <Icon name="trash-outline" size={19} color="black" />
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});