import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Contribute: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 shrink self-start basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full font-medium max-md:max-w-full">
        <h2 className="text-2xl font-bold leading-loose text-[var(--color-primary-light)] max-md:max-w-full ">
          Contribua com o Projeto
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-light)] max-md:max-w-full">
        Nosso projeto é open source e depende da ajuda da comunidade para cobrir os custos essenciais de manutenção e desenvolvimento.</p>
      </div>
      <div className="flex mt-6 w-full max-md:max-w-full">
        <a 
          href="https://liberapay.com/miregina" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 self-stretch px-4 py-3 text-white bg-[var(--color-primary-light)] rounded-lg whitespace-nowrap hover:bg-[var(--color-primary-dark)] transition-colors"
        >
          Ajudar
          <FaHeart />
        </a>
      </div>
    </div>
  );
};

export default Contribute;
