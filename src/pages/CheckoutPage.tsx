import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import { CreditCard, Package, User, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { cartItems, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    // Payment information
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    document.title = 'Checkout | GoVibes';
    
    // Redirect to cart if cart is empty
    if (cartItems.length === 0 && !orderCompleted) {
      navigate('/cart');
    }
  }, [cartItems, navigate, orderCompleted]);

  // Calculate order totals
  const shipping = 5.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setActiveStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setActiveStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const completeOrder = () => {
    setOrderCompleted(true);
    clearCart();
  };

  // Simple validation
  const isShippingFormValid = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
    return requiredFields.every(field => formData[field as keyof typeof formData]);
  };

  const isPaymentFormValid = () => {
    const requiredFields = ['cardHolder', 'cardNumber', 'expiryDate', 'cvv'];
    return requiredFields.every(field => formData[field as keyof typeof formData]);
  };

  if (orderCompleted) {
    return (
      <div className="bg-background min-h-[70vh] flex items-center">
        <div className="container">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <CheckCircle size={32} className="text-primary-500" />
              </div>
            </div>
            <h1 className="text-2xl font-heading font-bold mb-4">Order Confirmed!</h1>
            <p className="mb-6 text-gray-600">
              Thank you for your purchase. We've received your order and will process it as soon as possible.
              A confirmation email has been sent to your email address.
            </p>
            <p className="mb-6 font-medium">
              Order Number: <span className="font-bold">GV-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <Button
              variant="primary"
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background py-8">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Checkout Steps */}
          <div className="flex justify-between mb-8">
            <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-primary-500' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                activeStep >= 1 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <User size={20} />
              </div>
              <span className="text-sm">Shipping</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className={`h-1 w-full ${activeStep >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-primary-500' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                activeStep >= 2 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <CreditCard size={20} />
              </div>
              <span className="text-sm">Payment</span>
            </div>
            <div className="flex-1 flex items-center">
              <div className={`h-1 w-full ${activeStep >= 3 ? 'bg-primary-500' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-primary-500' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                activeStep >= 3 ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <Package size={20} />
              </div>
              <span className="text-sm">Review</span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Step 1: Shipping Information */}
            {activeStep === 1 && (
              <div className="p-6">
                <h2 className="text-xl font-heading font-semibold mb-6">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province*
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP/Postal Code*
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country*
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="input w-full"
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="primary" 
                    onClick={nextStep}
                    disabled={!isShippingFormValid()}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 2: Payment Information */}
            {activeStep === 2 && (
              <div className="p-6">
                <h2 className="text-xl font-heading font-semibold mb-6">Payment Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name*
                    </label>
                    <input
                      type="text"
                      id="cardHolder"
                      name="cardHolder"
                      value={formData.cardHolder}
                      onChange={handleInputChange}
                      className="input w-full"
                      placeholder="Name on card"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number*
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="input w-full"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date*
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="input w-full"
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV*
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="input w-full"
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={nextStep}
                    disabled={!isPaymentFormValid()}
                  >
                    Review Order
                  </Button>
                </div>
              </div>
            )}
            
            {/* Step 3: Order Review */}
            {activeStep === 3 && (
              <div className="p-6">
                <h2 className="text-xl font-heading font-semibold mb-6">Review Your Order</h2>
                
                {/* Order Items */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Order Items</h3>
                  <div className="border rounded-md overflow-hidden">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center p-3 border-b last:border-b-0">
                        <div className="w-16 h-16 flex-shrink-0">
                          <img 
                            src={item.images[0]} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Order Summary */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Order Summary</h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2 mt-2 font-bold">
                        <div className="flex justify-between">
                          <span>Total</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Shipping Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-3">Shipping Address</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                      <p>{formData.country}</p>
                      <p className="mt-2">{formData.email}</p>
                      <p>{formData.phone}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-3">Payment Method</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p>{formData.cardHolder}</p>
                      <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                      <p>Expires {formData.expiryDate}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button 
                    variant="primary" 
                    onClick={completeOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;