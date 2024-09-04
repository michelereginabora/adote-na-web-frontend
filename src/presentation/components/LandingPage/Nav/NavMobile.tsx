import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useMenu } from '../../../hooks/UseMenu';

const NavMobile: React.FC = () => {
  const { toggleMenu } = useMenu();

  return (
    <nav className="space-y-4">
      <Link 
        to="/" 
        className="block text-base font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] p-2 rounded-md"
        onClick={toggleMenu}
      >
        Início
      </Link>
      <Link 
        to="/emconstrucao" 
        className="block text-base font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] p-2 rounded-md"
        onClick={toggleMenu}
      >
        Adotar
      </Link>
      <ScrollLink 
        to="about-us" 
        smooth={true} 
        duration={500} 
        className="block text-base font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] p-2 rounded-md"
        onClick={toggleMenu}
      >
        Sobre
      </ScrollLink>
      <ScrollLink 
        to="features" 
        smooth={true} 
        duration={500} 
        className="block text-base font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] p-2 rounded-md"
        onClick={toggleMenu}
      >
        Funcionalidades
      </ScrollLink>
      <ScrollLink 
        to="section" 
        smooth={true} 
        duration={500} 
        className="block text-base font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] p-2 rounded-md"
        onClick={toggleMenu}
      >
        Benefícios
      </ScrollLink>
    </nav>
  );
};

export default NavMobile;
