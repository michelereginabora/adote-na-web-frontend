import React from 'react';

const Logo: React.FC = () => (
  <div className="flex lg:flex-1">
    <a href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Adote na Web</span>
      <img className="h-8 w-auto" src="assets/pata.webp" alt="Logo" />
    </a>
  </div>
);

export default Logo;
