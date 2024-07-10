// authContext.js
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );



  const login = async (inputs) => {
    try {
      const res = await axios.post("auth/login", inputs);
      setCurrentUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
    } catch (error) {
      console.error("Login error:", error);
      throw error;
      // Handle error or show feedback to the user
    }
  };

  const logout = async () => {
    try {
      await axios.post("auth/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error or show feedback to the user
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

