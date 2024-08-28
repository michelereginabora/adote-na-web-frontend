import React from "react";
import GithubButton from "../components/PageUnderConstruction/GithubButton";
import PageUnderConstructionHeader from "../components/PageUnderConstruction/PageUnderConstructionHeader";

interface PageUnderConstructionProps {
  backgroundImageSrc: string;
}

const PageUnderConstruction: React.FC<PageUnderConstructionProps> = ({ backgroundImageSrc }) => {
  return (
    <section className="flex flex-col md:flex-row relative w-full md:h-screen overflow-hidden">
      <div className="w-full h-1/3 md:w-1/2 md:h-full relative z-20">
        <img 
          loading="lazy" 
          src={backgroundImageSrc} 
          alt="" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-1 p-4 justify-center items-center md:p-8 overflow-auto relative z-20" style={{ backgroundColor: '#e2e1ef' }}>
        <div className="flex flex-col items-center w-full max-w-[580px]">
          <PageUnderConstructionHeader />
          <GithubButton />
        </div>
      </div>
    </section>
  );
};

export default PageUnderConstruction;
