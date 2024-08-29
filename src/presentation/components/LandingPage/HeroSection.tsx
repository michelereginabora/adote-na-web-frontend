import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa'
import { FaPaw } from 'react-icons/fa'; 

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-[var(--color-text-light)] shadow-lg py-20 md:py-32 z-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.petz.com.br/blog/wp-content/uploads/2020/01/vira-lata-caramelo-cao.jpg')",
          opacity: 0.5
        }}
      />
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-10">
          Bem-vindo ao Adote na Web
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 md:mb-10">
          Junte-se a nós e faça a diferença na vida de milhares de animais!
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <Link
          to="/emconstrucao"
          className="inline-flex items-center bg-white text-[var(--color-text-dark)] font-bold py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[var(--color-link-hover)] hover:text-[var(--color-primary-dark)] hover:shadow-xl transition duration-300"
        >
          Match de Quatro Patas
          <FaPaw className="h-5 w-5 text-[var(--color-primary-dark)] ml-2" /> 
        </Link>

          <Link
            to="https://github.com/michelereginabora/adote-na-web-frontend"
            className="flex items-center text-[var(--color-text-light)] font-normal hover:text-[var(--color-link-hover)] transition duration-300"
            >
            Contribua com o Projeto
            <FaCode className="ml-2 text-xl" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
