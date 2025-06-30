import React, { useState } from "react";
import { PrivateLayout } from "../layouts/PrivateLayout";
import type { PageType } from "../types/auth.types";

interface SettingsPageProps {
  onNavigate: (page: PageType) => void;
  onLogout: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  onNavigate,
  onLogout,
}) => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [privacy, setPrivacy] = useState("public");

  return (
    <PrivateLayout
      onNavigate={onNavigate}
      onLogout={onLogout}
      currentPage="settings"
    >
      <div className="page">
        <h2>Settings</h2>
        <div className="settings-content">
          <div className="settings-section">
            <h3>Account Settings</h3>
            <div className="setting-item">
              <label>Email Notifications</label>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
              />
            </div>
            <div className="setting-item">
              <label>Two-Factor Authentication</label>
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
              />
            </div>
          </div>
          <div className="settings-section">
            <h3>Privacy Settings</h3>
            <div className="setting-item">
              <label>Profile Visibility</label>
              <select
                className="form-input"
                value={privacy}
                onChange={(e) => setPrivacy(e.target.value)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};
