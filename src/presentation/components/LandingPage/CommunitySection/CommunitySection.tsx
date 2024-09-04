import React from 'react';
import FeatureList from './FeatureList';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

const CommunitySection: React.FC = () => {
  const sectionBackground = "bg-[var(--color-bg-gray)] py-12 sm:py-20";
  const containerClasses = "mx-auto max-w-7xl px-6 lg:px-8";

  // Apply the hook to different text elements
  const { elementRef: headerRef, isVisible: headerIsVisible } = useFadeInOnScroll<HTMLHeadingElement>();
  const { elementRef: descriptionRef, isVisible: descriptionIsVisible } = useFadeInOnScroll<HTMLParagraphElement>();
  const { elementRef: membershipTitleRef, isVisible: membershipTitleIsVisible } = useFadeInOnScroll<HTMLHeadingElement>();
  const { elementRef: membershipDescriptionRef, isVisible: membershipDescriptionIsVisible } = useFadeInOnScroll<HTMLParagraphElement>();

  return (
    <div className={sectionBackground}>
      <div className={containerClasses}>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className={`text-3xl font-bold tracking-tight text-[var(--color-text-section)] sm:text-4xl transition-opacity duration-1000 ${headerIsVisible ? 'opacity-100' : 'opacity-0'}`}
            ref={headerRef}
          >
            APOIE A CAUSA!
          </h2>
          <p
            className={`mt-6 text-lg leading-8 text-[var(--color-text-light)] transition-opacity duration-1000 ${descriptionIsVisible ? 'opacity-100' : 'opacity-0'}`}
            ref={descriptionRef}
          >
            Junte-se a nós e ajude a desenvolver o web app que irá encontrar lares amorosos para animais que precisam. Faça a diferença!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3
              className={`text-2xl font-bold tracking-tight text-[var(--color-text-section)] transition-opacity duration-1000 ${membershipTitleIsVisible ? 'opacity-100' : 'opacity-0'}`}
              ref={membershipTitleRef}
            >
              Faça parte da nossa comunidade
            </h3>
            <p
              className={`mt-6 text-base leading-7 text-[var(--color-text-light)] transition-opacity duration-1000 ${membershipDescriptionIsVisible ? 'opacity-100' : 'opacity-0'}`}
              ref={membershipDescriptionRef}
            >
              Aqui será possível cadastrar animais para adoção, encontrar um novo amigo e contribuir ou solicitar doações.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[var(--color-text-section)]">
                Benefícios da plataforma
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <FeatureList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
