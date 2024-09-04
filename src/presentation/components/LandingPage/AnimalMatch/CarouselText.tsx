import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';
import { Link } from 'react-router-dom';

const CarouselText: React.FC = () => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className={`w-full md:w-1/3 p-6 md:p-8 text-white flex flex-col justify-between rounded-lg lg:ml-auto lg:w-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="space-y-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          Dê um <span className="text-[var(--color-primary-light)]">Match!</span>
        </h2>
        <p className="text-base sm:text-xl font-light">
          Ao cadastrar um animal, ele estará disponível para encontrar o amigo perfeito.
        </p>
      </div>
      <div className="mt-8">
        <Link 
          to="/emconstrucao" 
          className="bg-white text-[var(--color-primary-light)] font-semibold py-4 px-4 rounded-full hover:bg-[var(--color-link-hover)] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Comece Agora
        </Link>
        <p className="mt-8 text-sm italic text-gray-400">*Imagens exemplificativas</p>
      </div>
    </div>
  );
};

export default CarouselText;
