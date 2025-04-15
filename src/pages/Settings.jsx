import React, { useState } from "react";
import ProfileImage from "/user_profile.png";
import { Link, useNavigate } from "react-router-dom";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("account"); // Default to Account Settings
  const [firstName, setFirstName] = useState("Mosab");
  const [lastName, setLastName] = useState("Elkalyouby");
  const [bio, setBio] = useState(
    "William Shakespeare (1564–1616) was an English playwright, poet, and actor..."
  );
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdateInfo = (e) => {
    e.preventDefault();
    console.log("Updated Info:", { firstName, lastName, bio });
    // In a real app, send this to an API to update the user's profile
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      console.log("Password updated successfully:", newPassword);
      // In a real app, send this to an API to update the password
      setNewPassword("");
      setConfirmPassword("");
      setActiveTab("security"); // Return to security settings after update
    } else {
      console.error("Passwords do not match");
    }
  };

  const handleLogout = () => {
    console.log("User logged out");
    // In a real app, clear auth tokens and redirect to login page
    navigate("/login");
  };

  return (
    <div className="container py-8 flex flex-col md:flex-row gap-8">
      {/* Left Side: Profile Section */}
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex flex-col items-center md:flex-row gap-4 md:items-end">
          <div className="w-64 md:w-64 aspect-square overflow-hidden rounded-lg bg-secondary-black">
            <img
              src={ProfileImage}
              alt="Mosab Elkalyouby profile image"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-primary-white">
              Mosab Elkalyouby
            </h2>
            <button
              type="button"
              className="btn btn-accent-v px-4 py-2 text-sm font-medium rounded-md text-primary-white hover:btn-accent-v/80 transition-colors"
              onClick={() => setActiveTab("profile")}
              aria-label="Edit Mosab Elkalyouby's profile"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {/* Additional User Info */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-primary-gray">
            <span className="text-primary-white">@MosabElkalyouby</span> •
            Member since 13 April, 2025 • 1.2K followers
          </p>
        </div>
        <h2 className="text-md sm:text-xl font-semibold text-primary-white">
          Bio
        </h2>
        <p className="text-base leading-relaxed text-primary-white">{bio}</p>
      </div>

      {/* Right Side: Settings Menu */}
      <div className="w-full md:w-80 flex flex-col gap-6">
        {/* Menu Tabs */}
        <div className="flex flex-col rounded-2xl bg-secondary-black shadow-md p-4 gap-2">
          <button
            onClick={() => setActiveTab("account")}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "account"
                ? "btn-accent-v text-primary-white"
                : "text-primary-gray hover:btn-accent-v/20 hover:text-primary-white"
            }`}
          >
            Account Settings
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "profile"
                ? "btn-accent-v text-primary-white"
                : "text-primary-gray hover:btn-accent-v/20 hover:text-primary-white"
            }`}
          >
            Profile Settings
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "security"
                ? "btn-accent-v text-primary-white"
                : "text-primary-gray hover:btn-accent-v/20 hover:text-primary-white"
            }`}
          >
            Security Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-primary-gray hover:btn-accent-v/20 hover:text-primary-white transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tab Content */}
        <div className="rounded-2xl bg-secondary-black shadow-md p-6">
          {activeTab === "account" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary-white">
                Account Settings
              </h3>
              <p className="text-sm text-primary-gray">
                Username:{" "}
                <span className="text-primary-white">@MosabElkalyouby</span>
              </p>
              <p className="text-sm text-primary-gray">
                Member since:{" "}
                <span className="text-primary-white">13 April, 2025</span>
              </p>
              <p className="text-sm text-primary-gray">
                Followers: <span className="text-primary-white">1.2K</span>
              </p>
            </div>
          )}

          {activeTab === "profile" && (
            <form onSubmit={handleUpdateInfo} className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary-white">
                Profile Settings
              </h3>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm text-primary-gray"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm text-primary-gray">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="bio" className="text-sm text-primary-gray">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v resize-y"
                  rows="4"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-accent-v px-4 py-2 text-sm font-medium rounded-md text-primary-white hover:btn-accent-v/80 transition-colors"
              >
                Update Info
              </button>
            </form>
          )}

          {activeTab === "security" && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-primary-white">
                Security Settings
              </h3>
              <Link to="/update-password">
                <button className="w-full text-left px-4 py-2 rounded-lg btn-accent-v text-primary-white text-sm font-medium hover:btn-accent-v/80 transition-colors">
                  Update Password
                </button>
              </Link>
              <button
                className="w-full text-left px-4 py-2 rounded-lg bg-secondary-gray text-primary-gray text-sm font-medium cursor-not-allowed"
                disabled
              >
                Two-Factor Authentication
              </button>
            </div>
          )}

          {activeTab === "update-password" && (
            <form
              onSubmit={handleUpdatePassword}
              className="flex flex-col gap-4"
            >
              <h3 className="text-lg font-semibold text-primary-white">
                Update Password
              </h3>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="newPassword"
                  className="text-sm text-primary-gray"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v"
                  placeholder="New Password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm text-primary-gray"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-secondary-gray text-primary-white focus:outline-none focus:ring-2 focus:ring-accent-v"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-accent-v px-4 py-2 text-sm font-medium rounded-md text-primary-white hover:btn-accent-v/80 transition-colors"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
