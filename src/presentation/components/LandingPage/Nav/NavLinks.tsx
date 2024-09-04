import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavLinks: React.FC = () => (
  <nav className="hidden lg:flex lg:gap-x-12">
    <Link to="/" className="text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] px-4 py-2 rounded-md transition duration-300">
      Início
    </Link>
    <Link to="/emconstrucao" className="text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] px-4 py-2 rounded-md transition duration-300">
      Adotar
    </Link>
    <ScrollLink to="about-us" smooth={true} duration={500} className="text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] px-4 py-2 rounded-md transition duration-300">
      Sobre
    </ScrollLink>
    <ScrollLink to="features" smooth={true} duration={500} className="text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-primary-light)] px-4 py-2 rounded-md transition duration-300">
      Funcionalidades
    </ScrollLink>
    <ScrollLink to="section" smooth={true} duration={500} className="text-sm font-semibold text-[var(--color-text-light)] hover:text-[var(--color-primary-light)]  px-4 py-2 rounded-md transition duration-300">
      Benefícios
    </ScrollLink>
  </nav>
);

export default NavLinks;
