import React from 'react';

const links = [
//   { text: "Resources", href: "#" },
  { text: "Contato", href: "mailto:micheleregina.dev@gmail.com" },
  { text: "Sobre o projeto", href: "https://github.com/michelereginabora/adote-na-web-frontend?tab=readme-ov-file#adote-na-web" }
];

const FooterLinks: React.FC = () => {
  return (
    <nav className="flex gap-8 items-start mt-8 text-xs leading-none text-[var(--color-text-light)] ">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="gap-2 self-stretch rounded min-h-[16px] hover:text-[var(--color-primary-light)]">
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;