import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';


const AboutUsHeading: React.FC = () => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLHeadingElement>();

  return (
    <h2
      ref={elementRef}
      className={`text-3xl md:text-4xl sm:text-base font-extrabold mb-4 md:mb-6 text-[var(--color-primary-light)] ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
    >
      Conheça a Adote na Web: Um Web App de Adoção de Animais
    </h2>
  );
};

export default AboutUsHeading;
