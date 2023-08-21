import AsyncStorage from '@react-native-async-storage/async-storage'

export const signIn = async (email, password) => {
  try {
    const signInRes = await client.post('/sign-in', { 
      email, 
      password
    })

    if(signInRes.data.success){
      const token = data.jwtToken;
      await AsyncStorage.setItem('token', token);
      return signInRes;
    }
  } catch (error) {
    console.log('error inside sign-in method', error.message)
  }
}