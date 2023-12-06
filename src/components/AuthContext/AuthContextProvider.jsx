import { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [tokenExpires, setTokenExpires] = useState(Date.now());
  const [auth, setAuth] = useState(true);

  const newToken = useCallback((data) => {
    if(data.token == '') setAuth(false)
    else setAuth(true)
    setToken(data.token);
    setTokenExpires(data.tokenExpires);
  }, []);

  const contextValue = useMemo(() => {
    return { token, tokenExpires, newToken, auth, setAuth }
  }, [token, tokenExpires, newToken, auth, setAuth]);

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)}
