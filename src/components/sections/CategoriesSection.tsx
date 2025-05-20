import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 'men',
      title: "Men's Collection",
      description: 'Rugged, functional backpacks designed for any adventure',
      image: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/products/men'
    },
    {
      id: 'women',
      title: "Women's Collection",
      description: 'Stylish, versatile backpacks for everyday and beyond',
      image: 'https://images.pexels.com/photos/2467393/pexels-photo-2467393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/products/women'
    }
  ];
  
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-3">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium backpacks designed specifically for men and women
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-heading font-bold mb-2">{category.title}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <Link 
                  to={category.link} 
                  className="inline-block bg-white text-foreground font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors w-fit"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;