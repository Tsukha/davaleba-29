import React, { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";
import type { PageType } from "./types/auth.types";
import "./styles/main.scss";

const AppRouter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("login");
  const { user, logout } = useAuth();

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    logout();
    setCurrentPage("login");
  };

  useEffect(() => {
    if (user && (currentPage === "login" || currentPage === "register")) {
      setCurrentPage("dashboard");
    } else if (!user && currentPage !== "login" && currentPage !== "register") {
      setCurrentPage("login");
    }
  }, [user, currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "dashboard":
        return user ? (
          <DashboardPage onNavigate={handleNavigate} onLogout={handleLogout} />
        ) : null;
      case "profile":
        return user ? (
          <ProfilePage onNavigate={handleNavigate} onLogout={handleLogout} />
        ) : null;
      case "settings":
        return user ? (
          <SettingsPage onNavigate={handleNavigate} onLogout={handleLogout} />
        ) : null;
      default:
        return <LoginPage onNavigate={handleNavigate} />;
    }
  };

  return renderPage();
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
