import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { PrivateLayout } from "../layouts/PrivateLayout";
import type { PageType } from "../types/auth.types";

interface DashboardPageProps {
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  onNavigate,
  onLogout,
}) => {
  const { user } = useAuth();

  return (
    <PrivateLayout
      onNavigate={onNavigate}
      onLogout={onLogout}
      currentPage="dashboard"
    >
      <div className="page">
        <h2>Dashboard</h2>
        <div className="dashboard-content">
          <div className="welcome-card">
            <h3>Welcome back, {user?.name}!</h3>
            <p>You're successfully logged in to your dashboard.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Profile Status</h4>
              <p>Active</p>
            </div>
            <div className="stat-card">
              <h4>Last Login</h4>
              <p>Just now</p>
            </div>
            <div className="stat-card">
              <h4>Account Type</h4>
              <p>Standard</p>
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};
