import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){

// ✅ نقرأ من localStorage مباشرة بدون useEffect
const [user, setUser] = useState(() => {
  return localStorage.getItem("token");
});

const [isGuest, setIsGuest] = useState(false);

const login = (token)=>{
  localStorage.setItem("token", token);
  setUser(token);
  setIsGuest(false);
};

const logout = ()=>{
  localStorage.removeItem("token");
  setUser(null);
  setIsGuest(false);
};

const continueAsGuest = ()=>{
  localStorage.removeItem("token"); 
  setUser(null);                    
  setIsGuest(true);
};

return(
  <AuthContext.Provider value={{
    user,
    isGuest,
    login,
    logout,
    continueAsGuest
  }}>
    {children}
  </AuthContext.Provider>
);
}

export const useAuth = ()=>{
  return useContext(AuthContext);
};