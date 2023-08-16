import { createContext, useState } from "react"

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider;