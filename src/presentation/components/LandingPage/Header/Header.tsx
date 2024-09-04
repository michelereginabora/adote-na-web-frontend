import React from 'react';
import '../../../styles/variables.css';
import { useMenu } from '../../../hooks/UseMenu';
import MenuMobile from '../Menu/MenuMobile';
import Navbar from '../Nav/Navbar';
import HeroSection from '../HeroSection/HeroSection';

const Header: React.FC = () => {
  const { isMenuOpen } = useMenu();

  return (
    <>
      <header className="relative bg-[var(--color-bg-dark)] shadow-lg">
        <Navbar />
        {isMenuOpen && <MenuMobile />}
      </header>
      <HeroSection />
    </>
  );
};

export default Header;
