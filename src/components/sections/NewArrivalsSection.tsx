import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductGrid from '../products/ProductGrid';
import { getNewArrivals } from '../../data/products';

const NewArrivalsSection: React.FC = () => {
  const newProducts = getNewArrivals();
  
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">New Arrivals</h2>
            <p className="text-gray-600">Fresh designs just added to our collection</p>
          </div>
          <Link 
            to="/products" 
            className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 group"
          >
            View All
            <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <ProductGrid products={newProducts} />
      </div>
    </section>
  );
};

export default NewArrivalsSection;