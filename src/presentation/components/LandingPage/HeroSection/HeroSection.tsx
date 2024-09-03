import React from 'react';
import HeroHeading from './HeroHeading';
import HeroSubheading from './HeroSubheading';
import HeroButtons from './HeroButtons';
import HeroBackgroundImage from './HeroBackgroundImage';

const HeroSection: React.FC = () => (
  <div className="relative bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-[var(--color-text-light)] shadow-lg py-20 md:py-32 z-40">
    <HeroBackgroundImage />
    <div className="relative container mx-auto text-center px-4">
      <HeroHeading />
      <HeroSubheading />
      <HeroButtons />
    </div>
  </div>
);

export default HeroSection;
