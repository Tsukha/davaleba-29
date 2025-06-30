import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { PublicLayout } from "../layouts/PublicLayout";
import type { PageType } from "../types/auth.types";

interface LoginPageProps {
  onNavigate: (page: PageType) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await login(email, password);
    if (success) {
      onNavigate("dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <PublicLayout onNavigate={onNavigate}>
      <div className="auth-page">
        <div className="auth-card">
          <h2>Login</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="auth-link">
            Don't have an account?{" "}
            <button onClick={() => onNavigate("register")}>
              Register here
            </button>
          </p>
          <div className="demo-credentials">
            <small>Demo credentials: admin@example.com / password123</small>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};
