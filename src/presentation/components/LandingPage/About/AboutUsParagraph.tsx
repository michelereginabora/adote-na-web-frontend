import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

const AboutUsParagraph: React.FC = () => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLParagraphElement>();
  const paragraph = `
    Este aplicativo web foi projetado para transformar o processo de adoção de animais resgatados, conectando futuros adotantes com pets que precisam de um lar. Como um projeto de código aberto, nossa plataforma não só facilita a adoção responsável, mas também cria uma comunidade engajada e colaborativa, onde todos podem contribuir para um mundo melhor para os animais.

    Na nossa plataforma, você pode explorar perfis detalhados de animais resgatados, usar nosso sistema de correspondência inteligente para encontrar o pet ideal e interagir diretamente com abrigos e organizações de proteção animal. 

    O melhor de tudo? Nossa aplicação web oferece uma experiência imersiva e fluida semelhante a um aplicativo, sem a necessidade de instalação (PWA). Assim, você pode acessar todas as funcionalidades de maneira rápida e prática, onde quer que esteja.
  `;

  return (
    <p
      ref={elementRef}
      className={`md:text-lg sm:text-base text-justify text-[var(--color-text-light)] leading-relaxed whitespace-pre-line ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
    >
      {paragraph}
    </p>
  );
};

export default AboutUsParagraph;
