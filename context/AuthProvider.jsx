'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      setIsLoading(false);
      return;
    }

    const parsedToken = JSON.parse(token);

    const fetchUser = async () => {
      try {
        const res = await fetch('/api/watchlist', {
          headers: {
            Authorization: parsedToken.token,
          },
        });
        if (!res.ok) throw new Error(res.msg);

        const userData = await res.json();

        console.log(userData);

        setUser({ ...userData, token: parsedToken.token });
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setUser(null);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider.');
  }
  return context;
};
