import React from 'react';
import FooterLinks from './FooterLinks';
import SocialIcons from './SocialIcons';
import Logo from '../../Logo/LogoComponent';
import Contribute from './Contribute';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col px-8 py-16 bg-[var(--color-bg-dark)]  border-t border-solid border-t-black border-t-opacity-20 max-md:px-5">
      <div className="flex flex-wrap gap-8 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink items-start basis-0 min-w-[240px] max-md:max-w-full">
          <Logo />
          <FooterLinks />
          <SocialIcons />
        </div>
        <Contribute />
      </div>
          <div className="flex flex-col justify-center mt-16 w-full text-xs leading-none max-md:mt-10 max-md:max-w-full">
      <div className="flex w-full bg-neutral-200 min-h-[1px] max-md:max-w-full opacity-50" />
      
      <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
        <nav className="flex gap-8 items-start whitespace-nowrap text-[var(--color-text-light)] opacity-70">
          <a href='https://michelereginabora.github.io/' className="gap-2 self-stretch rounded min-h-[16px]">Criado por Michele Regina Bora</a>
          {/* <a href="#" className="gap-2 self-stretch rounded min-h-[16px]">Política de Privacidade</a>
          <a href="#" className="gap-2 self-stretch rounded min-h-[16px]">Termos de Uso</a> */}
        </nav>

        {/* Texto com opacidade */}
        <div className="text-[var(--color-text-light)] opacity-70">
          &copy; {new Date().getFullYear()} Adote na Web.
        </div>
      </div>
    </div>

    </footer>
  );
};

export default Footer;