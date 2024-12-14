import { LogOut, Briefcase, Bell, User } from 'lucide-react';
import { useState } from 'react';
import { auth } from '../services/api';
import AuthModal from './AuthModal';
import Jobs from './Jobs.tsx';
import Notifications from './Notifications.tsx';
import Profile from './Profile.tsx';

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
  };

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <nav className="bg-gray-900 text-white fixed w-full z-50">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Left Section (Logo, etc.) */}
          <div>
            <h1 className="text-lg font-semibold"> Skill Sphere</h1>
          </div>

          {/* Right Section (Jobs, Notifications, Profile, Logout/Login) */}
          <div className="flex items-center space-x-4">
            <Jobs />
            <Notifications />
            <Profile />

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="p-1 rounded-full hover:bg-gray-700 transition-all duration-200"
              >
                <LogOut size={20} />
              </button>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}
