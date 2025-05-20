import React, { useState } from 'react';
import Button from '../ui/Button';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real application, you would send this to your backend
    console.log('Subscribing email:', email);
    
    // Simulate successful submission
    setSubscribed(true);
    setError('');
    setEmail('');
  };

  return (
    <section className="bg-primary-500 py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mail size={36} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get exclusive offers and updates
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            special promotions, and travel tips.
          </p>
          
          {subscribed ? (
            <div className="bg-primary-400/50 rounded-lg p-6 inline-block">
              <p className="text-white font-medium">
                Thank you for subscribing! We've sent a welcome email to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input w-full"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    aria-label="Email address"
                  />
                  {error && (
                    <p className="text-left text-sm text-accent-400 mt-1">{error}</p>
                  )}
                </div>
                <Button type="submit" variant="secondary">Subscribe</Button>
              </div>
              <p className="text-primary-200 text-sm mt-3">
                By subscribing you agree to our Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;