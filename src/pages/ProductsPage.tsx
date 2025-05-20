import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types/Product';

const ProductsPage: React.FC = () => {
  const { category = 'all' } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    colors: [] as string[],
    sortBy: 'newest',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Set page title based on category
  useEffect(() => {
    let title = 'All Backpacks';
    if (category === 'men') title = "Men's Backpacks";
    if (category === 'women') title = "Women's Backpacks";
    document.title = `${title} | GoVibes`;
    
    // Load products based on category
    const filteredProducts = getProductsByCategory(category);
    setProducts(filteredProducts);
  }, [category]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Get category title
  const getCategoryTitle = () => {
    if (category === 'men') return "Men's Collection";
    if (category === 'women') return "Women's Collection";
    return "All Backpacks";
  };

  const getCategoryDescription = () => {
    if (category === 'men') return "Durable, functional backpacks designed for men with features that support your active lifestyle.";
    if (category === 'women') return "Stylish, practical backpacks crafted for women with thoughtful designs that blend fashion and function.";
    return "Browse our complete collection of premium backpacks, featuring designs for every lifestyle and need.";
  };

  return (
    <div className="bg-background">
      <div className="container py-8">
        <Breadcrumbs />
        
        <div className="my-8">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">{getCategoryTitle()}</h1>
          <p className="text-gray-600 max-w-2xl">{getCategoryDescription()}</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="md:hidden">
            <Button 
              variant="outline" 
              icon={<Filter size={16} />} 
              onClick={toggleFilter}
              className="w-full mb-4"
            >
              Filter Products
            </Button>
            
            {/* Mobile Filter Drawer */}
            {isFilterOpen && (
              <div className="fixed inset-0 z-50 bg-white p-4 overflow-auto animate-fade-in">
                <div className="flex justify-between items-center mb-4 border-b pb-4">
                  <h2 className="text-xl font-heading font-semibold">Filters</h2>
                  <button onClick={toggleFilter} className="p-2">
                    <X size={24} />
                  </button>
                </div>
                
                {/* Filter Content - Mobile */}
                <div className="space-y-6 mb-6">
                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="px-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="200" 
                        step="10"
                        className="w-full" 
                      />
                      <div className="flex justify-between text-sm mt-1">
                        <span>$0</span>
                        <span>$200</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Color Filter */}
                  <div>
                    <h3 className="font-medium mb-3">Color</h3>
                    <div className="space-y-2">
                      {['Black', 'Green', 'Purple', 'Terracotta', 'Gray'].map(color => (
                        <label key={color} className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span>{color}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort Options */}
                  <div>
                    <h3 className="font-medium mb-3">Sort By</h3>
                    <div className="space-y-2">
                      {['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular'].map(option => (
                        <label key={option} className="flex items-center">
                          <input 
                            type="radio" 
                            name="sortBy" 
                            className="mr-2" 
                            defaultChecked={option === 'Newest'} 
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" fullWidth>Clear All</Button>
                  <Button variant="primary" fullWidth onClick={toggleFilter}>Apply Filters</Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Filters - Desktop Sidebar */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading font-semibold">Filters</h2>
                <SlidersHorizontal size={18} />
              </div>
              
              <div className="space-y-6">
                {/* Price Range Filter */}
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      step="10"
                      className="w-full" 
                    />
                    <div className="flex justify-between text-sm mt-1">
                      <span>$0</span>
                      <span>$200</span>
                    </div>
                  </div>
                </div>
                
                {/* Color Filter */}
                <div>
                  <h3 className="font-medium mb-3">Color</h3>
                  <div className="space-y-2">
                    {['Black', 'Green', 'Purple', 'Terracotta', 'Gray'].map(color => (
                      <label key={color} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>{color}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Sort Options */}
                <div>
                  <h3 className="font-medium mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {['Newest', 'Price: Low to High', 'Price: High to Low', 'Most Popular'].map(option => (
                      <label key={option} className="flex items-center">
                        <input 
                          type="radio" 
                          name="sortBy" 
                          className="mr-2" 
                          defaultChecked={option === 'Newest'} 
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" fullWidth>Clear All</Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;