import React from "react";
import type { PageType } from "../types/auth.types";

interface PublicLayoutProps {
  children: React.ReactNode;
  onNavigate: (page: PageType) => void;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({
  children,
  onNavigate,
}) => {
  return (
    <div className="layout public-layout">
      <header className="header">
        <div className="container">
          <h1 className="logo">AuthApp</h1>
          <nav className="nav">
            <button onClick={() => onNavigate("login")} className="nav-link">
              Login
            </button>
            <button onClick={() => onNavigate("register")} className="nav-link">
              Register
            </button>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
};
