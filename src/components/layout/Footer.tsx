import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">GoVibes</h3>
            <p className="text-primary-100 mb-4">
              Premium backpacks designed for every adventure. Style meets functionality for your everyday journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-accent-400" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent-400" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-100 hover:text-white transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="/products/men" className="text-primary-100 hover:text-white transition-colors">Men's Collection</Link>
              </li>
              <li>
                <Link to="/products/women" className="text-primary-100 hover:text-white transition-colors">Women's Collection</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Return & Refund</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 shrink-0 mt-1" size={18} />
                <p className="text-primary-100">123 Adventure Street, Backpack City, 10001</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 shrink-0" size={18} />
                <p className="text-primary-100">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 shrink-0" size={18} />
                <p className="text-primary-100">support@govibes.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-400 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-100 text-sm">
            <p>© {currentYear} GoVibes. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;