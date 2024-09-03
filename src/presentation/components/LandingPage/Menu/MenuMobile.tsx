import React from 'react';
import MenuOverlay from './MenuOverlay';
import MenuHeader from './MenuHeader';
import NavMobile from '../Nav/NavMobile';
import LoginButtonMobile from '../../Button/LoginButtonMobile';

const MenuMobile: React.FC = () => {
  return (
    <div className="lg:hidden fixed inset-0 z-50 flex">
      <MenuOverlay />
      <div className="relative z-50 w-64 bg-[var(--color-bg-dark)] shadow-lg p-6">
        <MenuHeader />
        <NavMobile />
        <LoginButtonMobile />
      </div>
    </div>
  );
};

export default MenuMobile;
