import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturedProductsSection from '../components/sections/FeaturedProductsSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import NewArrivalsSection from '../components/sections/NewArrivalsSection';
import FeatureHighlightsSection from '../components/sections/FeatureHighlightsSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'GoVibes | Premium Backpacks for Men & Women';
  }, []);

  return (
    <>
      <HeroSection />
      <FeatureHighlightsSection />
      <FeaturedProductsSection />
      <CategoriesSection />
      <NewArrivalsSection />
    </>
  );
};

export default HomePage;