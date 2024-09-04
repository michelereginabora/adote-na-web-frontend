import React from 'react';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

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

const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => {
  const { elementRef, isVisible } = useFadeInOnScroll<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className={`relative pl-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
      style={{ transitionDelay: `${index * 100}ms`}} 
    >
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
  );
};

const Features: React.FC<FeaturesProps> = ({ heading, subheading, description, features }) => {
  return (
    <div className="bg-[var(--color-bg-features)] py-16 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-20 text-[var(--color-text-dark)] pb-4">{heading}</h2>
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
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
