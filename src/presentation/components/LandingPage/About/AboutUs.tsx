import React from 'react';
import AboutUsHeading from './AboutUsHeading';
import AboutUsParagraph from './AboutUsParagraph';
import AboutUsImage from './AboutUsImage';

const AboutUs: React.FC = () => (
  <section className="bg-[var(--color-bg-dark)] p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
    <div className="flex-1">
      <AboutUsHeading />
      <AboutUsParagraph />
    </div>
    <div className="flex-shrink-0 w-full md:w-1/2 overflow-hidden">
      <AboutUsImage />
    </div>
  </section>
);

export default AboutUs;
