import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Person with backpack in mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-16">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight animate-slide-up">
            Adventure Awaits, <br />
            <span className="text-accent-500">Carry On</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 animate-slide-up" style={{animationDelay: '0.1s'}}>
            Premium backpacks designed for every journey. Functional, stylish, and built to last.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<ArrowRight size={18} />} 
              iconPosition="right"
              as={Link}
              to="/products"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/about"
              className="border-white text-white hover:bg-white/10"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;