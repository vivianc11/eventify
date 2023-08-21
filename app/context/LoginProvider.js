import React, { createContext, useContext, useEffect, useState } from "react"
import client from "../api/client";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [loginPending, setLoginPending] = useState(false);

  // checking if device has a token stored, 
  // if token exists, then will be used to check for validation
  const fetchUser = async () => {
    setLoginPending(true);
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      const res = await client.get('/profile', {
        headers: {
          Authorization: `JWT ${token}`
        }
      })
      console.log('logged in as:', res.data)
      if (res.data.success) {
        setProfile(res.data.profile);
        setIsLoggedIn(true);
      } else {
        setProfile({});
        setIsLoggedIn(false);
      }
      setLoginPending(false);
    } else {
      setProfile({});
      setIsLoggedIn(false);
      setLoginPending(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        profile,
        setProfile,
        loginPending,
        setLoginPending
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;