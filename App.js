import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginHeader from './components/LoginHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LoginHeader 
          leftHeading='Welcome '
          rightHeading='Back'
          subHeading='Start Event Planning Now'
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
  },
  header: {
    height: 100,
  },
});
