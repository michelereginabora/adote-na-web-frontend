import React from "react";

const PageUnderConstructionHeader: React.FC = () => {
  return (
    <>
       <h2 className="text-4xl font-bold leading-tight text-slate-900 text-center">
        Página em Construção
      </h2>
      <p className="self-stretch mt-8 mb-4 text-lg leading-7 text-slate-600 text-center max-w-2xl">
        Estamos construindo algo incrível e gostaríamos da sua ajuda! 
        Convite aberto para contribuir com o projeto:
      </p>
      <ul className="mt-4 mb-4 text-base leading-7 text-slate-600 list-disc list-inside">
        <li>Compartilhe suas ideias para melhorar o projeto</li>
        <li>Contribua com seus conhecimentos de design</li>
        <li>Ajude no desenvolvimento com suas habilidades de programação</li>
        <li>Ofereça feedback sobre a usabilidade e funcionalidades</li>
      </ul>
      <p className="mt-6 mb-8 text-base leading-7 text-slate-600 text-center">
        Juntos, podemos criar algo extraordinário. Sua criatividade e expertise são bem-vindas!
      </p>
    </>
  );
};

export default PageUnderConstructionHeader;