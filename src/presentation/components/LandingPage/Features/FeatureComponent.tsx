import React from 'react';
import exampleFeatures from './exampleFeatures';
import Features from './Features';

const FeatureComponent: React.FC = () => {
  return (
    <Features
      heading="Promovendo a causa animal"
      subheading="Plataforma de Adoção de Animais Resgatados"
      description="Descubra e adote animais resgatados que buscam um lar. Use nosso sistema de match para encontrar o pet ideal, conecte-se com abrigos e dê uma nova chance a um amigo peludo."
      features={exampleFeatures}
    />
  );
};

export default FeatureComponent;
