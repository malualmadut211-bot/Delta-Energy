import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Delivery', path: '/delivery' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/36a7ae47a64cdbcaa1bc0fa9885decb131212721/ChatGPT%20Image%20Mar%2026%2C%202026%2C%2002_30_41%20PM.png" 
              alt="Delta Energy Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300" 
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors duration-200 relative group',
                  location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300',
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right Side CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-dark font-medium text-sm">
              <Phone size={16} className="text-primary mr-2 animate-pulse" />
              +211 929 452392
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-accent/50"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-dark p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-[60px] bg-white z-40 flex flex-col px-6 py-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-2xl font-bold',
                      location.pathname === link.path ? 'text-primary' : 'text-dark'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto pb-20"
            >
              <div className="flex items-center text-dark font-medium text-lg mb-6">
                <Phone size={20} className="text-primary mr-3" />
                +211 929 452392
              </div>
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-primary to-accent text-white px-6 py-4 rounded-md font-bold text-lg"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
