import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../../types/Product';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card group animate-fade-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Product badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-accent-500 text-white text-xs font-medium px-2 py-1 rounded">
                NEW
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded">
                FEATURED
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart size={16} className="text-foreground" />
            </button>
          </div>
          
          {/* Add to cart button - appears on hover */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-foreground font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg mb-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-primary-500">${product.price.toFixed(2)}</p>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1">
            {product.colors.map((color, index) => (
              <div 
                key={index} 
                className="w-3 h-3 rounded-full border border-gray-300" 
                style={{ backgroundColor: color }}
                aria-label={`Color option ${index + 1}`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">{product.colors.length} colors</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;