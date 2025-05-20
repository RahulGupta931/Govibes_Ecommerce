import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Minus, Plus, Share2, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ProductGrid from '../components/products/ProductGrid';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(getProductById(id || ''));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const relatedProducts = product ? getRelatedProducts(product.id, product.category) : [];

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | GoVibes`;
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      setSelectedImage(0);
      setQuantity(1);
      setIsAddedToCart(false);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-medium mb-4">Product not found</h1>
        <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
        <Button variant="primary" as={Link} to="/products">
          Browse Products
        </Button>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAddedToCart(true);
    
    // Reset the "Added to cart" message after 3 seconds
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 3000);
  };

  return (
    <div className="bg-background">
      <div className="container py-8">
        <Breadcrumbs />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                    selectedImage === index ? 'border-primary-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
              <span className="ml-2 text-gray-500">{product.reviews} reviews</span>
            </div>
            
            <div className="text-2xl font-semibold text-primary-500 mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color ? 'border-primary-500 ring-2 ring-primary-200' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <input 
                  type="number" 
                  min="1" 
                  max={product.stock}
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button 
                  onClick={increaseQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  <Plus size={16} />
                </button>
                <span className="ml-4 text-sm text-gray-500">
                  {product.stock} available
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth 
                icon={isAddedToCart ? <Check size={20} /> : <ShoppingBag size={20} />}
                onClick={handleAddToCart}
                disabled={isAddedToCart}
              >
                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Heart size={20} />}
                className="sm:w-14 flex-shrink-0"
                aria-label="Add to wishlist"
              />
              <Button 
                variant="outline" 
                size="lg" 
                icon={<Share2 size={20} />}
                className="sm:w-14 flex-shrink-0"
                aria-label="Share product"
              />
            </div>
            
            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex gap-2 text-sm">
                <span className="text-gray-500">Category:</span>
                <Link to={`/products/${product.category}`} className="link">
                  {product.category === 'men' ? "Men's Backpacks" : 
                   product.category === 'women' ? "Women's Backpacks" : 
                   "Unisex Backpacks"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-heading font-bold mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;