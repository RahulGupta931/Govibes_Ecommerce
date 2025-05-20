import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || isMobileMenuOpen || location.pathname !== '/' 
      ? 'bg-white shadow-sm py-3' 
      : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all hover:after:w-full ${
    isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-foreground' : 'text-white'
  }`;

  const activeClasses = 'after:w-full text-primary-500';

  return (
    <header className={navClasses}>
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-heading font-bold transition-colors"
        >
          <span className={`${isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-primary-500' : 'text-white'}`}>
            Go<span className="text-accent-500">Vibes</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            All Products
          </NavLink>
          <NavLink to="/products/men" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            Men
          </NavLink>
          <NavLink to="/products/women" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            Women
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `${linkClasses} ${isActive ? activeClasses : ''}`
          }>
            Contact
          </NavLink>
        </nav>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/login" 
            className={`hidden md:flex items-center text-sm ${
              isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-foreground' : 'text-white'
            }`}
          >
            <User size={20} className="mr-1" />
            <span>Account</span>
          </Link>

          <Link 
            to="/cart" 
            className={`relative flex items-center ${
              isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-foreground' : 'text-white'
            }`}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-accent-500 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button 
            className={`md:hidden ${
              isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-foreground' : 'text-white'
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;