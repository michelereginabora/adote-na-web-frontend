import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = ({toggleMenu }) => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">ONG de Animais</span>
          <img className="h-8 w-auto" src="assets/patas.png" alt="Logo" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--color-text-light)]"
          onClick={toggleMenu}
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link to="/" className="text-sm font-semibold leading-6 text-[var(--color-text-light)] hover:text-[var(--color-link-hover)]">Início</Link>
        <Link to="/adotar" className="text-sm font-semibold leading-6 text-[var(--color-text-light)] hover:text-[var(--color-link-hover)]">Adotar</Link>
        <ScrollLink to="about-us" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-[var(--color-text-light)] hover:text-[var(--color-link-hover)]">Sobre</ScrollLink>
        <ScrollLink to="features" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-[var(--color-text-light)] hover:text-[var(--color-link-hover)]">Funcionalidades</ScrollLink>
        <ScrollLink to="section" smooth={true} duration={500} className="text-sm font-semibold leading-6 text-[var(--color-text-light)] hover:text-[var(--color-link-hover)]">Benefícios</ScrollLink>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          to="/login"
          className="bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-semibold leading-6 py-3 px-6 rounded-md shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-primary-light)] transition duration-300 ease-in-out"
        >
          Entrar <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
