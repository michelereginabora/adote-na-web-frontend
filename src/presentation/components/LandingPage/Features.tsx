import React from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { FaHeart, FaShareAlt, FaRegComments } from 'react-icons/fa';

interface FeatureItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface FeaturesProps {
  heading: string;
  subheading: string;
  description: string;
  features: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({ heading, subheading, description, features }) => {
  return (
    <div className="bg-[var(--color-bg-features)] py-16 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-20 text-[var(--color-text-dark)] pb-4 ">{heading}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-text-dark)] sm:text-4xl">
            {subheading}
          </p>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-features)]">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-[var(--color-text-dark)]">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-dark)]">
                    {feature.icon}
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-[var(--color-text-features)]">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

const exampleFeatures: FeatureItem[] = [
  {
    title: 'Cadastro de Animais',
    description: 'Espaço para uma descrição detalhada do animal, incluindo características de personalidade e necessidades especiais.',
    icon: (
      <AiOutlineFileText className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Sistema de Match',
    description: 'Algoritmo que combina as preferências do usuário com as características dos animais disponíveis.',
    icon: (
      <FaHeart className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Engajamento Social',
    description: 'Usuários podem compartilhar perfis de animais e suas experiências nas redes sociais. ONGs podem solicitar doações.',
    icon: (
      <FaShareAlt className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
  {
    title: 'Chat e Comunicação',
    description: 'Sistema de chat ao vivo para responder perguntas rápidas e interagir com os adotantes em potencial.',
    icon: (
      <FaRegComments className="h-6 w-6 text-[var(--color-text-features)]" />
    ),
  },
];

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
