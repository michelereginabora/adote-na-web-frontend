import React from 'react';

const HeroBackgroundImage: React.FC = () => (
  <>
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('assets/vira-lata-caramelo-cao.webp')",
        opacity: 0.5,
      }}
    />
    <div className="absolute inset-0 bg-black opacity-40" />
  </>
);

export default HeroBackgroundImage;
