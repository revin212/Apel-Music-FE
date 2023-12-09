import { useState, useMemo, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import { getCookie } from "../../utils/authUtils";

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(getCookie('token'));
  const [roleName, setRoleName] = useState(getCookie('rolename'));
  const [tokenExpires, setTokenExpires] = useState(Date.now());


  const newToken = useCallback((data) => {
    setToken(data.token);
    setTokenExpires(data.tokenExpires);
    setRoleName(data.roleName);
  }, []);

  const contextValue = useMemo(() => {
    return { token, tokenExpires, roleName, newToken }
  }, [token, tokenExpires, roleName, newToken]);

  return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
)}
