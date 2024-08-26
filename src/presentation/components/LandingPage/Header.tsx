import React, { useState } from 'react';
import Navbar from './Navbar';
import MenuMobile from './MenuMobile';
import HeroSection from './HeroSection';
import '../../styles/variables.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative bg-[var(--color-bg-dark)] shadow-lg">
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isMenuOpen && <MenuMobile toggleMenu={toggleMenu} />}
      </header>
      <HeroSection />
    </>
  );
};

export default Header;
