import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "/logo.svg";
import ProfileImage from "/user_profile.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true); // Change to true for testing logged-in state
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsProfileOpen(false); // Close profile dropdown when toggling mobile menu
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    if (query.length > 0) {
      console.log("Search query:", query);
      navigate("/search");
    }
  };

  return (
    <header>
      <nav className="w-full bg-primary-black py-4 z-50 shadow-md text-primary-white">
        <div className="container flex items-center justify-between gap-4">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={Logo} alt="BookNest Logo" className="w-12 h-12" />
            <h2 className="text-2xl text-accent-v bg-clip-text text-transparent font-semibold">
              BookNest
            </h2>
          </Link>

          {/* Hamburger Menu Button (Visible below lg) */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links, Search, and Auth (Desktop, visible at lg and above) */}
          <div className="hidden lg:flex items-center gap-8 flex-grow">
            <div className="flex gap-6 flex-grow justify-center">
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent-v bg-clip-text text-transparent font-semibold"
                    : "hover:text-accent-v transition-colors"
                }
              >
                Explore
              </NavLink>
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent-v bg-clip-text text-transparent font-semibold"
                    : "hover:text-accent-v transition-colors"
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/feed"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent-v bg-clip-text text-transparent font-semibold"
                    : "hover:text-accent-v transition-colors"
                }
              >
                Feed
              </NavLink>
            </div>

            <input
              type="text"
              className="bg-secondary-black text-primary-gray rounded-2xl outline-none px-4 py-2 placeholder-primary-gray flex-grow max-w-xs"
              placeholder="Search"
              onChange={handleSearchInput}
            />

            <div className="flex items-center gap-4">
              {!loggedIn && (
                <>
                  <Link
                    to="/login"
                    className="hover:text-accent-v transition-colors"
                  >
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-accent-v px-4 py-2">
                    Register
                  </Link>
                </>
              )}
              {loggedIn && (
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="focus:outline-none"
                    aria-label="Profile menu"
                  >
                    <div className="profile-image w-10 h-10 bg-primary-gray rounded-xl overflow-hidden">
                      <img
                        src={ProfileImage}
                        alt="Profile image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-secondary-black rounded-lg shadow-lg py-2 z-50">
                      <Link
                        to="/notifications"
                        className="block px-4 py-2 text-primary-white hover:text-accent-v transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Notifications
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-primary-white hover:text-accent-v transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Settings
                      </Link>
                      <Link
                        to="/logout"
                        className="block px-4 py-2 text-primary-white hover:text-accent-v transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu (Visible below lg) */}
        <div
          className={`lg:hidden container ${
            isOpen ? "block" : "hidden"
          } bg-primary-black py-4`}
        >
          <div className="flex flex-col gap-4">
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 text-accent-v bg-clip-text text-transparent font-semibold"
                  : "block py-2 hover:text-accent-v transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Explore
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 text-accent-v bg-clip-text text-transparent font-semibold"
                  : "block py-2 hover:text-accent-v transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Categories
            </NavLink>
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 text-accent-v bg-clip-text text-transparent font-semibold"
                  : "block py-2 hover:text-accent-v transition-colors"
              }
              onClick={() => setIsOpen(false)}
            >
              Feed
            </NavLink>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            {!loggedIn && (
              <>
                <Link
                  to="/login"
                  className="block py-2 hover:text-accent-v transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-accent-v px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
            {loggedIn && (
              <div className="flex flex-col gap-4">
                <Link
                  to="/profile"
                  className="flex justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="profile-image w-10 h-10 bg-primary-gray rounded-xl overflow-hidden">
                    <img
                      src={ProfileImage}
                      alt="Profile image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
                <Link
                  to="/notifications"
                  className="block py-2 hover:text-accent-v transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Notifications
                </Link>
                <Link
                  to="/settings"
                  className="block py-2 hover:text-accent-v transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block py-2 hover:text-accent-v transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="bg-secondary-black text-primary-gray rounded-xl outline-none px-4 py-2 placeholder-primary-gray w-full"
              placeholder="Search"
              onChange={handleSearchInput}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
