import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LoginHeader from './components/LoginHeader';
import LoginSelectorButton from './components/LoginSelectorButton';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

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
      <View style={styles.buttonContainer}>
        <LoginSelectorButton
          style={styles.borderLeft}
          title='Login'
        />
        <LoginSelectorButton
          style={styles.borderRight}
          title='Sign Up'
        />
      </View>
      <ScrollView
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <LoginForm />
        <ScrollView>
          <SignUpForm />
        </ScrollView>
      </ScrollView>
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
  buttonContainer: {
    flexDirection: 'row',
    padding: 20
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
});
