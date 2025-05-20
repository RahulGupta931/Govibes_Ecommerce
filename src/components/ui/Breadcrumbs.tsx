import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Helper to get title case for breadcrumb labels
  const formatLabel = (path: string) => {
    // Convert category slugs to title case
    if (path === 'men') return "Men's Collection";
    if (path === 'women') return "Women's Collection";
    
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-primary-500 transition-colors flex items-center"
            aria-label="Home"
          >
            <Home size={16} />
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          // Skip product IDs in breadcrumbs
          if (pathnames[index - 1] === 'product' && !isNaN(Number(value))) {
            return null;
          }

          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          // For product detail pages, replace the product ID with product name
          // In a real app, this would pull from your product data
          let label = formatLabel(value);

          return (
            <li key={to} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  to={to}
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;