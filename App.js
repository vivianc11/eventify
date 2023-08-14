import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Animated, Dimensions } from 'react-native';
import LoginHeader from './components/LoginHeader';
import LoginSelectorButton from './components/LoginSelectorButton';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '@env';
import ImageUpload from './components/ImageUpload';

const { width } = Dimensions.get('window');

export default function App() {

  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const fetchApi = async () => {
    try {
      const res = await axios.get(API_URL);
      console.log(res.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchApi(API_URL)
  }, [])

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    // the 1 is the opacity we want the 'back' when we are in the login page
    // the 0 is the opacity we want the 'back' when we are in the signup page
    outputRange: [1, 0]
  })

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    // the 0 is the position we want the 'welcome' when we are in the login page
    // the 40 is the position we want the 'welcome' when we are in the signup page
    outputRange: [0, 40]
  })

  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    // the 0 is the position we want the 'back' when we are in the login page
    // the -20 is the position we want the 'back' when we are in the signup page
    outputRange: [0, -20]
  })

  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(231, 111, 81, 1)','rgba(231, 111, 81, 0.4)']
  })

  const signUpColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(231, 111, 81, 0.4)','rgba(231, 111, 81, 1)']
  })

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.header}>
  //       <LoginHeader
  //         leftHeading='Welcome '
  //         rightHeading='Back'
  //         subHeading='Start Event Planning Now'
  //         rightHeaderOpacity={rightHeaderOpacity}
  //         leftHeaderTranslateX={leftHeaderTranslateX}
  //         rightHeaderTranslateY={rightHeaderTranslateY}
  //       />
  //     </View>
  //     <View style={styles.buttonContainer}>
  //       <LoginSelectorButton
  //         style={styles.borderLeft}
  //         backgroundColor={loginColorInterpolate}
  //         title='Login'
  //         onPress={() => scrollView.current.scrollTo({ x:0 })}
  //       />
  //       <LoginSelectorButton
  //         style={styles.borderRight}
  //         backgroundColor={signUpColorInterpolate}
  //         title='Sign Up'
  //         onPress={() => scrollView.current.scrollTo({ x:width })}
  //       />
  //     </View>
  //     <ScrollView
  //       ref={scrollView} 
  //       horizontal 
  //       pagingEnabled 
  //       showsHorizontalScrollIndicator={false}
  //       scrollEventThrottle={16}
  //       onScroll={Animated.event([{nativeEvent: {contentOffset: {x:animation}}}], {useNativeDriver: false})}
  //     >
  //       <LoginForm />
  //       <ScrollView>
  //         <SignUpForm />
  //       </ScrollView>
  //     </ScrollView>
  //   </View>
  // );

  return(
    <ImageUpload/>
  )
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
