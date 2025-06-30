export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  loading: boolean;
}

export type PageType =
  | "login"
  | "register"
  | "dashboard"
  | "profile"
  | "settings";

export interface MockUser {
  id: string;
  email: string;
  password: string;
  name: string;
}
