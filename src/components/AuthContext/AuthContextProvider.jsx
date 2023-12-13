import { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { getCookie } from "../../utils/authUtils";

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getCookie('token'));
  const [roleName, setRoleName] = useState(getCookie('rolename'));
  const [tokenExpires, setTokenExpires] = useState(Date.now());
  const [refreshToken, setRefreshToken] = useState(getCookie('refreshToken'));
  const [email, setEmail] = useState(getCookie('email'));


  const newToken = useCallback((data) => {
    setToken(data.token);
    setTokenExpires(data.tokenExpires);
    setRoleName(data.roleName);
    setRefreshToken(data.refreshToken.refreshToken);
    setEmail(data.refreshToken.email);
  }, []);

  const contextValue = useMemo(() => {
    return { token, tokenExpires, roleName, refreshToken, email, newToken }
  }, [token, tokenExpires, roleName, refreshToken, email, newToken]);

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)}
