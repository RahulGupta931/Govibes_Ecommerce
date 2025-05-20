import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/Product';

interface ProductGridProps {
  products: Product[];
  columns?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columns = 4 
}) => {
  // Determine the grid columns based on the columns prop
  const gridClassMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  const gridClass = gridClassMap[columns as keyof typeof gridClassMap] || gridClassMap[4];

  if (!products.length) {
    return (
      <div className="py-12 text-center">
        <p className="text-xl text-gray-500">No products found.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;