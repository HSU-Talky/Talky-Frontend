import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const resetAuthData = async () => {
      await AsyncStorage.removeItem("idtoken");
      await AsyncStorage.removeItem("userType");
      setIsLoggedIn(false);
      setUserType(null);
    };
    resetAuthData();
  }, []);

  return (
    <AuthContext.Provider value = {{ isLoggedIn, setIsLoggedIn, userType, setUserType }}>
      { children }
    </AuthContext.Provider>
  );
};

// 커스텀 훅
export const useAuth = () => useContext(AuthContext);