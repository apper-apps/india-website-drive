import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from 'react-redux';
import { AuthContext } from "@/App";
import ApperIcon from "@/components/ApperIcon";
import NavigationItem from "@/components/molecules/NavigationItem";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    if (authContext?.logout) {
      authContext.logout();
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <img 
                src="https://drive.google.com/uc?export=view&id=1DOiDfeTZ1U3ApkfvQjPfkDfUiSjx-5v4" 
                alt="IGD India Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div 
                className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center hidden"
                style={{ display: 'none' }}
              >
                <ApperIcon name="Globe" className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">IGD India</h1>
              <p className="text-xs text-gray-600">Institute for Global Development</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              <NavigationItem to="/">Home</NavigationItem>
              <NavigationItem to="/about">About Us</NavigationItem>
              <NavigationItem to="/blog">Blog</NavigationItem>
              <NavigationItem to="/contact">Contact</NavigationItem>
            </nav>
            {isAuthenticated && (
              <div className="flex items-center space-x-4 ml-4">
                <span className="text-sm text-gray-600">
                  Welcome, {user?.firstName || 'User'}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ApperIcon 
              name={mobileMenuOpen ? "X" : "Menu"} 
              className="w-6 h-6 text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
<nav className="flex flex-col space-y-2">
                <NavigationItem to="/" onClick={closeMobileMenu}>
                  Home
                </NavigationItem>
                <NavigationItem to="/about" onClick={closeMobileMenu}>
                  About Us
                </NavigationItem>
                <NavigationItem to="/blog" onClick={closeMobileMenu}>
                  Blog
                </NavigationItem>
                <NavigationItem to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavigationItem>
                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors text-left"
                  >
                    Logout
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;