'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }
  return context;
};
