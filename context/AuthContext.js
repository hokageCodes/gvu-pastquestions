"use client"
// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase-config'; // Import the auth object from firebase-config.js
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import onAuthStateChanged and signOut functions

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Logout function
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
