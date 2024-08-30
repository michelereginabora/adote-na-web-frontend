import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-bg-dark)] text-[var(--color-text-light)] py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Direitos Autorais */}
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Plataforma  Adote na Web. Criado por <a href='https://michelereginabora.github.io/'>Michele Regina Bora</a>.
          </p>

          {/* Redes Sociais */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/michele-regina-bora/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/amicheleregina/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://github.com/michelereginabora/adote-na-web-frontend" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
