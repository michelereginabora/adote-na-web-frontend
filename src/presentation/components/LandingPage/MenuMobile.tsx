import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const MenuMobile: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
      {/* Menu */}
      <div className="relative z-50 w-64 bg-[var(--color-bg-dark)] shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <img className="h-8 w-auto" src="src/assets/patas.png" alt="ONG de Animais" />
          <button
            type="button"
            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            <span className="sr-only">Fechar menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-4">
          <Link to="/" className="block text-base font-medium text-[var(--color-text-light)] hover:bg-[var(--color-link-hover)] p-2 rounded-md">Início</Link>
          <Link to="/adotar" className="block text-base font-medium text-[var(--color-text-light)] hover:bg-[var(--color-link-hover)] p-2 rounded-md">Adotar</Link>
          <ScrollLink to="about-us" smooth={true} duration={500} className="block text-base font-medium text-[var(--color-text-light)] hover:bg-[var(--color-link-hover)] p-2 rounded-md">Sobre</ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} className="block text-base font-medium text-[var(--color-text-light)] hover:bg-[var(--color-link-hover)] p-2 rounded-md">Funcionalidades</ScrollLink>
          <ScrollLink to="section" smooth={true} duration={500} className="block text-base font-medium text-[var(--color-text-light)] hover:bg-[var(--color-link-hover)] p-2 rounded-md">Benefícios</ScrollLink>
        </nav>
        <div className="mt-4">
          <Link to="/login" className="block w-full bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] text-sm font-semibold leading-6 py-3 px-6 rounded-md shadow-md hover:bg-[var(--color-primary-dark)] hover:text-[var(--color-primary-light)] transition duration-300 ease-in-out">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
