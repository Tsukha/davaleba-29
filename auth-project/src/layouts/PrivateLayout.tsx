import React from "react";
import { useAuth } from "../contexts/AuthContext";
import type { PageType } from "../types/auth.types";

interface PrivateLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
  currentPage: PageType;
}

export const PrivateLayout: React.FC<PrivateLayoutProps> = ({
  children,
  onNavigate,
  onLogout,
  currentPage,
}) => {
  const { user } = useAuth();

  return (
    <div className="layout private-layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">AuthApp</h1>
          <div className="user-info">
            <span className="welcome">Welcome, {user?.name}</span>
            <button onClick={onLogout} className="btn btn-secondary">
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="app-body">
        <nav className="sidebar">
          <ul className="nav-menu">
            <li>
              <button
                onClick={() => onNavigate("dashboard")}
                className={`nav-menu-link ${
                  currentPage === "dashboard" ? "active" : ""
                }`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("profile")}
                className={`nav-menu-link ${
                  currentPage === "profile" ? "active" : ""
                }`}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate("settings")}
                className={`nav-menu-link ${
                  currentPage === "settings" ? "active" : ""
                }`}
              >
                Settings
              </button>
            </li>
          </ul>
        </nav>
        <main className="main">
          <div className="container">{children}</div>
        </main>
      </div>
    </div>
  );
};
