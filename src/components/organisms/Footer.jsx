import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <ApperIcon name="Globe" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">IGD India</h3>
                <p className="text-sm text-white/80">Institute for Global Development</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Empowering communities through sustainable development initiatives across India.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ApperIcon name="Facebook" className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ApperIcon name="Twitter" className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ApperIcon name="Linkedin" className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ApperIcon name="Instagram" className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Impact Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for updates on our latest initiatives and impact stories.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white focus:outline-none"
              />
              <Button
                variant="accent"
                className="px-4 py-2 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2024 Institute for Global Development, India. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Greater Kailash, New Delhi, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;