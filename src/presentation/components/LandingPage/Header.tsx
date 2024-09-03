import React from 'react';
import Navbar from './Nav/Navbar';
import MenuMobile from './Menu/MenuMobile';
import HeroSection from './HeroSection';
import { useMenu } from '../../hooks/UseMenu';
import '../../styles/variables.css';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      <header className="relative bg-[var(--color-bg-dark)] shadow-lg">
        <Navbar />
        {isMenuOpen && <MenuMobile toggleMenu={toggleMenu} />}
      </header>
      <HeroSection />
    </>
  );
};

export default Header;
