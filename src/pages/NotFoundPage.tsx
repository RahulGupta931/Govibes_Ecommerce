import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | GoVibes';
  }, []);

  return (
    <div className="bg-background min-h-[70vh] flex items-center py-16">
      <div className="container">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-heading font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-heading font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as={Link} to="/" variant="primary" icon={<Home size={18} />}>
              Back to Home
            </Button>
            <Button as={Link} to="/products" variant="outline" icon={<Search size={18} />}>
              Browse Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;