import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular backpacks</p>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 group"
          >
            View All
            <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProductsSection;