import { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [auth, setAuth] = useState(false);
  const [tokenExpires, setTokenExpires] = useState(Date.now());

  const newToken = useCallback((response) => {
    setToken(response.token);
    setTokenExpires(response.tokenExpires);
  }, []);

  const contextValue = useMemo(() => {
    return [token, tokenExpires, newToken, auth, setAuth]
  }, [token, tokenExpires, newToken, auth, setAuth]);

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)}
