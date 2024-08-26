import React from 'react';

const AboutUs: React.FC = () => {
  const heading = "Sobre o Projeto";
  const paragraph = `
    Este aplicativo web foi desenvolvido para promover a adoção de animais resgatados, conectando futuros adotantes com pets que precisam de um lar. Como um projeto de código aberto, nossa plataforma busca não apenas facilitar a adoção responsável, mas também criar uma comunidade engajada e colaborativa.

    Através de nossa plataforma, você pode explorar perfis de animais resgatados, usar nosso sistema de correspondência para encontrar o pet ideal e interagir diretamente com abrigos e organizações.

    Convidamos você a fazer parte desta missão! Contribua com o projeto, ajude a melhorar a plataforma e compartilhe com sua rede. Juntos, podemos oferecer uma nova chance a muitos animais e promover a adoção consciente.
  `;

  return (
    <section className="bg-[var(--color-bg-dark)] p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 md:mb-6 text-[var(--color-primary-light)]">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">
          {paragraph}
        </p>
      </div>
      <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden">
        <img
            src="assets/dogandcats.png"
            alt="About Us"
            className="w-full h-auto object-cover rounded-lg"
        />
        </div>
    </section>
  );
};

export default AboutUs;
