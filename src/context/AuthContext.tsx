import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  industry?: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  setUserIndustry: (industry: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    // Fixed credentials
    if (username === 'keshav' && password === '12345678') {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const setUserIndustry = (industry: string) => {
    if (user) {
      setUser({ ...user, industry });
    }
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    setUserIndustry,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};