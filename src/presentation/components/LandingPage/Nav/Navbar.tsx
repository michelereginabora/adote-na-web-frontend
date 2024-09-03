import React from 'react';
import LoginButton from '../../Button/LoginButton';
import Logo from '../../Logo/LogoComponent';
import MenuButton from '../Menu/MenuButtom';
import NavLinks from './NavLinks';



const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <Logo />
      <MenuButton />
      <NavLinks />
      <LoginButton />
    </nav>
  );
};

export default Navbar;
