import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

const features = [
  "Cadastro de animais para adoção",
  "Acesso a recursos exclusivos",
  "Conexão direta com adotantes",
  "Solicitação de doações, promoção de rifas, divulgação de eventos",
  "Experiência de uso otimizada e acessível em qualquer dispositivo",
  "Perfil personalizado para ONGs e protetores"
];

const FeatureList: React.FC = () => {
  return (
    <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-[var(--color-text-light)] sm:grid-cols-2 sm:gap-6">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </ul>
  );
};

interface FeatureItemProps {
  feature: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature }) => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLLIElement>();

  return (
    <li
      ref={elementRef}
      className={`flex gap-x-3 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <svg className="h-6 w-5 flex-none text-[var(--color-text-section)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clipRule="evenodd"
        />
      </svg>
      {feature}
    </li>
  );
};

export default FeatureList;
