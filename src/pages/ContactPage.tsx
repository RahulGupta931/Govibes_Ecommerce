import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | GoVibes';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate successful submission
    setFormSubmitted(true);
    setFormError('');
  };

  return (
    <div className="bg-background">
      <div className="container py-8">
        <Breadcrumbs />
        
        <div className="my-8 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">Get in Touch</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach out to our team using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm h-full">
              <h2 className="text-xl font-heading font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <MapPin className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Adventure Street</p>
                    <p className="text-gray-600">Portland, OR 97205</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone Number</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Mail className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Address</h3>
                    <p className="text-gray-600">support@govibes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Clock className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday-Friday: 9am - 5pm PST</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm PST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-heading font-semibold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-primary-50 border border-primary-200 p-6 rounded-lg text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-full">
                      <Send className="text-primary-500" size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. We've received your message and will get back to you within 24-48 hours.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {formError && (
                    <div className="bg-accent-100 text-accent-800 p-3 rounded-md mb-4">
                      {formError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input w-full"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input w-full"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Returns & Exchanges">Returns & Exchanges</option>
                      <option value="Warranty Claim">Warranty Claim</option>
                      <option value="General Question">General Question</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="input w-full"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary"
                    icon={<Send size={16} />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-sm">
          <div className="aspect-[16/7] bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178132.64317222613!2d-122.83833293813046!3d45.54795646364913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1693323537764!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GoVibes Store Location"
            />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Standard shipping typically takes 3-5 business days within the continental US. Expedited shipping options are available at checkout. International shipping times vary by destination.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unused items in their original packaging. Please visit our Returns page for more details on how to initiate a return.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I make a warranty claim?</h3>
                <p className="text-gray-600">
                  All GoVibes backpacks come with a 2-year warranty against manufacturing defects. To make a claim, please contact our customer service team with your order number and photos of the issue.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do you offer international shipping?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times are calculated at checkout based on your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;