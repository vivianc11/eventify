import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from './AddToDo';
import TodoItem from './ToDoItem';

export default function ToDos() {
  const [todos, setTodos] = useState([
    { key: '1', text: 'Buy coffee' },
    { key: '2', text: 'Play with Philly' },
    { key: '3', text: 'Mess with Erick' },
    { key: '4', text: 'Take Jackson out'}
  ]);

   // Function to clear out a Todo after pressing on it
   const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  // Function to add Todos 
  const submitHandler = (text) => {

    // Validation: Checking if there is text greater than 3 characters entered
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { key: Math.random().toString(), text: text }
        ]
      });
    } else {
      // Alert with title, description
      Alert.alert('OOPSIES!', 'Todos must be over 3 chars long',
        // Button for alert
        [{ text: 'Understood', onPress: () => console.log('alert closed') }]
      )
    }
    // api call to post to '/add-toDo'
    // use AsyncStorage to get JWT token for auth
  }

  // api call to get all todos from db to display

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    padding: 40,
    flex: 1 
  },
  list: {
    marginTop: 20,
    flex: 1 
    // Adding flex 1 here prevents items in Flatlist from 
    // being pushed off the screen and not being able to 
    // scroll all the way down to see them
  },
})