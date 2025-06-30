import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { PublicLayout } from "../layouts/PublicLayout";
import type { PageType } from "../types/auth.types";

interface RegisterPageProps {
  onNavigate: (page: PageType) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register, loading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = await register(name, email, password);
    if (success) {
      onNavigate("dashboard");
    } else {
      setError("User already exists or registration failed");
    }
  };

  return (
    <PublicLayout onNavigate={onNavigate}>
      <div className="auth-page">
        <div className="auth-card">
          <h2>Register</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
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
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="auth-link">
            Already have an account?{" "}
            <button onClick={() => onNavigate("login")}>Login here</button>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
};
