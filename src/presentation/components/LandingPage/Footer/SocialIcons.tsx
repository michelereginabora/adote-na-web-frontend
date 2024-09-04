import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socialIcons = [
  { icon: FaGithub, alt: "Github", url: "https://github.com/michelereginabora/adote-na-web-frontend" },
  { icon: FaInstagram, alt: "Instagram", url: "https://www.instagram.com/amicheleregina/" },
  { icon: FaLinkedinIn, alt: "LinkedIn", url: "https://www.linkedin.com/in/michele-regina-bora/" }
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-4 items-start mt-8 text-[var(--color-primary-light)]">
      {socialIcons.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a 
            key={index} 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--color-text-light)] transition-colors duration-300"
          >
            <IconComponent 
              title={social.alt}
              className="w-6 h-6"
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
