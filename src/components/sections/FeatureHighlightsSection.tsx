import React from 'react';
import { Shield, Truck, RefreshCw, ThumbsUp } from 'lucide-react';

const FeatureHighlightsSection: React.FC = () => {
  const features = [
    {
      icon: <Truck size={36} className="text-primary-500" />,
      title: 'Free Shipping',
      description: 'Free standard shipping on all orders over $75'
    },
    {
      icon: <RefreshCw size={36} className="text-primary-500" />,
      title: '30-Day Returns',
      description: 'Not happy? Return within 30 days for a full refund'
    },
    {
      icon: <Shield size={36} className="text-primary-500" />,
      title: '2-Year Warranty',
      description: 'All our backpacks come with a 2-year warranty'
    },
    {
      icon: <ThumbsUp size={36} className="text-primary-500" />,
      title: 'Satisfaction Guaranteed',
      description: 'Thousands of happy customers worldwide'
    }
  ];
  
  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;