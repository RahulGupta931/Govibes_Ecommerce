import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import Breadcrumbs from '../components/ui/Breadcrumbs';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  useEffect(() => {
    document.title = 'Shopping Cart | GoVibes';
  }, []);

  // Calculate other order values
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-background min-h-[60vh] py-8">
        <div className="container">
          <Breadcrumbs />
          
          <div className="flex flex-col items-center justify-center py-16">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-md mx-auto">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-primary-100 rounded-full">
                  <ShoppingBag size={36} className="text-primary-500" />
                </div>
              </div>
              <h1 className="text-2xl font-heading font-bold mb-3">Your cart is empty</h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button variant="primary" as={Link} to="/products">
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-8">
      <div className="container">
        <Breadcrumbs />
        
        <h1 className="text-3xl font-heading font-bold my-6">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row p-4 border-b border-gray-200 last:border-b-0">
                  {/* Product Image */}
                  <div className="sm:w-24 w-full h-24 flex-shrink-0 mb-4 sm:mb-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="sm:ml-4 flex-grow">
                    <div className="flex justify-between">
                      <Link to={`/product/${item.id}`} className="font-medium hover:text-primary-500">
                        {item.name}
                      </Link>
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-2">
                      ${item.price.toFixed(2)} each
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100 text-sm"
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          min="1" 
                          value={item.quantity} 
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-10 h-8 border-t border-b border-gray-300 text-center text-sm [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100 text-sm"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-accent-500"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link to="/products" className="inline-flex items-center text-primary-500 hover:text-primary-600">
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-heading font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth 
                as={Link}
                to="/checkout"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;