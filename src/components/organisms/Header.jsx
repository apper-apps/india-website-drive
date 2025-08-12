import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import NavigationItem from "@/components/molecules/NavigationItem";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
          {/*  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <ApperIcon name="Globe" className="w-6 h-6 text-white" />
            </div> */}

            <img
              src="https://tse3.mm.bing.net/th/id/OIP.pOEBy8lNSW27QCH9KzrC7QHaD8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              className="h-15 w-auto"
            />
            {/*
            <div className="hidden sm:block">
             <h1 className="text-xl font-bold text-gray-900">IGD India</h1>
             <p className="text-xs text-gray-600">Institute for Global Development</p>
           </div>
           */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationItem to="/">Home</NavigationItem>
            <NavigationItem to="/about">About Us</NavigationItem>
            <NavigationItem to="/contact">Contact</NavigationItem>
          </nav>

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
                <NavigationItem to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavigationItem>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;