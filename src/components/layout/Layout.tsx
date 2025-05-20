import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../../utils/ScrollToTop';
import NewsletterSection from '../sections/NewsletterSection';

const Layout: React.FC = () => {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';
  
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        {!isCheckout && <NewsletterSection />}
        <Footer />
      </div>
    </>
  );
};

export default Layout;