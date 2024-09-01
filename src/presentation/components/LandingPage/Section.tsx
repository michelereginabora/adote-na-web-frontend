import React from 'react';

const Section: React.FC = () => {
  const sectionBackground = "bg-[var(--color-bg-gray)] py-12 sm:py-20";
  const containerClasses = "mx-auto max-w-7xl px-6 lg:px-8";
  const headerText = "APOIE A CAUSA!";
  const descriptionText = "Junte-se a nós e ajude a desenvolver o web app que irá encontrar lares amorosos para animais que precisam. Faça a diferença!";
  const membershipTitle = "Faça parte da nossa comunidade";
  const membershipDescription = "Aqui será possível cadastrar animais para adoção, encontrar um novo amigo e contribuir ou solicitar doações.";
  const includedTitle = "Benefícios da plataforma";
  const features = [
    "Cadastro de animais para adoção",
    "Acesso a recursos exclusivos",
    "Conexão direta com adotantes",
    "Solicitação de doações, promoção de rifas, divulgação de eventos",
    "Experiência de uso otimizada e acessível em qualquer dispositivo",
    "Perfil personalizado para ONGs e protetores"
  ];


  return (
    <div className={sectionBackground}>
      <div className={containerClasses}>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text-section)] sm:text-4xl">
            {headerText}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-light)]">
            {descriptionText}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-section)]">{membershipTitle}</h3>
            <p className="mt-6 text-base leading-7 text-[var(--color-text-light)]">
              {membershipDescription}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[var(--color-text-section)]">{includedTitle}</h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-[var(--color-text-light)] sm:grid-cols-2 sm:gap-6">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-[var(--color-text-section)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;