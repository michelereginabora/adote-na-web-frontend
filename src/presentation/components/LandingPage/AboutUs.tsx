import React from 'react';

const AboutUs: React.FC = () => {
  const heading = " Conheca a Adote na Web: Um Web App de Adoção de Animais";
  const paragraph = `
    Este aplicativo web foi projetado para transformar o processo de adoção de animais resgatados, conectando futuros adotantes com pets que precisam de um lar. Como um projeto de código aberto, nossa plataforma não só facilita a adoção responsável, mas também cria uma comunidade engajada e colaborativa, onde todos podem contribuir para um mundo melhor para os animais.

Na nossa plataforma, você pode explorar perfis detalhados de animais resgatados, usar nosso sistema de correspondência inteligente para encontrar o pet ideal e interagir diretamente com abrigos e organizações de proteção animal. 

O melhor de tudo? Nossa aplicação web oferece uma experiência imersiva e fluida semelhante a um aplicativo, sem a necessidade de instalação (PWA). Assim, você pode acessar todas as funcionalidades de maneira rápida e prática, onde quer que esteja.
 `;

  return (
    <section className="bg-[var(--color-bg-dark)] p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl sm:text-base font-extrabold mb-4 md:mb-6 text-[var(--color-primary-light)]">
          {heading}
        </h2>
        <p className="md:text-lg sm:text-base md:text-xl sm:text-base text-justify text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden">
        <img
            src="assets/dogandcats.webp"
            alt="About Us"
            className="w-[95%] h-auto object-cover rounded-lg md:ml-4"
        />
        </div>
    </section>
  );
};

export default AboutUs;
