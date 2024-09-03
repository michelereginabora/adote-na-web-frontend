import React from 'react';
import { useMenu } from '../../../hooks/UseMenu';
import Logo from '../../Logo/LogoComponent';


const MenuHeader: React.FC = () => {
  const { toggleMenu } = useMenu();

  return (
    <div className="flex items-center justify-between mb-4">
      <Logo />
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
  );
};

export default MenuHeader;
