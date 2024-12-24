'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  userId: string;
  login: (username: string, userId: string) => void;
  logout: () => void;
  likes: { [key: string]: boolean };
  toggleLike: (houseName: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUsername = localStorage.getItem('username');
    const savedUserId = localStorage.getItem('userId');
    const savedLikes = localStorage.getItem('likes');

    if (savedToken && savedUsername && savedUserId) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
      setUserId(savedUserId);
    }

    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
  }, []);

  // いいね状態をローカルストレージに保存
  useEffect(() => {
    if (Object.keys(likes).length > 0) {
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }, [likes]);

  const login = (username: string, userId: string) => {
    setIsLoggedIn(true);
    setUsername(username);
    setUserId(userId);
    localStorage.setItem('authToken', 'example-token');
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setUserId('');
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  };

  const toggleLike = (houseName: string) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes, [houseName]: !prevLikes[houseName] };
      return newLikes;
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, userId, login, logout, likes, toggleLike }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
