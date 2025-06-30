import React, { useState, useContext, createContext } from "react";
import type { AuthContextType, User, MockUser } from "../types/auth.types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUsers: MockUser[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "password123",
    name: "Admin User",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "password123",
    name: "Regular User",
  },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      const userData = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      };
      setUser(userData);
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      setLoading(false);
      return false;
    }

    const newUser: MockUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
    };
    mockUsers.push(newUser);

    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    setUser(userData);
    setLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
