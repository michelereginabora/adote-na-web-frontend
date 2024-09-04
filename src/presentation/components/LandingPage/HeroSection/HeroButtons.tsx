import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw, FaCode } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const HeroButtons: React.FC = () => (
  <div className="flex flex-col md:flex-row gap-4 items-center justify-center animate-fadeIn">
    <ScrollLink
      to="animals"
      smooth={true}
      duration={500}
      className="inline-flex items-center bg-white text-[var(--color-text-dark)] font-bold py-3 px-6 md:px-8 rounded-full shadow-md hover:bg-[var(--color-link-hover)] hover:text-[var(--color-primary-dark)] hover:shadow-xl transition duration-300"
    >
      Match de Quatro Patas
      <FaPaw className="h-5 w-5 text-[var(--color-primary-dark)] ml-2" />
    </ScrollLink>

    <Link
      to="https://github.com/michelereginabora/adote-na-web-frontend"
      className="flex items-center text-[var(--color-text-light)] font-normal hover:text-[var(--color-link-hover)] transition duration-300"
    >
      Contribua com o Projeto
      <FaCode className="ml-2 text-xl" />
    </Link>
  </div>
);

export default HeroButtons;
