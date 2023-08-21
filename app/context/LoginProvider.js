import React, { createContext, useContext, useEffect, useState } from "react"
import client from "../api/client";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const [loginPending, setLoginPending] = useState(false);

  // checking if device has a token stored, 
  // if token exists, then will be used to check for validation
  const fetchUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if(token !== null) {
      const res = await client.get('/profile', {
        headers: {
          Authorization: `JWT ${token}`
        }
      })
      if(res.data.success){
        setProfile(res.data.profile);
        isLoggedIn(true);
      } else {
        setProfile({});
        isLoggedIn(false);
      }
    }
  }

  useEffect(() => {
    fetchUser();
  },[])

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