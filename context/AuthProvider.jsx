'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

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

        setUser({ ...userData, token });
      } catch (err) {
        console.error(err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
