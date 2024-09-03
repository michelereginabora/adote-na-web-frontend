import React from 'react';
import { useMenu } from '../../../hooks/UseMenu';

const MenuOverlay: React.FC = () => {
  const { toggleMenu } = useMenu();

  return (
    <div className="fixed inset-0 bg-black opacity-50" onClick={toggleMenu}></div>
  );
};

export default MenuOverlay;
