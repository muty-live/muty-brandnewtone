import { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/live';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  register: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // モック実装
    setUser({
      id: '1',
      username,
      avatar: 'https://i.pravatar.cc/150?img=30',
      coins: 5000,
      creditCard: {
        lastFour: '4532',
        brand: 'Visa',
      },
    });
  };

  const register = (username: string, password: string) => {
    // モック実装
    setUser({
      id: '1',
      username,
      avatar: 'https://i.pravatar.cc/150?img=30',
      coins: 1000,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}