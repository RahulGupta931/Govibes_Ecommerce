import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { User, ShoppingBag, Home, Package, Info, Mail, UserCircle, LogIn } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-white md:hidden animate-fade-in">
      <div className="container py-20">
        <nav className="flex flex-col space-y-6">
          <NavLink to="/" className="flex items-center text-xl font-medium p-2">
            <Home size={20} className="mr-3" />
            Home
          </NavLink>
          <NavLink to="/products" className="flex items-center text-xl font-medium p-2">
            <Package size={20} className="mr-3" />
            All Products
          </NavLink>
          <NavLink to="/products/men" className="flex items-center text-xl font-medium p-2 ml-6">
            Men's Backpacks
          </NavLink>
          <NavLink to="/products/women" className="flex items-center text-xl font-medium p-2 ml-6">
            Women's Backpacks
          </NavLink>
          <NavLink to="/about" className="flex items-center text-xl font-medium p-2">
            <Info size={20} className="mr-3" />
            About Us
          </NavLink>
          <NavLink to="/contact" className="flex items-center text-xl font-medium p-2">
            <Mail size={20} className="mr-3" />
            Contact
          </NavLink>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <Link to="/login" className="flex items-center text-xl font-medium p-2">
              <LogIn size={20} className="mr-3" />
              Login
            </Link>
            <Link to="/signup" className="flex items-center text-xl font-medium p-2">
              <UserCircle size={20} className="mr-3" />
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;