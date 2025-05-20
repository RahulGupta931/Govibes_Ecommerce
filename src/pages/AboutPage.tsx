import React, { useEffect } from 'react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Award, Mountain, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | GoVibes';
  }, []);

  const values = [
    {
      icon: <Mountain size={40} className="text-primary-500" />,
      title: 'Adventure',
      description: 'We believe in pushing boundaries and exploring new territories, both in design and in life.'
    },
    {
      icon: <Award size={40} className="text-primary-500" />,
      title: 'Quality',
      description: 'Every stitch, material, and component is carefully selected and tested to ensure lasting performance.'
    },
    {
      icon: <Heart size={40} className="text-primary-500" />,
      title: 'Sustainability',
      description: 'We\'re committed to reducing our environmental impact through responsible sourcing and production.'
    },
    {
      icon: <Users size={40} className="text-primary-500" />,
      title: 'Community',
      description: 'We foster a community of explorers, travelers, and everyday adventurers who share our passion.'
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative bg-primary-500 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Mountain landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Our Story
            </h1>
            <p className="text-xl mb-0 text-white/90">
              Crafting premium backpacks for every journey since 2018.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container py-12">
        <Breadcrumbs />
        
        {/* Our Story */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">From Passion to Purpose</h2>
              <p className="mb-4 text-lg">
                GoVibes was born from a simple idea: that backpacks should be more than just functional—they should enhance your journey and inspire new adventures.
              </p>
              <p className="mb-4">
                Founded in 2018 by outdoor enthusiasts Mark and Sarah Chen, GoVibes started as a small workshop in Portland, Oregon. Frustrated by backpacks that either prioritized style over function or durability over design, they set out to create something different—backpacks that excel in both form and function.
              </p>
              <p className="mb-6">
                What began as a small operation selling handcrafted backpacks at local markets has grown into a beloved brand serving adventurers worldwide. Through it all, our commitment to quality, innovation, and sustainability has remained unwavering.
              </p>
              <Button as={Link} to="/products" variant="primary">
                Explore Our Products
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Person crafting a backpack" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than creating backpacks, we\'re building a culture of exploration and responsibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Commitment */}
        <section className="py-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Person hiking in mountains with backpack" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Commitment to Quality</h2>
              <p className="mb-4 text-lg">
                We believe that the best backpacks are the ones you don\'t have to replace. That\'s why we\'re obsessed with quality at every step.
              </p>
              <p className="mb-4">
                From selecting premium materials to rigorous testing procedures, we ensure each GoVibes backpack can withstand years of adventures. Our products are designed in Portland and manufactured by skilled artisans who share our passion for craftsmanship.
              </p>
              <p className="mb-4">
                We stand behind every product with our 2-year warranty and satisfaction guarantee. Because when you\'re exploring new horizons, the last thing you should worry about is your gear.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button as={Link} to="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;