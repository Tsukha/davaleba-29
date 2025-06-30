import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { PrivateLayout } from "../layouts/PrivateLayout";
import type { PageType } from "../types/auth.types";

interface ProfilePageProps {
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  onNavigate,
  onLogout,
}) => {
  const { user } = useAuth();

  return (
    <PrivateLayout
      onNavigate={onNavigate}
      onLogout={onLogout}
      currentPage="profile"
    >
      <div className="page">
        <h2>Profile</h2>
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-info">
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
              <p>Member since: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};
